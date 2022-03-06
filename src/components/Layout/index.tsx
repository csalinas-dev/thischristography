import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
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
  grid-template-columns: auto 80% auto;
  grid-template-rows: 10rem minmax(max-content, auto) fit-content(0);
  min-height: 100vh;
  position: relative;
  row-gap: 1rem;
  width: 100%;
`;

const Content = styled.main`
  grid-area: content;
`;

const Layout: FC<PropsWithChildren<Props>> = ({ children, footer = true }) => (
  <LayoutWrapper>
    <Helmet>
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
