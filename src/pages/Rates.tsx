import * as React from 'react';

import Header from '../components/Header';

class Rates extends React.Component {
  public render() {
    return (
      <div className="rates">
        <Header />
        <main>
          <section className="container">
            <h1>Rates</h1>
          </section>
        </main>
      </div>
    );
  }
}

export default Rates;
