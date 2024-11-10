import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
            navigate("/dashboard");

        } catch (error) {
            console.error("Login error:", error.message);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Row className="w-100">
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="p-4 rounded bg-white shadow">
                        <h3 className="text-center mb-4">Login</h3>
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
