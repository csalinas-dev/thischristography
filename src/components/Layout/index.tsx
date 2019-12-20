import Footer from './Footer';
import Header from './Header';
import ImageViewer from 'components/ImageViewer';
import React, { PropsWithChildren, useContext } from 'react';
import './index.scss';
import { ImageViewerContext } from 'containers/ImageViewer/context';

export interface LayoutProps {
  className?: string,
};

const Layout: React.FC<LayoutProps> = (props: PropsWithChildren<LayoutProps>) => {
  const { state: { selected } } = useContext(ImageViewerContext);

  return (
    <div className="layout">
      <Header />
      <main className={`${props.className}`}>
        {props.children}
      </main>
      <Footer />
      {selected && <ImageViewer />}
    </div>
  );
};

export default Layout;