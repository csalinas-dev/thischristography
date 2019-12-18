import Layout from 'components/Layout';
import Portrait from './Portrait';
import React, { FC } from 'react';
import { chain, map, shuffle } from 'lodash';
import { Col, Container, Row } from 'react-bootstrap';

const portraits = chain(require('shared/data/portraitImages.json'))
  .shuffle()
  .take(16)
  .value();

const Portraits: FC = () => (
  <Layout className="portraits">
    <Container>
      <Row>
        <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
          <h1 className="text-center">
            A portrait is not made in the camera but on either side of it.
          </h1>
        </Col>
        <Col xs={12} lg={6} className="portraits-container">
          <Row>
            {map(portraits, Portrait)}
          </Row>
        </Col>
      </Row>
    </Container>
    <Container as="section">
      <Row>
        <Col lg={4} className="offset-lg-2">
          Image
        </Col>
        <Col lg={4}>
          <h1>Portraits</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Portraits;
