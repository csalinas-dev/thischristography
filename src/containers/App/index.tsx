import * as React from 'react';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <div className="splash">
          <img src="/assets/logos/logo-white.png" />
        </div>
        <Header />
        <main>
          <section className="container">
            <h1>Albuquerque Photographer</h1>
            <h4><em>#portraits #weddings #landscapes #automotive #lightpainting</em></h4>
            <p>
              Christopher Salinas Jr. is a native New Mexican, born and raised in Albuquerque. His photography interests include portraits, weddings, landscapes, automotive, and light painting. He is a software engineer in Albuquerque, and is available for sessions on weekday evenings (after 5:30pm) and weekends. You may contact Chris via email at:
            </p>
            <h3><a href="mailto:thischristography@gmail.com">thischristography@gmail.com</a></h3>
          </section>
          <section className="container">
            <h1>Albuquerque at Sunset</h1>
            <h3>March 23rd, 2019 &bull; Click to download</h3>
            <a className="image" href="/assets/images/full-res/ThisChristography-20190323-003.jpg" download="ThisChristography-20190323-003.jpg">
              <img src="/assets/images/ThisChristography-20190323-003.jpg" alt="Albuquerque"/>
            </a>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
