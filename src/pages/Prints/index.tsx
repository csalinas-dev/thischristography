import Layout from 'components/Layout';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './index.scss';

const Prints = () => (
  <Layout className="prints">
    <Container as="section">
      <h1>Order Prints</h1>
      <p>
        Contact <a href="mailto:thischristography@gmail.com?subject=Order%20Prints">thischristography@gmail.com</a> to order prints.
        You will receive an invoice via Square that must be paid in full before the order is officially placed.
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

export default Prints;