import Image from 'components/Image';
import React, { FC, PropsWithChildren } from 'react';
import { Col } from 'react-bootstrap';
import { Image as ImageInfo } from 'shared/models/Image';
import './Portrait.scss';

const Portrait: FC<ImageInfo> = (props: PropsWithChildren<ImageInfo>) => (
  <Col xs={6} lg={3} key={props.name} className="portrait p-2">
    <a href="#" className="portrait-link">
      <Image src={props.url} alt={props.name} />
    </a>
  </Col>
);

export default Portrait;
