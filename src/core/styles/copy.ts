import styled from "@emotion/styled";
import { breakpoints } from ".";

export const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
  
  @media ${breakpoints.md} {
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  line-height: 1.25em;
`;