import React, { FC, PropsWithChildren } from "react";
import { Footer, Header } from "components";

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
