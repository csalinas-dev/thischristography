import React from 'react';
import { LinkInfo } from 'shared/models/LinkInfo';
import './index.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const SocialLink = ({ id, name, url, icon }: LinkInfo) => (
  <OverlayTrigger
    key={id}
    placement="bottom"
    overlay={
      <Tooltip id={`tooltip-${id}`} className="d-none d-lg-inline-block">
        <small>{name}</small>
      </Tooltip>
    }
  >
    <a
      className="nav-link social-link"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className={icon} />
      <span className="d-none">{name}</span>
    </a>
  </OverlayTrigger>
);

export default SocialLink;