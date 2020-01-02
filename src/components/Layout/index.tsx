import Footer from './Footer';
import Header from './Header';
import ImageViewer from 'components/ImageViewer';
import React, { PropsWithChildren, useContext } from 'react';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import './index.scss';

export interface LayoutProps {
  dark?: boolean,
  className?: string,
};

const Layout: React.FC<LayoutProps> = (props: PropsWithChildren<LayoutProps>) => {
  const { state: { selected } } = useContext(ImageViewerContext);

  return (
    <div className={`layout ${props.dark ? 'dark' : ''}`}>
      <Header dark={props.dark ?? false}/>
      <main className={`${props.className}`}>
        {props.children}
      </main>
      <Footer />
      {selected && <ImageViewer />}
    </div>
  );
};

export default Layout;