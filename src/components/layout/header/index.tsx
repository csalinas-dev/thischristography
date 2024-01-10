import { IconButton } from "components";
import { Link } from "gatsby";
import React, { FC } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "core/styles";

import logoBlack from "assets/images/logos/thischristography-logo.png";
import logoWhite from "assets/images/logos/thischristography-logo-white.png";

const Header = styled.header`
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

const Links = styled.div`
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

const Brand = styled.div`
  display: flex;
  grid-area: brand;
  justify-content: center;
`;

const Socials = styled.div`
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

type Props = {
  home: boolean;
};

const HeaderWrapper: FC<Props> = ({ home }) => {
  const textColor = home ? "#fff" : "#000";
  const linkStyle = css`
    color: ${textColor} !important;
    margin: 0.5rem;
    opacity: 0.54;
    text-decoration: none !important;
    text-transform: uppercase;
    transition: opacity ease-in-out 225ms;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:active,
    &:visited {
      color: ${textColor} !important;
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

  return (
    <Header>
      <Links>
        <Link to="/photography" css={linkStyle}>
          Photography
        </Link>
        <Link to="/about" css={linkStyle}>
          About
        </Link>
        <a
          css={linkStyle}
          href="https://clients.thischristography.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Clients
        </a>
        <a
          css={linkStyle}
          href="https://clients.thischristography.com/prints"
          rel="noopener noreferrer"
          target="_blank"
        >
          Prints
        </a>
      </Links>
      <Brand>
        <Link to="/" css={linkStyle}>
          <img
            alt="This Christography Logo"
            height={36}
            src={home ? logoWhite : logoBlack}
          />
        </Link>
      </Brand>
      <Socials>
        <IconButton
          styles={linkStyle}
          icon="fa-solid fa-phone"
          url="tel:+15057204759"
        />
        <IconButton
          styles={linkStyle}
          icon="fa-solid fa-envelope"
          url="mailto:chris@thischristography.com"
        />
        <IconButton
          styles={linkStyle}
          icon="fa-brands fa-instagram"
          url="https://instagram.com/thischristography"
        />
        <IconButton
          styles={linkStyle}
          icon="fa-brands fa-tiktok"
          url="https://www.tiktok.com/@thischristography"
        />
        <IconButton
          styles={linkStyle}
          icon="fa-brands fa-youtube"
          url="https://www.youtube.com/channel/UCmTKhtqtJ_WFyb85W77XEeQ/"
        />
        <IconButton
          styles={linkStyle}
          icon="fa-brands fa-facebook-f"
          url="https://www.facebook.com/ThisChristography"
        />
        <IconButton
          styles={linkStyle}
          icon="fa-brands fa-twitter"
          url="https://twitter.com/TChristography"
        />
      </Socials>
    </Header>
  );
};

export default HeaderWrapper;
