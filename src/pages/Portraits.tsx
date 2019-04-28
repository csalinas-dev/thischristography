import * as React from 'react';
import Gallery from 'react-photo-gallery';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { portraits } from './Galleries';

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
            <div className="row">
              <div className="col-md-4">
                <img src="/assets/gallery/portraits/ThisChristography-20190319-031.jpg" alt="Smoke Bomb Portrait"/>
              </div>
              <div className="col-md-8">
                <h1>Smoke Bombs</h1>
                <h3>$20 each</h3>
                <p>Enhance your photos with an artistic smoke bomb. These colored smoke bombs give you approximately 90 seconds of smoke.</p>
                <p>In order to have smoke bomb portraits taken, the photographer <strong>MUST</strong> be notified <em>at least one week in advance</em>. The offered colors include: Black, Blue, Green, Orange, Pink, Purple, Red, White, and Yellow.</p>
                <p><small>* A refund will be given for this item if weather or location does not permit the use of smoke bombs.</small></p>
              </div>
            </div>
          </section>
          <section className="container">
            <h1>Gallery</h1>
            <Gallery photos={portraits} direction={"column"} />
          </section>
        </main>
      </div>
    )
  }
}

export default Portraits;
