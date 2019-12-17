import Brand from './Brand';
import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: FC = () => (
  <footer className="py-5">
    <Container className="d-flex flex-column align-items-center">
      <Navbar>
        <Navbar.Brand as={Link} to="/">
          <Brand />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/rates">Rates</Nav.Link>
          <Nav.Link as={Link} to="/delivery-options">Delivery</Nav.Link>
        </Nav>
      </Navbar>
        <small>
          <i className="far fa-copyright mr-1 d-inline-block" />
          {new Date().getFullYear()} This Christography. All Rights Reserved.
        </small>
    </Container>
  </footer>
);

export default Footer;
