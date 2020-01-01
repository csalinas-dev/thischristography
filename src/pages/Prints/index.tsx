import Layout from 'components/Layout';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './index.scss';

const Prints = () => (
  <Layout className="prints">
    <Container as="section">
      <h1>Ordering Prints</h1>
      <p>Order a print of a This Christography original by contacting <a href="mailto:thischristography@gmail.com?subject=Order%20Prints">thischristography@gmail.com</a> today! You will receive an invoice via Square that must be paid in full before the order is officially placed.</p>
      <p>Free shipping on orders $35+.</p>
    </Container>
    <Container as="section">
      <h1>Paper Prints</h1>
      <p>Prints are printed on metallic paper (glossy pearlescent finish) with a lustre coating. Metallic Paper uses a patented combination of film and laminate layers resulting in a striking metallic shine. The Lustre Coating adds a rich sheen to the print and protects against fingerprints and UV exposure.</p>
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
    <Container as="section">
      <h1>Canvas Prints</h1>
      <p>Pricing includes mounting. Gallery Wraps are printed directly on fine art canvas and wrapped around a 1.5" stretcher frame with a sawtooth or wire hanger.</p>
      <Table responsive striped>
        <thead>
          <tr>
            <th>Height</th>
            <th>Width</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10"</td>
            <td>8"</td>
            <td className="text-right">$78.00</td>
          </tr>
          <tr>
            <td>10"</td>
            <td>30"</td>
            <td className="text-right">$128.00</td>
          </tr>
          <tr>
            <td>16"</td>
            <td>24"</td>
            <td className="text-right">$142.00</td>
          </tr>
          <tr>
            <td>20"</td>
            <td>16"</td>
            <td className="text-right">$128.00</td>
          </tr>
          <tr>
            <td>20"</td>
            <td>30"</td>
            <td className="text-right">$184.00</td>
          </tr>
          <tr>
            <td>24"</td>
            <td>36"</td>
            <td className="text-right">$241.00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Layout>
);

export default Prints;