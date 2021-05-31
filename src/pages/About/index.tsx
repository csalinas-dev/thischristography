import amber from './amber.jpg';
import Image from 'components/Image';
import Layout from 'components/Layout';
import me from './me.jpg';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';

const About = () => {
  const today = new Date().getFullYear();
  const startPracticing = new Date(2007, 1, 1).getFullYear();
  const yearsPracticing = today - startPracticing;
  return (
    <Layout className="about" dark>
      <Container>
        <Row>
          <Col lg={4}>
            <Row>
              <Col md={8} lg={12} xl={8} className="offset-md-2 offset-lg-0 offset-xl-2 circle">
                <Image id="8X8SpGXmtHfp" src={me} alt="Christopher Salinas Jr (also known as JR Salinas)"/>
              </Col>
              <Col xs={12} className="text-center pt-4">
                <h1>Christopher Salinas Jr.</h1>
                <h2>Photographer</h2>
              </Col>
            </Row>
          </Col>
          <Col>
            <section className="mt-4 mt-lg-0">
              <h3>About Me</h3>
              <p>I'm a freelance photographer based in Albuquerque, NM that specializes in portraits, weddings, automotive, and landscapes. I have been practicing photography for about {yearsPracticing} years now, but only started This Christography at the end of March 2019.</p>
              <p>I am currently a software engineer for a local IT/Software company in Albuquerque, NM. I am also pursuing my Bachelor's of Science in Computer Science (BSCS) at the University of New Mexico.</p>
            </section>
            <section>
              <Row>
                <Col xl={7}>
                  <h3>My Photography</h3>
                  <p>Photography has given me many opportunities to work with some really talented individuals and go to very special places. I hope to continue travelling around the world to freeze beautiful moments in time so they last forever.</p>
                  <p>In the future, I plan on acquiring other photography gear that will allow me to gain different perspectives on life and its events. I want to continue my journey of creating creative works of art by exploring the capabilities of Adobe Photoshop and Adobe Lightroom. For instance, look at this creative portrait that I took and edited of Amber:</p>
                </Col>
                <Col md={6} xl={5} className="offset-md-3 offset-xl-0">
                  <Image id="pYywEwfx6F3U" src={amber} width={4} height={5} alt="@ambajambaa fire bending" />
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;