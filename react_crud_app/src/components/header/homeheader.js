import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../images/logowhite.png'; // Adjust the path to your logo image
import { HashLink } from 'react-router-hash-link';
import { jwtDecode} from 'jwt-decode';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode the token to verify it's valid and extract the role
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp > currentTime) {
          setIsLoggedIn(true);
          setUserRole(decoded.role); // Set the user's role
        } else {
          // Token expired, clear it
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear the token and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserRole(null);
  };

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
            <Nav.Link as={Link} className="nav-link" to="/" style={{ color: 'orange' }}>Home</Nav.Link>
            <Nav.Link as={HashLink} className="nav-link" to="/#section-three" style={{ color: 'orange' }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/register_user" style={{ color: 'orange' }}>Register</Nav.Link>

            {isLoggedIn ? (
              <>
                {/* Common Links for All Logged-In Users */}
                <Nav.Link as={Link} className="nav-link" to="/table" style={{ color: 'orange' }}>Table</Nav.Link>
                
                {/* Role-Specific Links */}
                {userRole === 'editor' && (
                  <Nav.Link as={Link} className="nav-link" to="/signup" style={{ color: 'orange' }}>Sign Staffs</Nav.Link>
                )}

                <Nav.Link className="nav-link" onClick={handleLogout} style={{ color: 'orange', cursor: 'pointer' }}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} className="nav-link" to="/login" style={{ color: 'orange' }}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
