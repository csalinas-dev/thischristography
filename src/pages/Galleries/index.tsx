import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Galleries = () => (
  <div className="galleries">
    <Header />
    <main>
      <section className="container">
        <h1>Galleries</h1>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src="/assets/galleries/20190518/ThisChristography-20190518-008.jpg" alt="USAF Thunderbirds" />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h1>USAF Thunderbirds</h1>
            <h5>May 18<sup>th</sup>, 2019</h5>
            <p>
              <Link
                className="btn btn-primary"
                style={{color: '#fff'}}
                to="/galleries/20190518"
              >
                View Photos
              </Link></p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Galleries;
