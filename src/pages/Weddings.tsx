import * as React from 'react';
import Gallery from 'src/components/Gallery';
import Header from 'src/components/Header';
import { weddings } from '../data/Photos';

class Weddings extends React.Component {
  public render() {
    return (
      <div className="weddings">
        <Header />
        <main>
          <section className="container">
            <h1>Weddings</h1>
            <h3>$100 Per Hour</h3>
            <p>Enjoy your wedding and festivities with the peace of mind that your special day will be captured.</p>
          </section>
          <section className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Engagement Photos</h1>
                <h3>$100 Per Hour</h3>
                <p>Let everyone know that you have tied the knot with loving portraits of you and your fiancee.</p>
              </div>
              <div className="col-md-4">
                <img src="/assets/gallery/weddings/ThisChristography-20190316-021.jpg" alt="One of Alex and Serina's engagement photos"/>
              </div>
            </div>
          </section>
          <section className="container">
            <h1>Gallery</h1>
            <Gallery photos={weddings} />
          </section>
        </main>
      </div>
    )
  }
}

export default Weddings;
