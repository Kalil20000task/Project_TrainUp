import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    
        // const currentDate = new Date().toISOString().split('T')[0]; // Gets current date in YYYY-MM-DD format
    
        // const formDataToSubmit = {
        //   ...formData,
        // //   course: formData.course.join(', '), // Convert array to comma-separated string
        // //   date: currentDate,
        // };
    
        try{
          const response= await fetch("http://localhost:5000/api/loginusers",{
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          })
          const data=await response.json(response);
          console.log(data);
          navigate("/")
        }
        catch(error){
          console.error("error.message");
    
        }
      }


    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Row className="w-100">
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="p-4 rounded bg-white shadow">
                        <h3 className="text-center mb-4">Login</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username" className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
