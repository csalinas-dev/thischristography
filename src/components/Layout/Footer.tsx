import Brand from './Brand';
import PageLink from 'components/PageLink';
import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import { secondaryLinks } from 'components/Routes/links';
import './Footer.scss';

const Footer: FC = () => (
  <footer>
    <Container className="d-flex flex-column align-items-center">
      <Navbar variant="dark">
        <Navbar.Brand as={Link} to="/">
          <Brand />
        </Navbar.Brand>
        <Nav>
          {map(secondaryLinks, PageLink)}
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
