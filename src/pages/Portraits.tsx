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
                <p>An hour-long portrait photoshoot includes up to one (1) hour of picture taking. The delivery of the final, branded images will be sent via Google Drive, however, you may choose to have a different delivery method, but at an additional cost (<Link to="/delivery-options">see delivery options</Link>).</p>
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
                <p>This includes the use of one smoke bomb that will last approximately 90 seconds. In order to have smoke bomb portraits taken, the photographer <strong>MUST</strong> be notified <em>at least one week in advance</em>. The offered colors include: Black, Blue, Green, Orange, Pink, Purple, Red, White, and Yellow.</p>
                <p><small>* This is an add-on item. At least one hour-long photoshoot must be purchased in order to qualify.</small></p>
                <p><small>** A refund will be given for this item if weather or location does not permit the use of smoke bombs.</small></p>
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
