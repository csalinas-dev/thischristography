import Image from 'components/Image';
import images from 'shared/data/images/portraits.json';
import Layout from 'components/Layout';
import Portrait from './Portrait';
import React, { FC, useContext, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { chain, find, map, take } from 'lodash';
import { Col, Container, Row } from 'react-bootstrap';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer, updateImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const portraits = chain(images)
  .shuffle()
  .value();

// Select images to use in the sections
const portrait = find(portraits, ['id', 'e2SMMM6TSjpy']);
const senior = find(portraits, ['id', 'sYHKhFnVx68D']);
const family = find(portraits, ['id', '22T5peWxa8W6']);

const Portraits: FC = () => {
  // Update images in image viewer on mount
  const { dispatch } = useContext(ImageViewerContext);
  useEffect(() => {
    const action = updateImageViewer(portraits);
    dispatch(action);

    // Reset images in image viewer on unmount
    return () => {
      const action = resetImageViewer();
      dispatch(action);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {map(take(portraits, 16), Portrait)}
            </Row>
          </Col>
        </Row>
      </Container>
      {portrait &&
        <Container as="section">
          <Row>
            <Col lg={6} className="offset-lg-1 mb-4 mb-lg-0">
              <ScrollAnimation animateIn="fadeInLeft">
                <Image src={portrait.url} height={portrait.height} width={portrait.width} id={portrait.id} />
              </ScrollAnimation>
            </Col>
            <Col lg={4} className="d-flex flex-column justify-content-center text-center text-lg-left">
              <ScrollAnimation animateIn="fadeInRight">
                <h1>Portraits</h1>
                <p>Composition is always my main concern! I strive to ensure that my photos are balanced and have a meaningful background, no matter the location.</p>
                <p>Going on a portrait shoot with me is intended to be a fun and comfortable experience. The camera is not the star of the show, you are!</p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      }
      {senior &&
        <Container as="section">
          <Row>
            <Col sm={8} md={6} lg={4} className="offset-sm-2 offset-md-0 order-md-2 mb-4 mb-lg-0">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <Image src={senior.url} height={senior.height} width={senior.width} id={senior.id} />
              </ScrollAnimation>
            </Col>
            <Col md={6} lg={4} className="d-flex flex-column justify-content-center offset-lg-2 order-md-1 text-center text-md-left">
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <h1>Graduation</h1>
                <p>If you are a graduating school, let's capture some timeless memories of the things that sum up your time in school! Now that you'll be done with school, let's also show the path of your future.</p>
                <p>Bring as many props or outfits as you'd like (I have a portable changing pod for your privacy).</p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      }
      {family &&
        <Container as="section">
          <Row>
            <Col sm={8} md={6} lg={4} className="offset-sm-2 offset-md-0 offset-lg-2 mb-4 mb-lg-0">
              <ScrollAnimation animateIn="fadeInLeft">
                <Image src={family.url} height={family.height} width={family.width} id={family.id} />
              </ScrollAnimation>
            </Col>
            <Col md={6} lg={4} className="d-flex flex-column justify-content-center offset-lg-1 text-center text-md-left">
              <ScrollAnimation animateIn="fadeInRight">
                <h1>Family</h1>
                <p>Gather up your loved ones and color coordinate your outfits for some excellent photos to share with your friends and the rest of the family!</p>
                <p>Annual photos are great for holiday cards and showing the growth of your family.</p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      }
    </Layout>
  );
};

export default Portraits;
