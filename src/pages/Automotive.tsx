import * as React from 'react';
import Header from '../components/Header';

class Automotive extends React.Component {
  public render() {
    return (
      <div className="automotive">
        <Header />
        <main>
          <section className="container">
            <h1>Automotive</h1>
          </section>
        </main>
      </div>
    )
  }
}

export default Automotive;
