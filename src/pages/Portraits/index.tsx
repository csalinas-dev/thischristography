import Image from 'components/Image';
import images from 'shared/data/images/portraits.json';
import Layout from 'components/Layout';
import Portrait from './Portrait';
import React, { FC, useContext, useEffect } from 'react';
import { chain, find, map } from 'lodash';
import { Col, Container, Row } from 'react-bootstrap';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer, updateImageViewer } from 'containers/ImageViewer/actions';

const portraits = chain(images)
  .shuffle()
  .take(16)
  .value();

const Portraits: FC = () => {
  // Update images in image viewer on mount
  const {dispatch} = useContext(ImageViewerContext);
  useEffect(() => {
    const action = updateImageViewer(portraits);
    dispatch(action);

    // Reset images in image viewer on unmount
    return () => {
      const action = resetImageViewer();
      dispatch(action);
    };
  }, []);

  // Select images to use in the sections
  const portrait = find(portraits, ['id', 'dJt72h6mTgB7']);
  const senior = find(portraits, ['id', 'sYHKhFnVx68D']);
  const family = find(portraits, ['id', 'e2SMMM6TSjpy']);

  // Render the component
  return (
    <Layout className="portraits">
      <Container as="section">
        <Row>
          <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
            <h1 className="text-center">
              A portrait is not made in the camera but on either side of it.
          </h1>
          </Col>
          <Col xs={12} lg={5} className="offset-lg-1 portraits-container">
            <Row>
              {map(portraits, Portrait)}
            </Row>
          </Col>
        </Row>
      </Container>
      {portrait &&
        <Container as="section">
          <Row>
            <Col lg={6} className="offset-lg-1 mb-4 mb-lg-0">
              <Image src={portrait.url} height={portrait.height} width={portrait.width} id={portrait.id}/>
            </Col>
            <Col lg={4} className="d-flex flex-column justify-content-center text-center text-lg-left">
              <h1>Portraits</h1>
              <p>Portraits</p>
            </Col>
          </Row>
        </Container>
      }
      {senior &&
        <Container as="section">
          <Row>
            <Col sm={8} md={6} lg={4} className="offset-sm-2 offset-md-0 order-md-2 mb-4 mb-lg-0">
              <Image src={senior.url} height={senior.height} width={senior.width} id={senior.id} />
            </Col>
            <Col md={6} lg={4} className="d-flex flex-column justify-content-center offset-lg-2 order-md-1 text-center text-md-left">
              <h1>Seniors</h1>
              <p>Senior Portraits</p>
            </Col>
          </Row>
        </Container>
      }
      {family &&
        <Container as="section">
          <Row>
            <Col sm={8} md={6} lg={4} className="offset-sm-2 offset-md-0 offset-lg-2 mb-4 mb-lg-0">
              <Image src={family.url} height={family.height} width={family.width} id={family.id}/>
            </Col>
            <Col md={6} lg={4} className="d-flex flex-column justify-content-center offset-lg-1 text-center text-md-left">
              <h1>Family</h1>
              <p>Family Portraits</p>
            </Col>
          </Row>
        </Container>
      }
    </Layout>
  );
};

export default Portraits;
