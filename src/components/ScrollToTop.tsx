import React, { SyntheticEvent, useEffect, useState } from "react";
import { IconButton } from "components";
import { css } from "@emotion/react";
import { breakpoints } from "core/styles";

const linkStyle = css`
    color: #000 !important;
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
      color: #000 !important;
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

const scrollToTopButton = css`
  ${linkStyle}
  bottom: 3rem;
  font-size: 3rem;
  height: 4rem;
  width: 4rem;
  position: fixed;
  right: 3rem;
  z-index: 9999;
`;

export const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const scrollToTop = (e: SyntheticEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    setScrolled(window.scrollY !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {scrolled && (
        <IconButton
          styles={scrollToTopButton}
          icon="fa-solid fa-chevron-up"
          url="#"
          onClick={scrollToTop}
        />
      )}
    </>
  );
};
