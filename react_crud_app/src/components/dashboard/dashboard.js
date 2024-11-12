import React from 'react';
import './dashboard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../images/logowhite.png'; // Adjust path to your logo
import logob from '../images/logoblack.png';
import acfn from '../images/acfn.jpeg';
import it from '../images/it.jpeg';
// import acfn from '../images/acfn.jpg';
import nusrsing from '../images/nursing.jpeg';
import automechanics from '../images/automechanics.jpeg';
import digitalmarketing from '../images/digitalmarketing.jpeg';
import english from '../images/english.jpeg';


// Adjust paths to your course images
import aklilu from '../images/aklilu.jpg'; // Adjust paths to your teacher images
import hadsh from '../images/hadsh.jpg';
import brave from '../images/brave.jpg';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM3bx4ST/6omIO2V7p/7j3/H/7Hh9PZ28J4F9EJ"
  crossorigin="anonymous"
/>


const Dashboard = () => {
  return (
    <Container fluid className="home-page">

      {/* Section 1: Company Introduction */}
      <section className="section-one text-center py-5">
        <img src={logo} alt="Company Logo" className="big-logo mb-4" />
        <h1 className="brand-tag">Train Up Institute</h1>
        <p className="company-description mt-3">
        Train Up Institute is a practice-oriented training centre
         which equips working individuals, business owners and managers 
         with skills and knowledge they need to boost their 
         careers and transform their businesses.
        </p><br></br>
        <h3 className="quote-tag">Never Stop Learning</h3>
      </section>

      {/* Section 2: Courses */}
      <section className="section-two py-5">
        <h2 className="section-title text-center mb-4">We Have More Than 20 Courses</h2>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src={acfn} />
              <Card.Body className="text-center">
                <Card.Title>Accounting</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat for each course (example shown for 3 out of 10 courses) */}
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src={digitalmarketing} />
              <Card.Body className="text-center">
                <Card.Title>Digital Marketing</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src={nusrsing} />
              <Card.Body className="text-center">
                <Card.Title>Nursing</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src={automechanics} />
              <Card.Body className="text-center">
                <Card.Title>Auto Mechanics</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat for each course (example shown for 3 out of 10 courses) */}
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src={english} />
              <Card.Body className="text-center">
                <Card.Title>English Language</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src={it} />
              <Card.Body className="text-center">
                <Card.Title>Information Technology(IT)</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Section 3: Teachers */}
      <section id="section-three"  className="section-three py-5 bg-light">
  <h2 className="section-title text-center mb-4">Featured Teachers</h2>
  <Row className="gy-4">
    <Col md={3}>
      <Card className="teacher-card text-center">
        <Card.Img variant="top" src={aklilu} className="teacher-img" />
        <Card.Body>
          <Card.Title>Aklilu HabteMichael</Card.Title>
          <Card.Text>Train Up Institute Director</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card className="teacher-card text-center">
        <Card.Img variant="top" src={aklilu} className="teacher-img" />
        <Card.Body>
          <Card.Title>Teacher Name 2</Card.Title>
          <Card.Text>Language Specialist</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card className="teacher-card text-center">
        <Card.Img variant="top" src={hadsh} className="teacher-img" />
        <Card.Body>
          <Card.Title>Hadish HabteMichael</Card.Title>
          <Card.Text>Accounting Head</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card className="teacher-card text-center">
        <Card.Img variant="top" src={brave} className="teacher-img" />
        <Card.Body>
          <Card.Title>Brave Kibatsi</Card.Title>
          <Card.Text>Instructor: English</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</section>


      {/* Section 4: Footer */}
      <footer className="footer-section text-white py-5 bg-dark">
  <Container>
    <Row className="text-center text-md-start">
      {/* Left Column: Logo and Description */}
      <Col md={4}>
        <img src={logob} alt="Company Logo" className="footer-logo mb-3" />
        <p className="company-description">
        Train Up Institute is a practice-oriented training centre
         which equips working individuals, business owners and managers 
         with skills and knowledge they need to boost their 
         careers and transform their businesses.
        </p>
      </Col>
   

      {/* Center Column: Contact Information */}
      <Col md={4} className="d-flex flex-column align-items-center">
        <p className="mb-1">Contact Us</p>
        <p className="mb-1">Location: Kings Tower Building, Nsambya Est. Road</p>
        < p className="mb-1">Email: Info@trainupinstitute.com</p>
        <p>Phone: +2567089511467</p>
        <p>Phone: +256789617567</p>
      </Col>

      {/* Right Column: Social Media Links */}
      <Col md={4} className="d-flex flex-column align-items-md-end align-items-center">
        <p className="mb-1">Follow Us</p>
        <div className="social-icons d-flex justify-content-center justify-content-md-end">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

    </Container>
  );
};

export default Dashboard;
