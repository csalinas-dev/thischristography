import * as React from 'react';
import Footer from 'src/components/Footer';
import Gallery from 'src/components/Gallery';
import Header from 'src/components/Header';
import { realEstate } from '../data/Photos';

class RealEstate extends React.Component {
  public render() {
    return (
      <div className="real-estate">
        <Header />
        <main>
          <section className="container">
            <h1>Real Estate Photography</h1>
            <h3>$200 Per Property</h3>
            <p>Enjoy a collection of around 20-30 branded, interior and exterior photos of the property for use in the house listing.</p>
          </section>
          <section className="container">
            <h1>Gallery</h1>
            <Gallery photos={realEstate} />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default RealEstate;
