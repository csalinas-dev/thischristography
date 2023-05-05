import React, { SyntheticEvent, useEffect, useState } from "react";
import { IconButton } from "components";
import { css } from "@emotion/react";
import { linkStyle } from "./layout/header/styles";

const scrollToTopButton = css`
  ${linkStyle}
  bottom: 3rem;
  font-size: 3rem;
  height: 5rem !important;
  width: 5rem !important;
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
