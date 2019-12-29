import React from 'react';
import Layout from 'components/Layout';
import { Container } from 'react-bootstrap';
import './index.scss';

const About = () => (
  <Layout className="about" dark>
    <Container as="section">
      <h1>About</h1>
    </Container>
  </Layout>
);

export default About;