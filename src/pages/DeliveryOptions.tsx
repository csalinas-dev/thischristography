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
          </section>
        </main>
      </div>
    )
  }
}

export default DeliveryOptions;
