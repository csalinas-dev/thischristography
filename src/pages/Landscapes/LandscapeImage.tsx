import Image from 'components/Image';
import React, { PropsWithChildren, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import { ImageInfo } from 'shared/models/ImageInfo';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { selectImage, updateImageViewer } from 'containers/ImageViewer/actions';
import './LandscapeImage.scss';

interface WorkProps {
  images: Array<ImageInfo>;
  selected: ImageInfo;
  className?: string;
}

const Work = (props: PropsWithChildren<WorkProps>) => {
  const { dispatch } = useContext(ImageViewerContext);
  const { images, selected, children, className } = props;

  return (
    <Container as="section" onClick={handler} className={`landscape-image ${className}`}>
      <Image
        alt={selected.name}
        height={selected.height}
        id={selected.id}
        src={selected.url}
        width={selected.width}
      />
      <ScrollAnimation animateIn="fadeInRight" className="landscape-content">
        {children}
        <label>Click to view gallery</label>
      </ScrollAnimation>
    </Container>
  );

  function handler() {
    // Add images for gallery
    const imagesAction = updateImageViewer(images);
    dispatch(imagesAction);

    // Select the cover image
    const selectAction = selectImage(selected);
    dispatch(selectAction);
  };
};

export default Work;