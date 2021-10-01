import React from "react";
//importing the Navbar from react-bootstrap
import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brock Atwood</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
