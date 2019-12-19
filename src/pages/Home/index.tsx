import CarouselItem from './CarouselItem';
import images from 'shared/data/images/home.json';
import React from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import './index.scss';


const Home: React.FC = () => (
  <div className="home">
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
        <Link className="nav-link" to="/portraits">Portraits</Link>
        <Link className="nav-link" to="/weddings">Weddings</Link>
        <Link className="nav-link" to="/automotive">Automotive</Link>
        <Link className="nav-link" to="/real-estate">Real Estate</Link>
      </nav>
      <nav className="socials">
        {map(socials, SocialLink)}
      </nav>
    </div>
  </div>
);

export default Home;
