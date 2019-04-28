import * as React from 'react';
import Header from '../components/Header';

class Rates extends React.Component {
  public render() {
    return (
      <div className="rates">
        <Header />
        <main>
          <section className="container">
            <h1>Rates</h1>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Portraits</td>
                    <td>$100/hour</td>
                  </tr>
                  <tr>
                    <td>Weddings</td>
                    <td>$100/hour</td>
                  </tr>
                  <tr>
                    <td>Automotive</td>
                    <td>$100/hour</td>
                  </tr>
                  <tr>
                    <td>Real Estate</td>
                    <td>$200/property</td>
                  </tr>
                  <tr>
                    <td>Smoke Bomb (add-on)</td>
                    <td>$20 each</td>
                  </tr>
                  <tr>
                    <td>Travelling Fees</td>
                    <td>
                      Distance from Albuquerque to destination, the round trip fee will be:
                      <ul>
                        <li>0 - 50 miles: included in price.</li>
                        <li>50 - 100 miles: $75</li>
                        <li>100 - 150 miles: $150</li>
                        <li>150 - 200 miles: $225</li>
                        <li>and so on...</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Rates;
