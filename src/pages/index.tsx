import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { GlobalWrapper } from "components";

const IndexWrapper = styled.div`
  display: grid;
  grid-template-areas:
    ". header ."
    "content content content";
  grid-template-columns: auto 80% auto;
  grid-template-rows: 128px auto;
  height: 100vh;
  position: relative;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  column-gap: 1rem;
  display: grid;
  font-family: montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  grid-area: header;
  grid-template-areas: "links brand socials";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 100%;
  z-index: 1;
`;

const Links = styled.div`
  grid-area: links;
`;

const Brand = styled.div`
  grid-area: brand;
`;

const Socials = styled.div`
  display: flex;
  grid-area: socials;
  justify-content: end;
`;

const linkStyle = css`
  color: inherit;
  opacity: 0.54;
  text-decoration: none;
  transition: opacity ease-in-out 225ms;

  &:hover {
    opacity: 1;
  }
`;

const background = css`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const IndexPage = () => (
  <GlobalWrapper>
    <IndexWrapper>
      <Header>
        <Links>
          <Link
            css={linkStyle}
            rel="noopener noreferrer"
            target="_blank"
            to="https://clients.thischristography.com/"
          >
            Clients
          </Link>
        </Links>
        <Brand>
          <Link to="/" css={linkStyle}>
            <StaticImage
              alt="This Christography Logo"
              height={36}
              layout="constrained"
              src="../assets/images/logos/thischristography-logo.png"
              quality={100}
            />
          </Link>
        </Brand>
        <Socials>Socials</Socials>
      </Header>
      <StaticImage
        alt="White Sands National Park by This Christography"
        css={background}
        objectFit="cover"
        placeholder="blurred"
        src="../assets/images/ThisChristography-20201010.jpg"
      />
    </IndexWrapper>
  </GlobalWrapper>
);

export default IndexPage;
