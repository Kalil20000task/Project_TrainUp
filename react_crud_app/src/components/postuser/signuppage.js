import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logowhite.png'; // Make sure to adjust this path
import './login.css';
const SignUp = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        password: '',
        role: 'normal user'
    });
    const navigate = useNavigate();

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
    
        try {
            const response = await fetch("http://localhost:5000/api/signusers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            navigate("/");
        } catch (error) {
            console.error("error.message");
        }
    };

    return (
        <div className="login-page">  {/* Add this wrapper */}
           <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}> {/* Widened the form */}
                    <div className="p-5 rounded bg-white shadow">
                        {/* Logo at the top of the form */}
                        <div className="text-center mb-4">
                            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                        </div>
                        
                        <h3 className="text-center mb-4 text-black">Sign Up</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="fullname" className="mb-3">
                                <Form.Label className="text-black">Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your full name"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
                                />
                            </Form.Group>

                            <Form.Group controlId="username" className="mb-3">
                                <Form.Label className="text-black">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    style={{ backgroundColor: '#e0f7fa' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label className="text-black">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={{ backgroundColor: '#e0f7fa' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="role" className="mb-4">
                                <Form.Label className="text-black">Role</Form.Label>
                                <Form.Select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="admin">Admin</option>
                                    <option value="editor">Editor</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="warning" type="submit" className="w-100"> {/* Orange button */}
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default SignUp;
