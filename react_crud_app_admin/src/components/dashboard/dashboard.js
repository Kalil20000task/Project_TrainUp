import React from 'react';
import './dashboard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../images/logowhite.png';
import logob from '../images/logoblack.png';
import acfn from '../images/acfn.jpeg';
import computerprogramming from '../images/computerprogramming.jpeg';
import nursing from '../images/nursing.jpeg';
import automechanics from '../images/automechanics.jpeg';
import digitalmarketing from '../images/digitalmarketing.jpeg';
import english from '../images/english.jpeg';
import plumbing from '../images/plumbing.jpeg';
import ielts from '../images/ielts.jpeg';
import aklilu from '../images/aklilu.jpg';
import hadsh from '../images/hadsh.jpg';
import brave from '../images/brave.jpg';
import hannah from '../images/hannah.jpeg';

const Dashboard = () => {
  return (
    <Container fluid className="home-page">
      {/* Section 1: Company Introduction */}
      <section className="section-one text-center py-5">
        <img src={logo} alt="Company Logo" className="img-fluid mb-4" style={{ maxWidth: '150px' }} />
        <h1 className="brand-tag">Train Up Institute</h1>
        <p className="company-description mt-3 px-3">
          Train Up Institute is a practice-oriented training center that equips working individuals, business owners, and managers
          with skills and knowledge they need to boost their careers and transform their businesses.
        </p>
        <h3 className="quote-tag mt-3">Never Stop Learning</h3>
      </section>

      {/* Section 2: Courses */}
      <section className="section-two py-5">
        <h2 className="section-title text-center mb-4">We Have More Than 20 Courses</h2>
        <Row className="gy-4">
          {[{ src: acfn, title: 'Accounting' }, { src: digitalmarketing, title: 'Digital Marketing' }, { src: nursing, title: 'Nursing' }, { src: plumbing, title: 'Plumbing' }].map((course, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="course-card h-100">
                <Card.Img variant="top" src={course.src} className="img-fluid" />
                <Card.Body className="text-center">
                  <Card.Title>{course.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="gy-4 mt-3">
          {[{ src: automechanics, title: 'Auto Mechanics' }, { src: english, title: 'English Language' }, { src: computerprogramming, title: 'Computer Programming' }, { src: ielts, title: 'IELTS Preparation' }].map((course, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="course-card h-100">
                <Card.Img variant="top" src={course.src} className="img-fluid" />
                <Card.Body className="text-center">
                  <Card.Title>{course.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h3 className="appendix text-center mt-4">... and many more</h3>
      </section>

      {/* Section 3: Administration */}
      <section className="section-three py-5 bg-light">
        <h2 className="section-title text-center mb-4">Administration</h2>
        <Row className="gy-4">
          {[{ src: aklilu, name: 'Aklilu HabteMichael', role: 'Train Up Institute Director' }, { src: hannah, name: 'Hanna Amanuel', role: 'Administrator' }, { src: hadsh, name: 'Hadish HabteMichael', role: 'Accounting Head' }, { src: brave, name: 'Brave Kibatsi', role: 'Instructor: English' }].map((teacher, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="teacher-card text-center h-100">
                <Card.Img variant="top" src={teacher.src} className="teacher-img img-fluid" />
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>{teacher.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 4: Footer */}
      <footer className="footer-section text-white py-5 bg-dark">
        <Container>
          <Row>
            {/* Logo and Description */}
            <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
              <img src={logob} alt="Company Logo" className="img-fluid mb-3" style={{ maxWidth: '100px' }} />
              <p className="company-description2">
                Train Up Institute is a practice-oriented training center equipping individuals with skills to boost their careers and businesses.
              </p>
            </Col>
            {/* Contact Information */}
            <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
              <h5>Contact Us</h5>
              <p>Location: Kings Tower Building, Nsambya Est. Road</p>
              <p>Email: Info@trainupinstitute.com</p>
              <p>Phone: +2567089511467, +256789617567</p>
            </Col>
            {/* Social Media */}
            <Col xs={12} md={4} className="text-center text-md-end">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <i className="fab fa-instagram"></i>
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
