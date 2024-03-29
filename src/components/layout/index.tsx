import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { breakpoints } from "core/styles";
import Footer from "./footer";
import Header from "./header";
import { ScrollToTop } from "components/ScrollToTop";

interface Props {
  home?: boolean;
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

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  home = false,
  footer = true,
}) => (
  <LayoutWrapper>
    <Helmet title="This Christography | Albuquerque Photographer">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png?v=U8Opo8"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png?v=U8Opo8"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png?v=U8Opo8"
      />
      <link rel="manifest" href="/icons/site.webmanifest?v=U8Opo8" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg?v=U8Opo8"
        color="#2d89f0"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico?v=U8Opo8" />
      <meta name="msapplication-TileColor" content="#2d89f0" />
      <meta
        name="msapplication-config"
        content="/icons/browserconfig.xml?v=U8Opo8"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="Photographer in Albuquerque, NM specializing in portraits, senior portraits, automotive, engagement, weddings, and landscapes."
      />
      <meta
        name="keywords"
        content="photographers near me, photographer, albuquerque, portraits, landscape, senior pictures, car photography, engagement photos, wedding photography, this christography, this chris, christopher salinas"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        src="https://kit.fontawesome.com/1407f4e18d.js"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Global styles={global}></Global>
    <Header home={home} />
    <Content>{children}</Content>
    {footer && <Footer />}
    <ScrollToTop />
  </LayoutWrapper>
);

export default Layout;
