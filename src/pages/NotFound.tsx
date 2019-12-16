import Layout from 'components/Layout';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <Layout className="not-found">
    <section className="container">
      <h1>Page Not Found</h1>
      <p>The page you are trying to access does not exist.</p>
      <Link to="/">Back to Home</Link>
    </section>
  </Layout>
);

export default NotFound;