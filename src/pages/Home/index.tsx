import CarouselItem from './CarouselItem';
import images from 'shared/data/images/home.json';
import PageLink from 'components/PageLink';
import React from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { Carousel } from 'react-bootstrap';
import { map } from 'lodash';
import { primaryLinks, secondaryLinks } from 'components/Routes/links';
import './index.scss';

const Home = () => (
  <div className="home">
    <div className="d-none">
      <h1>Photography in Albuquerque, NM</h1>
      <p>This Christography is a photographer based in Albuquerque, NM. Specializing in many forms of portraits (individual, couples, graduates, and family), automotive, engagement, weddings, events, and landscapes.</p>
    </div>
    <Carousel controls={false} indicators={false} fade={true}>
      {map(images, CarouselItem)}
    </Carousel>
    <div className="content">
      <img
        className="logo"
        src="/assets/logos/logo-white.png"
        alt="This Christography"
      />
      <nav>
        {map(primaryLinks, PageLink)}
      </nav>
      <nav className="socials">
        {map(socials, SocialLink)}
      </nav>
    </div>
    <div className="other">
      <nav>
        {map(secondaryLinks, PageLink)}
      </nav>
    </div>
  </div>
);

export default Home;
