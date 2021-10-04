import React from "react";
//importing the Navbar from react-bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">Brock Atwood</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
            <Nav.Link href="#Work">Portfolio</Nav.Link>
            <Nav.Link href="#ContactMe">Contact</Nav.Link>
            <Nav.Link href="#FunFacts">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
