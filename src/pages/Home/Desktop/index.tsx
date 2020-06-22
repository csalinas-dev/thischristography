import Logo from './Logo';
import React from 'react';
import './index.scss';

const Desktop = () => (
  <div className="desktop">
    <video autoPlay muted loop id="background">
      <source src="/assets/home/background.mp4?v=a361s3" type="video/mp4" />
    </video>
    <Logo />
  </div>
);

export default Desktop;
