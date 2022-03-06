import styled from "@emotion/styled";
import { Layout } from "components";
import { Link } from "gatsby";
import React from "react";

const Wrapper = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => (
  <Wrapper>
    <h1>Page not found</h1>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </Wrapper>
);

export default NotFoundPage;
