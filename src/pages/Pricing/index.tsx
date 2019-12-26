import Layout from 'components/Layout';
import React from 'react';
import { Container, Table, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import './index.scss';

const Pricing = () => (
  <Layout className="pricing">
    <Container as="section"><label>All pricing effective January 1<sup>st</sup>, 2020</label></Container>
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
            <td />
          </tr>
          <tr>
            <td>Wedding Photography</td>
            <td>$300 / hour</td>
            <td />
          </tr>
          <tr>
            <td>Automotive Session</td>
            <td>$75 / hour</td>
            <td />
          </tr>
        </tbody>
      </Table>

      <h2>Travelling Fees</h2>
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
      <p>To calculate the travelling fee, please search for your photoshoot's location below:</p>
      <InputGroup className="mb-3">
        <FormControl placeholder="Find Location" disabled />
        <InputGroup.Append>
          <Button variant="success">Find</Button>
        </InputGroup.Append>
      </InputGroup>
      <Alert variant="success" className="mt-4">
        <strong>Santa Fe, NM</strong> is <strong>62</strong> miles away from Albuquerque.
        <hr />
        The travelling fee will be <strong>$50.00</strong>.
      </Alert>
    </Container>
  </Layout>
);

export default Pricing;