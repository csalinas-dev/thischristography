import * as React from 'react';
import Header from '../components/Header';

class RealEstate extends React.Component {
  public render() {
    return (
      <div className="real-estate">
        <Header />
        <main>
          <section className="container">
            <h1>Real Estate</h1>
          </section>
        </main>
      </div>
    )
  }
}

export default RealEstate;
