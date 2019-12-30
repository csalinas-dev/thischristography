import ContactItem from './ContactItem';
import Layout from 'components/Layout';
import links from 'shared/data/socials.json';
import React from 'react';
import { Container } from 'react-bootstrap';
import { map } from 'lodash';

const Contact = () => {
  return (
    <Layout className="contact">
      <Container as="section">
        <h1>Contact</h1>
        <ul className="fa-ul">
          {map(links, ContactItem)}
        </ul>
      </Container>
    </Layout>
  );
}

export default Contact;