import * as React from 'react';

import Header from '../components/Header';

class Services extends React.Component {
  public render() {
    return (
      <div className="services">
        <Header />
        <main>
          <section className="container">
            <h1>Services</h1>
            <h2>Photoshoot</h2>
            <p>An hour-long photoshoot includes up to one (1) hour of picture taking. The delivery of the final, branded images will be sent via Google Drive, however, you may choose to have a different delivery method, but at an additional cost (<a href="#delivery-options">see below</a>).</p>
            <p>The cost of a photoshoot is <strong>$100 per hour.</strong></p>

            <h2>Smoke Bombs</h2>
            <p>This includes the use of one smoke bomb for portraits that will last approximately 90 seconds. In order to have smoke bomb portraits taken, the photographer MUST be notified <em>at least one week in advance</em>. The offered colors include: Black, Blue, Green, Orange, Pink, Purple, Red, White, and Yellow.</p>
            <p>The cost to add a smoke bomb to your photoshoot is <strong>$20 per smoke bomb.</strong></p>
            <p><small>* This is an add-on item. At least an hour-long photoshoot must be purchased in order to qualify.</small></p>
            <p><small>** A refund will be given for this item if weather or location does not permit the use of smoke bombs.</small></p>
          </section>
          <section className="container" id="delivery-options">
            <h1>Delivery Options</h1>
            <h2>Google Drive (included)</h2>
            <p>The delivery of the final, branded images will be sent via Google Drive. A Google Drive folder link will be sent to the given email. Upon the link delivery, the images will stay online (in the Google Drive folder) for three (3) months. The images will be deleted, but you may request for the images to be put back online, but at <strong>an additional charge of $10 per month</strong>.</p>

            <h2>USB Drive (optional)</h2>
            <p>You may purchase a USB drive for image delivery at <strong>$10 per USB drive</strong>.</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Services;
