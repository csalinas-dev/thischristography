import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FC } from "react";
import { breakpoints, whiteframes } from "core/styles";

interface Props {
  alt: string;
  href: string;
  thumbnail: string;
  title: string;
}

const PlateWrapper = styled(Link)`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div`
  border-radius: 1rem;
  box-shadow: ${whiteframes.shadows[12]};
  height: 30rem;
  overflow: hidden;
  width: 20rem;

  @media ${breakpoints.sm} {
    height: 22.5rem;
    width: 15rem;
  }

  @media ${breakpoints.lg} {
    height: 27rem;
    width: 18rem;
  }
`;

const imageStyles = css`
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: all ease-in-out 250ms;
  width: 100%;
`;

const CategoryPlate: FC<Props> = ({ alt, href, title, thumbnail }) => (
  <PlateWrapper to={href}>
    <ImageWrapper>
      <img alt={alt} css={imageStyles} src={thumbnail} />
    </ImageWrapper>
    <h2>{title}</h2>
  </PlateWrapper>
);

export default CategoryPlate;
