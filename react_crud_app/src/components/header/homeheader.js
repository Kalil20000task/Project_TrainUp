import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';
import i18n from '../../i18n';
import logo from '../images/logowhite.png'; // Adjust the path to your logo image
import { HashLink } from 'react-router-hash-link';
import {jwtDecode} from 'jwt-decode';
import { Button } from 'react-bootstrap';


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp > currentTime) {
          setIsLoggedIn(true);
          setUserRole(decoded.role);
        } else {
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/login');
  };
   const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // This will trigger the language change
  };


  // Check if the current route is "/adminaccess"
  const isAdminAccess = location.pathname === '/adminaccess';

  return (
    <Navbar expand="lg" bg="white" className="bg-white shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand className="nav-brand d-flex align-items-center" as={Link} to="/" style={{ color: 'orange' }}>
          <img
            src={logo}
            alt="Company Logo"
            className="logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          Train Up Institute
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Public Links */}
            <Nav.Link as={Link} className="nav-link" to="/" style={{ color: 'orange' }}>
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} className="nav-link" to="/#section-three" style={{ color: 'orange' }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/register_user" style={{ color: 'orange' }}>
              Register
            </Nav.Link>

            {/* Show Login Tab only on /adminaccess */}
            {isAdminAccess && !isLoggedIn && (
              <Nav.Link as={Link} className="nav-link" to="/login" style={{ color: 'orange' }}>
                Login
              </Nav.Link>
            )}

            {isLoggedIn && (
              <>
                {/* Common Links for Logged-In Users */}
                <Nav.Link as={Link} className="nav-link" to="/table" style={{ color: 'orange' }}>
                  Table
                </Nav.Link>

                {/* Role-Specific Links */}
                {userRole === 'editor' && (
                  <Nav.Link as={Link} className="nav-link" to="/signup" style={{ color: 'orange' }}>
                    Sign Staffs
                  </Nav.Link>
                )}

                <Nav.Link className="nav-link" onClick={handleLogout} style={{ color: 'orange', cursor: 'pointer' }}>
                  Logout
                </Nav.Link>
              </>
            )}
               {/* Language Selection */}
              <div className="language-buttons">
              <Button
                onClick={() => handleLanguageChange('en')}
                style={{
                  color: 'white',
                  backgroundColor: 'orange',
                  border: 'none',
                  marginRight: '10px',
                  padding: '5px 15px',
                  fontSize: '14px',
                }}
              >
                English
              </Button>
              <Button
                onClick={() => handleLanguageChange('tgr')}
                style={{
                  color: 'white',
                  backgroundColor: 'orange',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: '14px',
                }}
              >
                ትግርኛ
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
