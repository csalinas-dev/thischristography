import * as React from 'react';
import Header from '../components/Header';

class Weddings extends React.Component {
  public render() {
    return (
      <div className="weddings">
        <Header />
        <main>
          <section className="container">
            <h1>Weddings</h1>
          </section>
        </main>
      </div>
    )
  }
}

export default Weddings;
