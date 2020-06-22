import CarouselItem from './CarouselItem';
import images from 'shared/data/images/home.json';
import PageLink from 'components/PageLink';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { map } from 'lodash';
import { primaryLinks } from 'components/Routes/links';
import './index.scss';

const Mobile = () => (
  <div className="mobile">
    <Carousel controls={false} indicators={false} fade={true}>
      {map(images, CarouselItem)}
    </Carousel>
    <div className="content">
      <img
        className="logo"
        src="/assets/logos/logo-white.png"
        alt="This Christography"
      />
      <nav>{map(primaryLinks, PageLink)}</nav>
    </div>
  </div>
);

export default Mobile;
