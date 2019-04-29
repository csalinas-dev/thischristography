import * as React from 'react';
import Lightbox from 'react-images';
import PhotoGallery from 'react-photo-gallery';

interface IGalleryProps {
  photos: any[];
}

const Gallery = (props: IGalleryProps) => {
  const { photos } = props;
  const [image, setImage] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const openLightbox = (e: any, img: any) => {
    setImage(img.index);
    setOpen(true);
  };
  const closeLightbox = () => {
    setOpen(false);
  };
  const prev = () => {
    setImage(image - 1);
  };
  const next = () => {
    setImage(image + 1);
  };

  return (
    <div>
      <PhotoGallery
        direction="column"
        onClick={openLightbox}
        photos={photos}
      />
      <Lightbox
        currentImage={image}
        images={photos}
        isOpen={open}
        onClickNext={next}
        onClickPrev={prev}
        onClose={closeLightbox}
      />
    </div>
  );
}

export default Gallery;
