import styled from "@emotion/styled";
import { Layout } from "components";
import { breakpoints, PageTitle } from "core/styles";
import React, { FC } from "react";
import CategoryPlate from "./CategoryPlate";

const Categories = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;

  @media ${breakpoints.sm} {
    justify-content: space-between;
  }
  
  @media ${breakpoints.md} {
    gap: 3rem;
  }
  
  @media ${breakpoints.xl} {
    gap: 5rem;
  }
`;

const Photography: FC = () => (
  <Layout>
    <PageTitle>Photography</PageTitle>
    <Categories>
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
      <CategoryPlate />
    </Categories>
  </Layout>
);

export default Photography;
