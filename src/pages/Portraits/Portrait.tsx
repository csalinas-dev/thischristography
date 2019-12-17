import Image from 'components/Image';
import React, { FC, PropsWithChildren } from 'react';
import { Col } from 'react-bootstrap';
import { Image as ImageInfo } from 'shared/models/Image';

const Portrait: FC<ImageInfo> = (props: PropsWithChildren<ImageInfo>) => (
  <Col xs={6} lg={3} key={props.name} className="p-2">
    <Image src={props.url} alt={props.name} />
  </Col>
);

export default Portrait;
