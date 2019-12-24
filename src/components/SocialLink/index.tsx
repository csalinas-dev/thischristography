import React from 'react';
import { LinkInfo } from 'shared/models/LinkInfo';

const SocialLink = (link: LinkInfo) => (
  <a
    className="nav-link"
    href={link.url}
    key={link.id}
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className={`fab ${link.icon}`} />
  </a>
);

export default SocialLink;