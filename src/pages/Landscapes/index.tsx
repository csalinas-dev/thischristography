import abqImages from 'shared/data/images/landscapes/albuquerque.json';
import Image from 'components/Image';
import Layout from 'components/Layout';
import React, { useContext, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import { find } from 'lodash';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer, selectImage, updateImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const albuquerque = find(abqImages, ['id', 'TUPMPRfm628t']);

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
      {albuquerque &&
        <Container as="section" onClick={handleAlbuquerque} className="landscape-image">
          <Image
            alt={albuquerque.name}
            height={albuquerque.height}
            id={albuquerque.id}
            src={albuquerque.url}
            width={albuquerque.width}
          />
          <ScrollAnimation animateIn="fadeInRight" className="landscape-content">
            <h1>Albuquerque</h1>
            <label>Click to view gallery</label>
          </ScrollAnimation>
        </Container>
      }
    </Layout>
  );

  function handleAlbuquerque() {
    if (albuquerque) {
      const albuquerqueAction = updateImageViewer(abqImages);
      dispatch(albuquerqueAction);
      const selectAction = selectImage(albuquerque);
      dispatch(selectAction);
    }
  }
};

export default Landscapes;