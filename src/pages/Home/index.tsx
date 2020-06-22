import Desktop from './Desktop';
import Mobile from './Mobile';
import PageLink from 'components/PageLink';
import React, { useEffect, useState } from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { map } from 'lodash';
import { secondaryLinks } from 'components/Routes/links';
import './Home.scss';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
      const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

      const desktop = width > height && width >= 1200;
      setIsDesktop(desktop);
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
  });

  return (
    <div className="home">
      <div className="d-none">
        <h1>Photographer in Albuquerque, NM</h1>
        <p>This Christography is a photographer based in Albuquerque, NM. Specializing in many forms of portraits (individual, couples, graduates, and family), automotive, engagement, weddings, events, and landscapes.</p>
      </div>
      <nav className="socials">{map(socials, SocialLink)}</nav>
      <nav className="other">{map(secondaryLinks, PageLink)}</nav>
      <main>{isDesktop ? <Desktop /> : <Mobile />}</main>
    </div>
  );
};

export default Home;
