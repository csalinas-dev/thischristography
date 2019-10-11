import * as React from 'react';
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component {
  public render() {
    const images = [
      '/assets/images/ThisChristography-20190323.jpg',
      '/assets/images/ThisChristography-20190616.jpg',
      '/assets/images/ThisChristography-20190905.jpg',
    ];
    return (
      <div className="home">
        <Carousel controls={false} fade={true}>
          {images.map((img, idx) => (
            <Carousel.Item>
              <img className="d-block w-100" src={img} alt={`Slide ${idx}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="content">
          <img className="logo" src="/assets/logos/logo-white.png" alt="This Christography"/>
          <nav>
            <Link className="link" to="/portraits">Portraits</Link>
            <Link className="link" to="/weddings">Weddings</Link>
            <Link className="link" to="/automotive">Automotive</Link>
            <Link className="link" to="/real-estate">Real Estate</Link>
          </nav>
          <nav className="socials">
            <a className="link" href="https://instagram.com/ThisChristography" target="_blank"><i className="fab fa-instagram" /></a>
            <a className="link" href="https://twitter.com/TChristography" target="_blank"><i className="fab fa-twitter" /></a>
            <a className="link" href="https://www.facebook.com/ThisChristography" target="_blank"><i className="fab fa-facebook-f" /></a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;
