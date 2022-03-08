import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, whiteframes } from 'core/styles';
import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';

const PlateWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  width: 20rem;

  @media ${breakpoints.sm} {
    width: 15rem;
  }

  @media ${breakpoints.lg} {
    width: 18rem;
  }
`;

const imageStyles = css`
  border-radius: 1rem;
  box-shadow: ${whiteframes.shadows[8]}
`;

const CategoryPlate: FC = () => (
  <PlateWrapper>
    <StaticImage
      alt="White Sands National Park"
      aspectRatio={2/3}
      css={imageStyles}
      layout='constrained'
      placeholder="blurred"
      src="../../assets/images/ThisChristography-20201010.jpg"
      transformOptions={{
        cropFocus: "center"
      }}
    />
    <h2>White Sands</h2>
  </PlateWrapper>
);

export default CategoryPlate;