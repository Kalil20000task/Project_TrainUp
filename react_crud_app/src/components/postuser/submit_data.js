import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getNames } from 'country-list';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import logo from '../images/logowhite.png'; 

const RegistrationForm = () => {
  const { t, i18n } = useTranslation(); // Import translation hook
  const [formData, setFormData] = useState({
    fullName: '',
   // telephone: '',
    whatsappNumber: '', 
    email: '',
    country: '',
    course: [],
    additionalcourses:'',
    learningMode: '', // New field for Learning Mode
    date: { type: Date, default: Date.now }
  });

  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
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

  const learningModes = [
    { label: "In class", value: "In class" },
    { label: "Online class", value: "Online class" }
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

  const handleLearningModeChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      learningMode: selectedOption ? selectedOption.value : '', // Update learning mode field
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
      whatsappNumber: formData.whatsappNumber,
      course: formData.course.join(', '), // Convert array to comma-separated string
      date: currentDate,
    };

    try {
      const response = await fetch("https://project-trainup-9.onrender.com/api/user", {
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
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </div>
        <h2 className="mb-4 text-center" style={{ color: 'orange' }}>{t('Course Registration Form')}</h2>
        
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

          {/* <Form.Group className="mb-3" controlId="formTelephone">
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
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formWhatsappNumber">
  <Form.Label>{t('WhatsApp Number')}</Form.Label>
  <ReactPhoneInput
    country={'us'} // Default country
    value={formData.whatsappNumber}
    onChange={(value) =>
      setFormData((prevData) => ({ ...prevData, whatsappNumber: value }))
    }
    inputStyle={{
      width: '100%',
      backgroundColor: '#e0f7fa',
      color: '#000',
    }}
    dropdownStyle={{ color: '#000' }}
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
              //required
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
            <Form.Label>{t('Course List')}</Form.Label>
            <Select
              isMulti
              options={courses}
              value={courses.filter(course => formData.course.includes(course.value))}
              onChange={handleCourseChange}
              className="text-dark"
              placeholder="Select courses"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
              required
            />
          </Form.Group>

         
          <Form.Group className="mb-3" controlId="additionalcourses">
            <Form.Label>{t('Additional Courses')}</Form.Label>
            <Form.Control
              
              type="text"
              placeholder="courses you want to learn that are not in the list"
              name="additionalcourses"
              value={formData.additionalcourses}
              onChange={handleChange}
              required
              className="bg-lightblue text-dark"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
            />
          </Form.Group>

          {/* New Dropdown for Learning Mode */}
          <Form.Group className="mb-3" controlId="formLearningMode">
            <Form.Label>{t('Learning Mode')}</Form.Label>
            <Select
              options={learningModes}
              value={learningModes.find(option => option.value === formData.learningMode)}
              onChange={handleLearningModeChange}
              className="text-dark"
              placeholder="Select learning mode"
              style={{ backgroundColor: '#e0f7fa' }} // Very light blue input fields
              required
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
