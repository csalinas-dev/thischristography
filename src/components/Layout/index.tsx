import Footer from './Footer';
import Header from './Header';
import ImageViewer from 'components/ImageViewer';
import React, { PropsWithChildren } from 'react';
import './index.scss';

export interface LayoutProps {
  className?: string,
};

const Layout: React.FC<LayoutProps> = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <div className="layout">
      <Header />
      <main className={`${props.className}`}>
        {props.children}
      </main>
      <Footer />
      <ImageViewer />
    </div>
  );
};

export default Layout;