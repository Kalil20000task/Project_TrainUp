import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    telephone: '',
    email: '',
    country: '',
    course: '',
  });

  const countries = ["Select Country", "United States", "Canada", "United Kingdom", "Australia"];
  const courses = ["Select Course", "Web Development", "Data Science", "AI and Machine Learning", "Cyber Security"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" >
     <div className="p-4 rounded shadow-lg" style={{ maxWidth: '900px', backgroundColor: '#333', color: '#fff' }}>

        <h2 className="mb-4 text-center">Course Registration Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="bg-white text-dark"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTelephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter telephone number"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
               className="bg-white text-dark"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
               className="bg-white text-dark"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
               className="bg-white text-dark"
            >
              {countries.map((country, idx) => (
                <option key={idx} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCourse">
            <Form.Label>Course List</Form.Label>
            <Form.Select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
               className="bg-white text-dark"
            >
              {courses.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationForm;

