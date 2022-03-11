import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "core/styles";

export const Header = styled.header`
  align-items: center;
  column-gap: 1rem;
  display: grid;
  font-family: montserrat, sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  grid-area: header;
  grid-template-areas:
    "brand"
    "links"
    "socials";
  grid-template-columns: 100%;
  grid-template-rows: fit-content(0) fit-content(0) fit-content(0);
  margin-top: 2rem;
  padding: 1rem 0;
  z-index: 1;

  @media ${breakpoints.sm} {
    font-size: 1rem;
  }

  @media ${breakpoints.md} {
    font-size: 0.75rem;
    grid-template-areas: "links brand socials";
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 100%;
  }

  @media ${breakpoints.lg} {
    font-size: 1rem;
  }
`;

export const Links = styled.div`
  display: flex;
  grid-area: links;
  justify-content: center;
  flex-wrap: wrap;

  @media ${breakpoints.md} {
    justify-content: space-around;
  }

  @media ${breakpoints.xl} {
    justify-content: start;
  }
`;

export const Brand = styled.div`
  display: flex;
  grid-area: brand;
  justify-content: center;
`;

export const Socials = styled.div`
  display: flex;
  grid-area: socials;
  justify-content: center;

  @media ${breakpoints.md} {
    justify-content: space-around;
  }

  @media ${breakpoints.xl} {
    justify-content: end;
  }
`;

export const linkStyle = css`
  color: inherit;
  margin: 0.5rem;
  opacity: 0.54;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: opacity ease-in-out 225ms;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:active,
  &:visited {
    color: inherit !important;
  }

  &:hover {
    opacity: 1;
  }

  @media ${breakpoints.md} {
    margin: 0.2rem;
  }

  @media ${breakpoints.lg} {
    margin: 0.5rem;
  }
`;
