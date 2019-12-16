import React from 'react';
import uuid from 'shared/util/uuid';
import { Social } from 'shared/models/Social';

const SocialLink: React.FC<Social> = (props: React.PropsWithChildren<Social>) => (
  <a
    className="nav-link"
    href={props.url}
    key={uuid()}
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className={`fab ${props.icon}`} />
  </a>
);

export default SocialLink;