import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        
        <Navbar.Brand href="#home">
        <img src="https://lh3.googleusercontent.com/p/AF1QipOifyZpiIGrSjfTBKOpqfC-qLDEw7J4NTgsTMlu=s680-w680-h510" width="30" height="30" class="rounded-circle"  alt="logo"/>
         OCPL-TECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact-us">Contact-Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;