import React, { FC, PropsWithChildren } from 'react';
import { Image } from 'shared/models/Image';
import './Portrait.scss';
import { Col } from 'react-bootstrap';

const Portrait: FC<Image> = (props: PropsWithChildren<Image>) => (
  <Col xs={6} lg={3} key={props.name}>
    <div className="portrait">
      <img alt={props.name} style={{ backgroundImage: `url(${props.url})` }} />
    </div>
  </Col>
);

export default Portrait;
