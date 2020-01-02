import images from 'shared/data/images/automotive.json';
import Layout from 'components/Layout';
import PhotoGallery from 'react-photo-gallery';
import React, { SyntheticEvent, useContext, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import { find, map, shuffle } from 'lodash';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer, selectImage, updateImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const cover = find(images, ['id', 'DtpkxQW57BxR']);
const photos = map(shuffle(images), (i) => ({
  ...i,
  key: i.id,
  src: i.url,
  alt: i.name,
}));

const Automotive = () => {
  const { dispatch } = useContext(ImageViewerContext);

  useEffect(() => {
    const action = updateImageViewer(photos);
    dispatch(action);

    // Reset images in image viewer on unmount
    return () => {
      const action = resetImageViewer();
      dispatch(action);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="automotive" dark>
      <Container as="section">
        <div className="cover">
          {cover && <img src={cover.url} alt={cover.name} />}
          <div className="content">
            <ScrollAnimation animateIn="fadeIn">
              <h1>The cars we drive say a lot about us.</h1>
            </ScrollAnimation>
          </div>
        </div>
        <PhotoGallery onClick={handler} photos={photos} />
      </Container>
    </Layout>
  );

  function handler(e: SyntheticEvent, photo: any) {
    const action = selectImage(photo.photo);
    dispatch(action);
  }
};

export default Automotive;