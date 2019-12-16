import React from 'react';
import uuid from 'shared/util/uuid';
import { CarouselItem } from 'react-bootstrap';

export interface Image {
  name: string,
  url: string,
};

const Item: React.FC<Image> = (props: React.PropsWithChildren<Image>) => (
  <CarouselItem key={uuid()}>
    <img className="d-block w-100" src={props.url} alt={props.name} />
  </CarouselItem>
);

export default Item;