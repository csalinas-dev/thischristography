import Image from 'components/Image';
import React, { FC, PropsWithChildren, useContext } from 'react';
import { Col } from 'react-bootstrap';
import { ImageInfo } from 'shared/models/ImageInfo';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { selectImage } from 'containers/ImageViewer/actions';
import './Portrait.scss';


const Portrait: FC<ImageInfo> = (image: PropsWithChildren<ImageInfo>) => {
  const {dispatch} = useContext(ImageViewerContext);

  return (
    <Col xs={4} lg={3} key={image.name} className="portrait p-2">
      <button className="portrait-link" onClick={handler}>
        <Image src={image.url} alt={image.name} id={image.id} />
      </button>
    </Col>
  );

  function handler() {
    const action = selectImage(image);
    dispatch(action);
  }
};

export default Portrait;
