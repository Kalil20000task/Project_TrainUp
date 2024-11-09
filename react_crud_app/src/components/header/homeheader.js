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
         <Nav.Link as={Link} className='nav-link' to="/about_us">About Us</Nav.Link>
         <Nav.Link as={Link} className='nav-link' to="/register_user">Register</Nav.Link>
         <Nav.Link as={Link} className='nav-link' to="/table">Table</Nav.Link>
         
         {/* <Nav.Link href="#link">Link</Nav.Link> */}
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown>
        
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 );
};
export default Header;
