import CarouselItem from './CarouselItem';
import images from 'shared/data/images/home.json';
import React from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import './index.scss';


const Home = () => (
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
        <Link className="nav-link" to="/artwork">Artwork</Link>
        <Link className="nav-link" to="/weddings">Weddings</Link>
        <Link className="nav-link" to="/automotive">Automotive</Link>
      </nav>
      <nav className="socials">
        {map(socials, SocialLink)}
      </nav>
    </div>
    <div className="other">
      <nav>
        <Link className="nav-link" to="/pricing">Pricing</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
    </div>
  </div>
);

export default Home;
