import CoverImage from './CoverImage';
import Layout from 'components/Layout';
import React, { useContext, useEffect } from 'react';
import { GalleryCovers } from './Covers';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const Landscapes = () => {
  const { dispatch } = useContext(ImageViewerContext);

  useEffect(() => {
    // Reset images in image viewer on unmount
    return () => {
      const action = resetImageViewer();
      dispatch(action);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="landscapes">
      {GalleryCovers.map(CoverImage)}
    </Layout>
  );
};

export default Landscapes;