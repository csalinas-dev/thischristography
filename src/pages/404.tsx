import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components";

const NotFoundPage = () => (
  <Layout>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      <Link to="/">Go home</Link>.
    </p>
  </Layout>
);

export default NotFoundPage;
