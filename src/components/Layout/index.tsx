import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, {
  FC,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Helmet } from "react-helmet";
import { breakpoints } from "core/styles";
import Footer from "./footer";
import Header from "./header";
import IconButton from "components/IconButton";
import { linkStyle } from "./header/styles";

interface Props {
  footer?: boolean;
}

const global = css`
  @import url("https://use.typekit.net/kzv6ufw.css");

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: utopia-std, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-areas:
    ". header ."
    ". content ."
    "footer footer footer";
  grid-template-columns: auto 90% auto;
  grid-template-rows: fit-content(10rem) minmax(max-content, auto) fit-content(
      0
    );
  min-height: 100vh;
  position: relative;
  row-gap: 1rem;
  width: 100%;

  @media ${breakpoints.sm} {
    grid-template-columns: auto 36rem auto;
  }

  @media ${breakpoints.md} {
    grid-template-columns: auto 56rem auto;
  }

  @media ${breakpoints.lg} {
    grid-template-columns: auto 76rem auto;
  }

  @media ${breakpoints.xl} {
    grid-template-columns: auto 96rem auto;
  }
`;

const Content = styled.main`
  grid-area: content;
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

const Layout: FC<PropsWithChildren<Props>> = ({ children, footer = true }) => {
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
    <LayoutWrapper>
      <Helmet title="This Christography | Albuquerque Photographer">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/1407f4e18d.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Global styles={global}></Global>
      <Header />
      <Content>{children}</Content>
      {footer && <Footer />}
      {scrolled && (
        <IconButton
          styles={scrollToTopButton}
          icon="fa-solid fa-chevron-up"
          url="#"
          onClick={scrollToTop}
        />
      )}
    </LayoutWrapper>
  );
};

export default Layout;
