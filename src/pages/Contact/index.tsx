import ContactItem from './ContactItem';
import Layout from 'components/Layout';
import links from 'shared/data/socials.json';
import React from 'react';
import { map, find } from 'lodash';
import images from 'shared/data/home.json';
import './index.scss';
import { Container } from 'react-bootstrap';

const image = find(images, ['id', 'neK2n78xWr3x'])

const Contact = () => {
  return (
    <Layout className="contact d-flex flex-column">
      <img className="contact-image" src={image?.url} alt={image?.name} />
      <Container className="flex d-flex align-items-center justify-content-center justify-content-md-start">
        <div className="contact-content p-5">
          <h1 className="font-house">Contact</h1>
          <p>Christopher Salinas Jr.</p>
          <ul className="fa-ul">
            <li className="py-1">
              <span className="fa-li"><i className="fas fa-map-marker" /></span>
              <span className="pl-2">Albuquerque, NM</span>
            </li>
            {map(links, ContactItem)}
          </ul>
        </div>
      </Container>
    </Layout>
  );
}

export default Contact;