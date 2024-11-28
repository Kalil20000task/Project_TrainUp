import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getNames } from "country-list";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "../images/logowhite.png";
import NProgress from 'nprogress';


const RegistrationForm = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    email: "",
    country: "",
    course: [],
    additionalcourses: "",
    learningMode: "",
    date: { type: Date, default: Date.now },
  });

  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const courses = [
    
    { label: "Accounting theory", value: "Accounting theory" },
     { label: "Accounting quick course", value: "Accounting quick course" },
    
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "Certified Nurse Assistant ", value: "Certified Nurse Assistant" },
    { label: "Automechanics", value: "Automechanics" },
    { label: "English Language", value: "English Language" },
    { label: "French Language", value: "French Language" },
    { label: "Plumbing", value: "Plumbing" },
    { label: "Computer Basics", value: "Computer Basics" },
    { label: "IT (Information Technology)", value: "IT (Information Technology)" },
    { label: "Business Administration", value: "Business Administration" },


     { label: "Personal Development", value: "Personal Development" },
    { label: "Marketing and sales", value: "Marketing and sales" },
    { label: "Report writing", value: "Report writing" },
    { label: "Project Management", value: "Project Management" },
    { label: "Monitoring and Evaluation", value: "Monitoring and Evaluation" },
    { label: "Electronics", value: "Electronics" },
    { label: "Electricity", value: "Electricity" },
    { label: "Graphics and video editing", value: "Graphics and video editing" },
    { label: "Tally software", value: "Tally software" },
    { label: "QuickBooks software", value: "QuickBooks software" },

       { label: "IELTS Preparatory course", value: "IELTS Preparatory course" },
    { label: "Artificial Intelligence course", value: "Artificial Intelligence cours" },
      { label: "Advance IT course", value: "Advance IT course" },
    { label: "Microsoft Excel", value: "Microsoft Excel" },
    
    
  ];

  const learningModes = [
    { label: t("In class"), value: "In class" },
    { label: t("Online class"), value: "Online class" },
  ];

  useEffect(() => {
    setCountries(["Select Country", ...getNames()]);
  }, []);

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === "course") {
      const selectedCourses = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedCourses,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCourseChange = (selectedOptions) => {
    const selectedCourses = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData((prevData) => ({
      ...prevData,
      course: selectedCourses,
    }));
  };

  const handleLearningModeChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      learningMode: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const formDataToSubmit = {
      ...formData,
      whatsappNumber: formData.whatsappNumber,
      course: formData.course.join(", "),
      date: currentDate,
    };
    NProgress.start();

    try {
      const response = await fetch(
        "https://node-crud-app-fwr0.onrender.com/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSubmit),
        }
      );
      const data = await response.json();
      console.log(data);
      navigate("/table");
    } catch (error) {
      console.error("error.message");
    }
    finally{
      NProgress.done();
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={8} sm={12} className="mx-auto">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <div className="text-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>
            <h2 className="mb-4 text-center" style={{ color: "orange" }}>
              {t("Course Registration Form")}
            </h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>{t("Full Name")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-lightblue text-dark"
                  style={{ width: "100%", backgroundColor: "#e0f7fa" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formWhatsappNumber">
                <Form.Label>{t("WhatsApp Number")}</Form.Label>
                <ReactPhoneInput
                  country={"us"}
                  value={formData.whatsappNumber}
                  onChange={(value) =>
                    setFormData((prevData) => ({ ...prevData, whatsappNumber: value }))
                  }
                  inputStyle={{
                    width: "100%",
                    backgroundColor: "#e0f7fa",
                    color: "#000",
                  }}
                  dropdownStyle={{ color: "#000" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>{t("Email Address")}</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-lightblue text-dark"
                  style={{ width: "100%", backgroundColor: "#e0f7fa" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCountry">
                <Form.Label>{t("Country")}</Form.Label>
                <Form.Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="bg-lightblue text-dark"
                  style={{ width: "100%", backgroundColor: "#e0f7fa" }}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCourse">
                <Form.Label>{t("Course List")}</Form.Label>
                <Select
                  isMulti
                  options={courses}
                  value={courses.filter((course) =>
                    formData.course.includes(course.value)
                  )}
                  onChange={handleCourseChange}
                  className="text-dark"
                  placeholder= {t("Select courses, You can select multiple courses")}
                  style={{ width: "100%", backgroundColor: "#e0f7fa" }}
                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="additionalcourses">
                <Form.Label>{t("Additional Courses")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="courses you want to learn that are not in the list"
                  name="additionalcourses"
                  value={formData.additionalcourses}
                  onChange={handleChange}
                  
                  className="bg-lightblue text-dark"
                  style={{ width: "100%", backgroundColor: "#e0f7fa" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLearningMode">
                <Form.Label>{t("Learning Mode")}</Form.Label>
                <Select
                  options={learningModes}
                  value={learningModes.find(
                    (option) => option.value === formData.learningMode
                  )}
                  onChange={handleLearningModeChange}
                  className="text-dark"
                  placeholder={t("Select learning mode")}
                  style={{ width: "100%", backgroundColor: "#e0f7fa" }}
                  required
                />
              </Form.Group>

              <Button variant="warning" type="submit" className="w-100 mt-3">
                {t("Register")}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
