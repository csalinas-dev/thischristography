import { IconButton } from "components";
import { Link } from "gatsby";
import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Header,
  Links,
  linkStyle,
  Brand,
  Socials,
  scrollToTop,
} from "./styles";

import logo from "assets/images/logos/thischristography-logo.png";

const HeaderWrapper: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const onScroll = () => {
    setScrolled(window.scrollY !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header>
      <Links>
        <Link to="/gallery" css={linkStyle}>
          Gallery
        </Link>
        <Link to="/about" css={linkStyle}>
          About
        </Link>
        <Link to="/contact" css={linkStyle}>
          Contact
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
          href="https://clients.thischristography.com/shop"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shop
        </a>
      </Links>
      <Brand>
        <Link to="/" css={linkStyle}>
          <img
            alt="This Christography Logo"
            height={36}
            src={logo}
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
        <IconButton
          styles={scrollToTop}
          icon="fa-solid fa-chevron-up"
          url="#"
        />
      )}
    </Header>
  );
};

export default HeaderWrapper;
