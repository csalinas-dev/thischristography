import styled from "@emotion/styled";
import { Layout } from "components";
import { breakpoints, PageTitle } from "core/styles";
import React, { FC } from "react";
import { CategoryPlate } from "../../components/pages/photography";

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
      Categories
      {/* <CategoryPlate alt="White Sands" href="/photography/white-sands" src="../../assets/images/ThisChristography-20201010.jpg" title="White Sands" />
      <CategoryPlate alt="Thunderbirds" href="/photography/thunderbirds" src="../../assets/images/ThisChristography-20190518.jpg" title="Thunderbirds" />
      <CategoryPlate alt="Balloon Fiesta" href="/photography/balloon-fiesta" src="../../assets/images/ThisChristography-20211002-4.jpg" title="Balloon Fiesta" />
      <CategoryPlate alt="White Sands" href="/photography/white-sands" src="../../assets/images/ThisChristography-20201010.jpg" title="White Sands" />
      <CategoryPlate alt="Thunderbirds" href="/photography/thunderbirds" src="../../assets/images/ThisChristography-20190518.jpg" title="Thunderbirds" />
      <CategoryPlate alt="Balloon Fiesta" href="/photography/balloon-fiesta" src="../../assets/images/ThisChristography-20211002-4.jpg" title="Balloon Fiesta" />
      <CategoryPlate alt="White Sands" href="/photography/white-sands" src="../../assets/images/ThisChristography-20201010.jpg" title="White Sands" />
      <CategoryPlate alt="Thunderbirds" href="/photography/thunderbirds" src="../../assets/images/ThisChristography-20190518.jpg" title="Thunderbirds" />
      <CategoryPlate alt="Balloon Fiesta" href="/photography/balloon-fiesta" src="../../assets/images/ThisChristography-20211002-4.jpg" title="Balloon Fiesta" />
      <CategoryPlate alt="White Sands" href="/photography/white-sands" src="../../assets/images/ThisChristography-20201010.jpg" title="White Sands" />
      <CategoryPlate alt="Thunderbirds" href="/photography/thunderbirds" src="../../assets/images/ThisChristography-20190518.jpg" title="Thunderbirds" />
      <CategoryPlate alt="Balloon Fiesta" href="/photography/balloon-fiesta" src="../../assets/images/ThisChristography-20211002-4.jpg" title="Balloon Fiesta" />
      <CategoryPlate alt="White Sands" href="/photography/white-sands" src="../../assets/images/ThisChristography-20201010.jpg" title="White Sands" />
      <CategoryPlate alt="Thunderbirds" href="/photography/thunderbirds" src="../../assets/images/ThisChristography-20190518.jpg" title="Thunderbirds" />
      <CategoryPlate alt="Balloon Fiesta" href="/photography/balloon-fiesta" src="../../assets/images/ThisChristography-20211002-4.jpg" title="Balloon Fiesta" /> */}
    </Categories>
  </Layout>
);

export default Photography;
