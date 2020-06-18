import CarouselImage from './CarouselItem';
import images from 'shared/data/images/home.json';
import Logo from './Logo';
import PageLink from 'components/PageLink';
import React from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { Carousel } from 'react-bootstrap';
import { map } from 'lodash';
import { secondaryLinks } from 'components/Routes/links';
import './index.scss';

const Home = () => (
  <div className="home">
    <div className="d-none">
      <h1>Photographer in Albuquerque, NM</h1>
      <p>This Christography is a photographer based in Albuquerque, NM. Specializing in many forms of portraits (individual, couples, graduates, and family), automotive, engagement, weddings, events, and landscapes.</p>
    </div>
    <Carousel controls={false} indicators={false} fade={true}>
      {map(images, CarouselImage)}
    </Carousel>
    <nav className="socials">{map(socials, SocialLink)}</nav>
    <main><Logo /></main>
    <nav className="other">{map(secondaryLinks, PageLink)}</nav>
  </div>
);

export default Home;
