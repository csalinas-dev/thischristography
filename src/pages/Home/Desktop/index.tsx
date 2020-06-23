import Logo from './Logo';
import React from 'react';
import './index.scss';

const Desktop = () => (
  <>
    <video autoPlay muted loop id="background">
      <source src="/assets/home/background.mp4?v=a361s3" type="video/mp4" />
    </video>
    <Logo />
  </>
);

export default Desktop;
