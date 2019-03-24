import * as React from 'react';
import Header from '../../components/Header/index';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <div className="app">
          <img src="/assets/logos/logo-white.png" />
        </div>
        <Header />
        <main>
          <section className="container">
            <h1>Albuquerque Photographer</h1>
            <p>
              Christopher Salinas Jr. is a native New Mexican, born and raised in Albuquerque. His photography interests include portraits, weddings, landscapes, automotive, and light painting. He is a software engineer for <a href="https://iteamnm.com/" target="_blank">iTEAM Consulting</a>, and is available for sessions on weekday evenings and on weekends. Send all enquiries to:
            </p>
            <h3><a href="mailto:thischristography@gmail.com">thischristography@gmail.com</a></h3>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
