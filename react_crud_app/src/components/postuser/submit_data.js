import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getNames } from 'country-list';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import logo from '../images/logowhite.png'; 

const RegistrationForm = () => {
  const { t, i18n } = useTranslation(); // Import translation hook
  const [formData, setFormData] = useState({
    fullName: '',
    telephone: '',
    email: '',
    country: '',
    course: [],
    date: { type: Date, default: Date.now }
  });

  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  // const countries = ["Select Country", "United States", "Canada", "United Kingdom", "Australia"];
  //const courses = ["Accounting","Digital Marketing","Nursing","Automechanics", "English Language", "Plumbing", "Computer Basics", "IT(information Technology)","Business Administration"];
  const courses = [
    { label: "Accounting", value: "Accounting" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "Nursing", value: "Nursing" },
    { label: "Automechanics", value: "Automechanics" },
    { label: "English Language", value: "English Language" },
    { label: "Plumbing", value: "Plumbing" },
    { label: "Computer Basics", value: "Computer Basics" },
    { label: "IT (Information Technology)", value: "IT (Information Technology)" },
    { label: "Business Administration", value: "Business Administration" },
  ];

  useEffect(() => {
    setCountries(['Select Country', ...getNames()]); // Get all country names and add "Select Country" as the first option
  }, []);

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === "course") {
      const selectedCourses = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);

      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedCourses, // Update to store all selected courses
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCourseChange = (selectedOptions) => {
    const selectedCourses = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData((prevData) => ({
      ...prevData,
      course: selectedCourses,
    }));
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change language
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here

    const currentDate = new Date().toISOString().split('T')[0]; // Gets current date in YYYY-MM-DD format

    const formDataToSubmit = {
      ...formData,
      course: formData.course.join(', '), // Convert array to comma-separated string
      date: currentDate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataToSubmit)
      })
      const data = await response.json(response);
      console.log(data);
      navigate("/table");
    }
    catch (error) {
      console.error("error.message");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 rounded shadow-lg" style={{ maxWidth: '1200px', backgroundColor: '#fff', color: '#000', width:'50%' }}>
        <div className="text-end mb-2">
          <button onClick={() => handleLanguageChange('en')}>English</button>
          <button onClick={() => handleLanguageChange('ti')}>Tigrinya</button>
        </div>
        <div className="text-center mb-4">
                            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </div>
        <h2 className="mb-4 text-center" style={{  color: 'orange'  }}>{t('Course Registration Form')}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>{t('Full Name')}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="bg-lightblue text-dark"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTelephone">
            <Form.Label>{t('Telephone')}</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter telephone number"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="bg-lightblue text-dark"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t('Email Address')}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-lightblue text-dark"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label>{t('Country')}</Form.Label>
            <Form.Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="bg-lightblue text-dark"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCourse">
            <Form.Label >{t('Course List')}</Form.Label>
            <Select
              isMulti
              options={courses}
              value={courses.filter(course => formData.course.includes(course.value))}
              onChange={handleCourseChange}
              className="text-dark"
              placeholder="Select courses"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100 mt-3">
            {t('Register')}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationForm;
