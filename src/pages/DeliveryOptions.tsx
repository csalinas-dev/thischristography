import * as React from 'react';
import Header from '../components/Header';

class DeliveryOptions extends React.Component {
  public render() {
    return (
      <div className="delivery-options">
        <Header />
        <main>
          <section className="container">
            <h1>Delivery Options</h1>

            <h3>Google Drive</h3>
            <h5>Included in price</h5>
            <p>The delivery of the final, branded images will be sent via Google Drive. A Google Drive folder link will be sent to the given email. Upon the link delivery, the images will stay online (in the Google Drive folder) for six (6) months. If the images have been deleted, you may request for the images to be put back online, but at <strong>an additional charge of $10 per month</strong>.</p>

            <h3>USB Drive (optional)</h3>
            <h5>$10 each</h5>
            <p>All of the final, branded images will be put onto a USB thumb drive, and delivered to you (either in person or in the mail).</p>
          </section>
        </main>
      </div>
    )
  }
}

export default DeliveryOptions;
