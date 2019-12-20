import Layout from 'components/Layout';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Layout className="not-found">
    <Container as="section">
      <h1>Page Not Found</h1>
      <p>The page you are trying to access does not exist.</p>
      <Link to="/">Back to Home</Link>
    </Container>
  </Layout>
);

export default NotFound;