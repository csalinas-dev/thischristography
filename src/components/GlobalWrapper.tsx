import { css, Global } from "@emotion/react";
import React, { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

interface Props {}

const global = css`
  @import url("https://use.typekit.net/kzv6ufw.css");

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;

const GlobalWrapper: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>
    <Helmet>
      <script
        src="https://kit.fontawesome.com/1407f4e18d.js"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Global styles={global}></Global>
    {children}
  </>
);

export default GlobalWrapper;
