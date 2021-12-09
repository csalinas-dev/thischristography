import Layout from 'components/Layout';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './index.scss';

const Pricing = () => (
  <Layout className="pricing">
    <Container as="section">
      <h1>Session Information</h1>
      <p>All photoshoots require a non-refundable booking fee of $50.00 or 50% of the travelling fee, whichever is greater. The amount will go towards your total balance.</p>
      <p>At the end of your session, you may pay the remaining balance:</p>
      <ul className="fa-ul">
        <li>
          <span className="fa-li"><i className="fas fa-money-bill-wave" /></span>
          <span className="ml-2">In person using cash.</span>
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-credit-card" /></span>
          <span className="ml-2">In person using debit or credit card.</span>
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-file-invoice-dollar" /></span>
          <span className="ml-2">Online through a Square invoice (using debit or credit card).</span>
        </li>
      </ul>
      <p>All debit/credit card processing is handled by <a href="https://squareup.com/us/en">Square Inc.</a></p>
      <p>Final images will not be delivered until payment has been received.</p>
      <p>Checks will not be accepted.</p>
    </Container>
    <Container as="section">
      <h1>Photoshoot Pricing</h1>
      <p>More information coming soon. In the meantime, contact Chris for more information.</p>
      <Table responsive striped>
        <tbody>
          <tr>
            <td>UNM Graduates</td>
            <td>$50</td>
            <td>Pictures taken at Hodgin Hall and other spots around main campus.</td>
          </tr>
          <tr>
            <td>All Other Graduates</td>
            <td>$75</td>
            <td>Pictures taken at a location of your choosing (see travelling fees below).</td>
          </tr>
          <tr>
            <td>Portrait Session</td>
            <td>$100</td>
            <td>Individual, Couples, and Family</td>
          </tr>
          <tr>
            <td>Wedding Photography</td>
            <td>Starting at $1000</td>
            <td>Contact Chris for more information.</td>
          </tr>
          <tr>
            <td>Automotive Session</td>
            <td>$50</td>
            <td>Exterior and interior photos of your vehicle. Rolling shots are an additional $25.</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    <Container as="section">
      <h1>Travelling Fees</h1>
      <p>
        Using the one-way distance from Albuquerque to the location of the shoot,
        the round trip fee is $75 for every 50 miles. For example
      </p>
      <ul>
        <li>0 - 50 miles: included in price.</li>
        <li>50 - 100 miles: $75</li>
        <li>100 - 150 miles: $150</li>
        <li>150 - 200 miles: $225</li>
        <li>and so on...</li>
      </ul>
    </Container>
    <Container>
      <label className="mb-5">Pricing effective November 21<sup>st</sup>, 2020</label>
    </Container>
  </Layout>
);

export default Pricing;