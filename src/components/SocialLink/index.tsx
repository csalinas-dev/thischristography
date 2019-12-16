import React from 'react';
import { Social } from 'shared/models/Social';

const SocialLink: React.FC<Social> = (props: React.PropsWithChildren<Social>) => (
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