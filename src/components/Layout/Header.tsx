import Brand from './Brand';
import PageLink from 'components/PageLink';
import React from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import { primaryLinks } from 'components/Routes/links';
import './Header.scss';

const Header = () => (
  <header>
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="mr-auto text-center">
            {map(primaryLinks, PageLink)}
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