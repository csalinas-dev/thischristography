import React from 'react';
import { SocialInfo } from 'shared/models/SocialInfo';

const SocialLink: React.FC<SocialInfo> = (props: React.PropsWithChildren<SocialInfo>) => (
  <a
    className="nav-link"
    href={props.url}
    key={props.name}
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className={`fab ${props.icon}`} />
  </a>
);

export default SocialLink;