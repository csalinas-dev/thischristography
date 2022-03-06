import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconButton } from "components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";

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
  margin: 0 0.5rem;
  opacity: 0.54;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: opacity ease-in-out 225ms;

  &:active,
  &:visited {
    color: inherit !important;
  }

  &:hover {
    opacity: 1;
  }
`;

const scrollToTop = css`
  ${linkStyle}
  bottom: 3rem;
  font-size: 3rem;
  height: 4rem;
  width: 4rem;
  position: fixed;
  right: 3rem;
  z-index: 9999;
`;

const HeaderWrapper: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const onScroll = () => {
    setScrolled(window.scrollY !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Header = styled.header`
    align-items: center;
    column-gap: 1rem;
    display: grid;
    font-family: montserrat, sans-serif;
    font-style: normal;
    font-weight: 400;
    grid-area: header;
    grid-template-areas: "links brand socials";
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 100%;
    margin-top: 2rem;
    padding: 1rem;
    z-index: 1;
  `;

  return (
    <Header>
      <Links>
        <a
          css={linkStyle}
          href="https://clients.thischristography.com/shop"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shop
        </a>
        <Link to="/gallery" css={linkStyle}>
          Gallery
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
        <Link to="/contact" css={linkStyle}>
          Contact
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
      {scrolled && (
        <IconButton styles={scrollToTop} icon="fa-solid fa-chevron-up" url="#" />
      )}
    </Header>
  );
};

export default HeaderWrapper;
