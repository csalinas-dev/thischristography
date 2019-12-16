import React from 'react';
import { CarouselItem } from 'react-bootstrap';

export interface Image {
  id: string,
  name: string,
  url: string,
};

const Item: React.FC<Image> = (props: React.PropsWithChildren<Image>) => (
  <CarouselItem key={`home-slide-${props.id}`}>
    <img className="d-block w-100" src={props.url} alt={props.name} />
  </CarouselItem>
);

export default Item;