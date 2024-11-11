

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import './header.css';

const Header=() =>{
 return(
   <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
   <Container>
     <Navbar.Brand className="nav-brand"  as={Link} to="/">Train Up Institute</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ml-auto">
         <Nav.Link as={Link} className='nav-link' to="/" >Home</Nav.Link>
         {/* <Nav.Link as={Link} className='nav-link' to="/login">Login</Nav.Link> */}
         <Nav.Link as={Link} className='nav-link' to="/about_us">About Us</Nav.Link>
         <Nav.Link as={Link} className='nav-link' to="/register_user">Register Students</Nav.Link>
         <Nav.Link as={Link} className='nav-link' to="/table">Table</Nav.Link>
         <Nav.Link as={Link} className='nav-link' to="/signup">Sign Staffs</Nav.Link>
         <Nav.Link as={Link} className='nav_link' to="/login">Login</Nav.Link>
         
         {/* <Nav.Link as={Link} className='nav_link' to="/register_user">Register</Nav.Link>
         <Nav.Link as={Link} className='nav_link' to="/table">Table</Nav.Link> */}
         
         
        
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 );
};
export default Header;