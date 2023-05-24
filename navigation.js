import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Login</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
          </LinkContainer>
          {/* Add more navigation links here */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
