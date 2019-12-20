import Image from 'components/Image';
import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col } from 'react-bootstrap';
import { ImageInfo } from 'shared/models/ImageInfo';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { selectImage } from 'containers/ImageViewer/actions';
import './Portrait.scss';


const Portrait = (image: ImageInfo, index: number) => {
  const { dispatch } = useContext(ImageViewerContext);

  return (
    <Col xs={4} lg={3} key={image.name} className="portrait p-2">
      <ScrollAnimation animateIn="fadeIn" delay={index * 50} duration={1}>
        <button className="portrait-link" onClick={handler}>
          <Image src={image.url} alt={image.name} id={image.id} />
        </button>
      </ScrollAnimation>
    </Col>
  );

  function handler() {
    const action = selectImage(image);
    dispatch(action);
  }
};

export default Portrait;
