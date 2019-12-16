import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import CarouselItem from './CarouselItem'
import SocialLink from '../../components/SocialLink';
import homeImages from '../../shared/data/homeImages.json';
import socials from '../../shared/data/socials.json';

import './index.scss';

const Home: React.FC = () => (
  <div className="home">
    <Carousel controls={false} indicators={false} fade={true}>
      {map(homeImages, CarouselItem)}
    </Carousel>
    <div className="content">
      <img
        className="logo"
        src="/assets/logos/logo-white.png"
        alt="This Christography"
      />
      <nav>
        <Link to="/portraits">Portraits</Link>
        <Link to="/weddings">Weddings</Link>
        <Link to="/automotive">Automotive</Link>
        <Link to="/real-estate">Real Estate</Link>
      </nav>
      <nav className="socials">
        {map(socials, SocialLink)}
      </nav>
    </div>
  </div>
);

export default Home;
