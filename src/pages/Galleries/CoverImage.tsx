import Image from 'components/Image';
import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import { find } from 'lodash';
import { ImageInfo } from 'shared/models/ImageInfo';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { selectImage, updateImageViewer } from 'containers/ImageViewer/actions';
import './CoverImage.scss';

export interface CoverImageProps {
  images: Array<ImageInfo>;
  selected: string;
  title: string;
  className?: string;
}

const CoverImage = (props: CoverImageProps) => {
  const { dispatch } = useContext(ImageViewerContext);
  const { images, selected, title, className } = props;

  const image = find(images, ['id', selected]);

  if (!image) {
    return;
  }

  const handler = () => {
    // Add images for gallery
    const imagesAction = updateImageViewer(images);
    dispatch(imagesAction);

    // Select the cover image
    const selectAction = selectImage(image);
    dispatch(selectAction);
  };

  return (
    <Container as="section" key={`cover-image-${image.id}`}>
      <div onClick={handler} className={`cover-image ${className}`}>
        <Image
          alt={image.name}
          height={1}
          id={image.id}
          src={image.url}
          width={3}
        />
        <ScrollAnimation animateIn="fadeInRight" className="cover-image-content">
          <h1 className="font-house">{title}</h1>
          <label>Click to view gallery</label>
        </ScrollAnimation>
      </div>
    </Container>
  );
};

export default CoverImage;