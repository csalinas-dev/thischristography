import React from 'react';
import { LinkInfo } from 'shared/models/LinkInfo';
import './index.scss';

const SocialLink = (link: LinkInfo) => (
  <a
    className="nav-link social-link"
    href={link.url}
    key={link.id}
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className={`fab ${link.icon}`} />
  </a>
);

export default SocialLink;