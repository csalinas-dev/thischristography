import React from 'react';
import { Social } from '../shared/models/Social';

const SocialLink: React.FC<Social> = (props: React.PropsWithChildren<Social>) => (
  <a
    className="link"
    rel="noopener noreferrer"
    target="_blank"
    href={props.url}>
    <i className={`fab ${props.icon}}`} />
  </a>
);

export default SocialLink;