import Layout from 'components/Layout';
import Portrait from './Portrait';
import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { map, shuffle } from 'lodash';

const portraits = shuffle(require('shared/data/portraitImages.json'));

const Portraits: FC = () => (
  <Layout className="portraits">
    <Container>
      <Row>
        <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
          <h1 className="font-montserrat quote">
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
  </Layout>
);

export default Portraits;
