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
    <Container as="section">
      <h1>Printing</h1>
      <p>
        To purchase prints, send your selected images to
        <a href="mailto:thischristography@gmail.com">thischristography@gmail.com</a>.
        Please include the sizes and quantities for each image.
      </p>
      <Table responsive striped>
        <thead>
          <tr>
            <th>Height</th>
            <th>Width</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th colSpan={3}>Panoramics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5"</td>
            <td>15"</td>
            <td className="text-right">$10.00</td>
          </tr>
          <tr>
            <td>8"</td>
            <td>24"</td>
            <td className="text-right">$36.00</td>
          </tr>
          <tr>
            <td>10"</td>
            <td>30"</td>
            <td className="text-right">$63.00</td>
          </tr>
          <tr>
            <td>12"</td>
            <td>36"</td>
            <td className="text-right">$108.00</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan={3}>Landscapes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6"</td>
            <td>9"</td>
            <td className="text-right">$5.00</td>
          </tr>
          <tr>
            <td>10"</td>
            <td>15"</td>
            <td className="text-right">$17.00</td>
          </tr>
          <tr>
            <td>12"</td>
            <td>18"</td>
            <td className="text-right">$25.00</td>
          </tr>
          <tr>
            <td>16"</td>
            <td>24"</td>
            <td className="text-right">$44.00</td>
          </tr>
          <tr>
            <td>20"</td>
            <td>30"</td>
            <td className="text-right">$63.00</td>
          </tr>
          <tr>
            <td>24"</td>
            <td>36"</td>
            <td className="text-right">$91.00</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan={3}>Portraits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5"</td>
            <td>4"</td>
            <td className="text-right">$2.00</td>
          </tr>
          <tr>
            <td>10"</td>
            <td>8"</td>
            <td className="text-right">$6.00</td>
          </tr>
          <tr>
            <td>20"</td>
            <td>16"</td>
            <td className="text-right">$39.00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Layout>
);

export default Pricing;