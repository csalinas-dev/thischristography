import Layout from 'components/Layout';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './index.scss';

const Pricing = () => (
  <Layout className="pricing">
    <Container as="section">
      <h1>Photoshoot Pricing</h1>
      <Table responsive striped>
        <tbody>
          <tr>
            <td>Standard Session</td>
            <td>$100 / hour</td>
            <td>Any photography session that does not have special pricing below.</td>
          </tr>
          <tr>
            <td>Graduate Portrait Session</td>
            <td>$75 / hour</td>
            <td>For high school or college graduates.</td>
          </tr>
          <tr>
            <td>Wedding Photography</td>
            <td>$300 / hour</td>
            <td />
          </tr>
          <tr>
            <td>Automotive Session</td>
            <td>$75 / hour</td>
            <td>An automotive session will only include photos of the vehicle. If you would like portraits with your vehicle, refer to the standard session for pricing.</td>
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
    <Container as="section">
      <h1>Session Information</h1>
      <p>All photoshoots require a non-refundable booking fee of $50.00. The amount will go towards your total balance.</p>
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
          <span className="ml-2">Online through a Square invoice.</span>
        </li>
      </ul>
      <p>Final images will not be delivered until payment has been received.</p>
    </Container>
    <Container>
      <label className="mb-5">All pricing effective January 1<sup>st</sup>, 2020</label>
    </Container>
  </Layout>
);

export default Pricing;