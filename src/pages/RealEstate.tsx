import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Header from '../components/Header';
import { realEstate } from './Galleries';

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
            <Gallery photos={realEstate} direction={"column"} />
          </section>
        </main>
      </div>
    )
  }
}

export default RealEstate;
