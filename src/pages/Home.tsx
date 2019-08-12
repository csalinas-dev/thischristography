import * as React from 'react';
import { Link } from 'react-router-dom';

import Gallery from 'src/components/Gallery';
import Header from 'src/components/Header';
import { featured } from 'src/data/Photos';
import './Home.css';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <div className="splash">
          <img src="/assets/logos/logo-white.png" />
        </div>
        <Header />
        <main>
          <div>
            <Gallery photos={featured} />
          </div>
          <section className="container">
            <h1>This Christography</h1>
            <p>
              Chris Salinas Jr. is an Albuquerque photographer, specializing in portraits, weddings, landscapes, automotive, and light painting. He is a native New Mexican, born and raised in Albuquerque. During the day, he is a softare engineer for a local IT company, but he is available for sessions on the weekends and on weekday evenings (after 5:30pm). You may contact Chris via email at:
            </p>
            <a className="btn btn-outline-primary" href="mailto:thischristography@gmail.com"><h4>thischristography@gmail.com</h4></a>
          </section>
          <section className="container">
            <h1>Services</h1>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card my-3">
                  <img src="/assets/gallery/portraits/ThisChristography-20190323-003.jpg" className="card-img-top" alt="Renee's Portrait" />
                  <div className="card-body text-center">
                    <h4>Portraits</h4>
                    <p className="mb-0">$100/hr</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link className="btn btn-outline-primary" to="/portraits">Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card my-3">
                  <img src="/assets/gallery/weddings/ThisChristography-20190316-021.jpg" className="card-img-top" alt="Alex and Serina's Engagement Picture" />
                  <div className="card-body text-center">
                    <h4>Weddings</h4>
                    <p className="mb-0">$100/hr</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link className="btn btn-outline-primary" to="/weddings">Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card my-3">
                  <img src="/assets/gallery/automotive/ThisChristography-20190416-001.jpg" className="card-img-top" alt="Mustang" />
                  <div className="card-body text-center">
                    <h4>Automotive</h4>
                    <p className="mb-0">$100/hr</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link className="btn btn-outline-primary" to="/automotive">Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card my-3">
                  <img src="/assets/gallery/real-estate/ThisChristography-20190421-003.jpg" className="card-img-top" alt="Mustang" />
                  <div className="card-body text-center">
                    <h4>Real Estate</h4>
                    <p className="mb-0">$200/property</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link className="btn btn-outline-primary" to="/real-estate">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
