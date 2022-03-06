import GlobalWrapper from "components/GlobalWrapper";
import React, { FC, PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => (
  <GlobalWrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </GlobalWrapper>
);

export default Layout;
