import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logowhite.png';
import './login.css';
const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null); // State to store error messages
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
        setError(null); // Reset error message on submit

        try {
            const response = await fetch("http://localhost:5000/api/loginusers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) { // Check if the response is not successful
                const errorData = await response.json();
                setError(errorData.message || 'Invalid username or password'); // Display error message
                return;
            }

            const data = await response.json();
            console.log(data);

            // Optional: Save the JWT token in localStorage
            localStorage.setItem('token', data.token);

            // Navigate to the home page or dashboard on successful login
            navigate("/");

        } catch (error) {
            console.error("Login error:", error.message);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-page">  {/* Add this wrapper */}
           <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="p-4 rounded shadow-lg" style={{ maxWidth: '1200px', width: '100%', backgroundColor: '#fff' }}>
                        {/* Add Logo at the Top */}
                        <div className="text-center mb-4">
                            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                        </div>

                        <h3 className="text-center mb-4" style={{ color: '#333' }}>Login</h3>
                        {error && <Alert variant="danger">{error}</Alert>} {/* Error message display */}
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
                                    style={{
                                        backgroundColor: '#e0f7fa', // Light blue background for input fields
                                        border: '1px solid #ccc',
                                        color: '#333'
                                    }}
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
                                    style={{
                                        backgroundColor: '#e0f7fa', // Light blue background for input fields
                                        border: '1px solid #ccc',
                                        color: '#333'
                                    }}
                                />
                            </Form.Group>

                            <Button 
                                variant="warning" // Orange-like color for the button
                                type="submit" 
                                className="w-100 mt-3"
                                style={{ backgroundColor: '#ff9800', borderColor: '#ff9800' }} // Custom orange color for button
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Login;
