import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import * as breakpoints from "core/styles/breakpoints";
import React, { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

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
  grid-template-rows: fit-content(10rem) minmax(max-content, auto) fit-content(0);
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

const Layout: FC<PropsWithChildren<Props>> = ({ children, footer = true }) => (
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
  </LayoutWrapper>
);

export default Layout;
