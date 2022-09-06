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