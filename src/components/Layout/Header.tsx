import Brand from './Brand';
import React, { PropsWithChildren } from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = (props: PropsWithChildren<any>) => (
  <header>
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="mr-auto">
            <Nav.Link as={Link} className="text-center" to="/portraits">Portraits</Nav.Link>
            <Nav.Link as={Link} className="text-center" to="/landscapes">Landscapes</Nav.Link>
            <Nav.Link as={Link} className="text-center" to="/weddings">Weddings</Nav.Link>
            <Nav.Link as={Link} className="text-center" to="/automotive">Automotive</Nav.Link>
          </Nav>
          <div className="socials d-flex align-items-center justify-content-center">
            {socials.map(SocialLink)}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

export default Header;