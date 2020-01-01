import Brand from './Brand';
import dateformat from 'dateformat';
import PageLink from 'components/PageLink';
import React, { FC, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import { secondaryLinks } from 'components/Routes/links';
import './Footer.scss';

const Footer: FC = () => {
  const [modified, setModified] = useState<Date | null>(null);

  useEffect(() => {
    const get = async () => {
      const response = await fetch("https://api.github.com/repos/casjr13/thischristography/branches/master");
      const data = await response.json();

      const date = data?.commit?.commit?.author?.date;
      if (date) {
        setModified(new Date(date));
      }
    };

    get();
  }, [])


  const begin = 2019;
  const end = new Date().getFullYear();
  return (
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
        {modified && <small>Last Modified: {dateformat(modified, "mmmm dS, yyyy")}</small>}
        <small className="mt-4">
          <i className="far fa-copyright mr-1 d-inline-block" />
          {end > begin ? `${begin} - ${end}` : begin} This Christography. All Rights Reserved.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
