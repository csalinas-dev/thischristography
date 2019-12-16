import Footer from './Footer';
import Header from './Header';
import React, { PropsWithChildren } from 'react';

export interface LayoutProps {
  className?: string,
};

const Layout: React.FC<LayoutProps> = (props: PropsWithChildren<LayoutProps>) => (
  <div className="layout">
    <Header />
    <main className={`${props.className}`}>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;