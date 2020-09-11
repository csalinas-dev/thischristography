import React from 'react';
import { Link } from 'react-router-dom';
import { LinkInfo } from 'shared/models/LinkInfo';
import { Nav } from 'react-bootstrap';

const PageLink = (link: LinkInfo) => link.url.startsWith("http") 
  ? <Nav.Link as="a" href={link.url} key={link.id} target="_blank" rel="noreferrer noopener">{link.name}</Nav.Link>
  : <Nav.Link as={Link} to={link.url} key={link.id}>{link.name}</Nav.Link>;

export default PageLink;