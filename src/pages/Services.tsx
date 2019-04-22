import * as React from 'react';

import Header from '../components/Header';

class Services extends React.Component {
  public render() {
    return (
      <div className="services">
        <Header />
        <main>
          <section className="container">
            <h1>Photoshoots</h1>
            <h2>Portraits</h2>
            <h3>$100 Per Hour</h3>
            <p>An hour-long photoshoot includes up to one (1) hour of picture taking. The delivery of the final, branded images will be sent via Google Drive, however, you may choose to have a different delivery method, but at an additional cost (<a href="#delivery-options">see below</a>).</p>

            <h2>Real Estate Photography</h2>
            <h3>$200 Per Property</h3>
            <p>A collection of around 20-30 branded, interior and exterior photos of the property.</p>
          </section>
          <section className="container">
            <h1>Add-ons / Fees</h1>

            <h2>Smoke Bombs</h2>
            <h3>$20 each</h3>
            <p>This includes the use of one smoke bomb that will last approximately 90 seconds. In order to have smoke bomb portraits taken, the photographer <strong>MUST</strong> be notified <em>at least one week in advance</em>. The offered colors include: Black, Blue, Green, Orange, Pink, Purple, Red, White, and Yellow.</p>
            <p><small>* This is an add-on item. At least one hour-long photoshoot must be purchased in order to qualify.</small></p>
            <p><small>** A refund will be given for this item if weather or location does not permit the use of smoke bombs.</small></p>

            <h2>Travelling Fees</h2>
            <p>Distance from Albuquerque to destination, the round trip fee will be:</p>
            <ul>
              <li>0 - 50 miles: included in price.</li>
              <li>50 - 100 miles: $75</li>
              <li>100 - 150 miles: $150</li>
              <li>150 - 200 miles: $225</li>
              <li>and so on...</li>
            </ul>
          </section>
          <section className="container" id="delivery-options">
            <h1>Delivery Options</h1>
            <h2>Google Drive</h2>
            <h3>Included with photoshoot</h3>
            <p>The delivery of the final, branded images will be sent via Google Drive. A Google Drive folder link will be sent to the given email. Upon the link delivery, the images will stay online (in the Google Drive folder) for three (3) months. The images will be deleted, but you may request for the images to be put back online, but at <strong>an additional charge of $10 per month</strong>.</p>

            <h2>USB Drive (optional)</h2>
            <h3>$10 each</h3>
            <p>All of the final, branded images will be put onto a USB thumb drive, and delivered to you (either in person or in the mail).</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Services;
