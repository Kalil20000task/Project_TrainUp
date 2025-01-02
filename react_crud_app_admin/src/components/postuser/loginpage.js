import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../images/logowhite.png";
import "./login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(null); // State to store error messages
    const [showSuccess, setShowSuccess] = useState(false); // State for success modal
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error message on submit

        try {
            const response = await fetch(
                "https://node-crud-app-fwr0.onrender.com/api/loginusers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Invalid username or password");
                return;
            }

            const data = await response.json();
            console.log(data);

            // Optional: Save the JWT token in localStorage
            localStorage.setItem("token", data.token);

            // Show success dialog
            setShowSuccess(true);

            // Automatically close modal and redirect after 1 second
            setTimeout(() => {
                setShowSuccess(false);
                navigate("/"); // Redirect to the home page
            }, 1000);
        } catch (error) {
            console.error("Login error:", error.message);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Row className="w-100">
                    <Col md={{ span: 4, offset: 4 }}>
                        <div
                            className="p-4 rounded shadow-lg"
                            style={{ maxWidth: "1200px", width: "100%", backgroundColor: "#fff" }}
                        >
                            <div className="text-center mb-4">
                                <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
                            </div>
                            <h3 className="text-center mb-4" style={{ color: "#333" }}>
                                Login
                            </h3>
                            {error && <Alert variant="danger">{error}</Alert>}
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
                                            backgroundColor: "#e0f7fa",
                                            border: "1px solid #ccc",
                                            color: "#333",
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
                                            backgroundColor: "#e0f7fa",
                                            border: "1px solid #ccc",
                                            color: "#333",
                                        }}
                                    />
                                </Form.Group>
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="w-100 mt-3"
                                    style={{ backgroundColor: "#ff9800", borderColor: "#ff9800" }}
                                >
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Success Modal */}
            <Modal show={showSuccess} centered>
                <Modal.Body className="text-center">
                    <p>Login successful! Redirecting...</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;
