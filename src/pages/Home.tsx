import * as React from 'react';

import Header from '../components/Header';
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
          <section className="container">
            <h1>This Christography</h1>
            <h4><em>#portraits #weddings #landscapes #automotive #lightpainting</em></h4>
            <p>
              Chris Salinas Jr. is an Albuquerque photographer, specializing in portraits, weddings, landscapes, automotive, and light painting. He is a native New Mexican, born and raised in Albuquerque. During the day, he is a softare engineer for a local IT company, but he is available for sessions on the weekends and on weekday evenings (after 5:30pm). You may contact Chris via email at:
            </p>
            <h3><a href="mailto:thischristography@gmail.com">thischristography@gmail.com</a></h3>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
