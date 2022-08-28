import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FC } from "react";
import { breakpoints, whiteframes } from "core/styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  alt: string;
  href: string;
  image?: IGatsbyImageData;
  title: string;
}

const PlateWrapper = styled(Link)`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  width: 20rem;

  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  @media ${breakpoints.sm} {
    width: 15rem;
  }

  @media ${breakpoints.lg} {
    width: 18rem;
  }

  &:hover [data-main-image] {
    transform: scale(1.1);
  }
`;

const imageStyles = css`
  border-radius: 1rem;
  box-shadow: ${whiteframes.shadows[12]};
  overflow: hidden;

  [data-main-image] {
    transform: scale(1);
    transition: all ease-in-out 250ms;
  }
`;

const CategoryPlate: FC<Props> = ({ alt, href, title, image }) => (
  <PlateWrapper to={href}>
    {!!image ? (
      <GatsbyImage alt={alt} css={imageStyles} image={image} />
    ) : (
      <span>Missing Image</span>
    )}
    <h2>{title}</h2>
  </PlateWrapper>
);

export default CategoryPlate;
