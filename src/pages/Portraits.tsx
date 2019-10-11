import * as React from 'react';
import Footer from 'src/components/Footer';
import Gallery from 'src/components/Gallery';
import Header from 'src/components/Header';
import { portraits } from '../data/Photos';

class Portraits extends React.Component {
  public render() {
    return (
      <div className="portraits">
        <Header />
        <main>
          <section className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Portraits</h1>
                <h3>$100 Per Hour</h3>
                <p>Play sports? Graduating? In need of a new family portrait?</p>
                <p>From just-for-fun photos to senior portraits, capture moments of your life to share with your friends and family. This Christography will capture all of the beautiful moments that are going on in your life.</p>
              </div>
              <div className="col-md-4">
                <img src="/assets/gallery/portraits/ThisChristography-20190319-029.jpg" alt="Destiny's Portrait"/>
              </div>
            </div>
          </section>
          <section className="container">
            <h1>Gallery</h1>
            <Gallery photos={portraits} />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Portraits;
