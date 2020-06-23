import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ImageInfo } from 'shared/models/ImageInfo';

const CarouselItem = (image: ImageInfo) => (
  <Carousel.Item key={`home-slide-${image.id}`}>
    <img className="d-block w-100" src={image.url} alt={image.name} />
  </Carousel.Item>
);

export default CarouselItem;
