import React from 'react';
import { LinkInfo } from 'shared/models/LinkInfo';

const ContactItem = ({id, name, url, icon}: LinkInfo) => (
  <li key={`contact-item-${id}`} className="py-1">
    <span className="fa-li"><i className={icon} /></span>
    <a href={url} target="_blank" rel="noopener noreferrer" className="pl-2">{name}</a>
  </li>
);

export default ContactItem;