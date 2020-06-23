import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  return (
    <>
      <svg
        id="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px"
        viewBox="0 0 85 60.9"
        xmlSpace="preserve">
        <style type="text/css">{`.cls-1{fill:none;} .cls-2{clip-path:url(#clip-path);} .cls-3{clip-path:url(#clip-path-2);}`}</style>
        <filter id="grayscale">
          <feColorMatrix type="saturate" values="0.10" />
        </filter>
        <clipPath id="clip-path" transform="translate(-0.6 -0.5)">
          <polygon className="cls-1" points="70.7 0 35.4 60.9 85 60.9 85 0 70.7 0" />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(-0.6 -0.5)">
          <polygon className="cls-1" points="70.6 0 35.4 60.9 0 60.9 0 0 70.6 0" />
        </clipPath>
        <g id="Aperture">
          <g id="Aperture_Icon" className="cls-2">
            <Link className="primary-page-link" to="/galleries" id="Galleries" onMouseEnter={() => setActiveLabel("Galleries")} onMouseLeave={() => setActiveLabel(null)}>
              <clipPath id="cp-galleries">
                <path d="M44,11.6c0.6-0.4,1.1-0.8,1.6-1.2C51.6,6.3,59.1,5,66.1,7c0.3,0,0.6,0.3,0.7,0.6c1.1,5,1.9,10.1,2.3,15.2c0,0.1,0,0.2,0,0.4C61.3,18.3,52.9,14.4,44,11.6z" />
              </clipPath>
              <g transform="matrix(1 0 0 1 0 2.384186e-07)" style={{ clipPath: 'url(#cp-galleries)' }}>
                <image
                  xlinkHref="/assets/images/galleries/thunderbirds/ThisChristography-20190518-029.jpg"
                  transform="matrix(2.236315e-02 0 0 2.236315e-02 50.3996 3.6233)"
                  filter={activeLabel === "Galleries" ? "" : "url(#grayscale)"} />
              </g>
            </Link>
            <Link className="primary-page-link" to="/portraits" id="Portraits" onMouseEnter={() => setActiveLabel("Portraits")} onMouseLeave={() => setActiveLabel(null)}>
              <clipPath id="cp-portraits">
                <path d="M70.7,35.2c0.4-9.2-0.4-18.4-2.5-27.4c0.4,0.1,0.7,0.2,0.9,0.4c7,3,12.2,9.1,14.1,16.5c0.1,0.3,0,0.5-0.2,0.8c-3.7,3.5-7.8,6.8-12,9.7H70.7z" />
              </clipPath>
              <g transform="matrix(1 0 0 1 0 4.768372e-07)" style={{ clipPath: 'url(#cp-portraits)' }}>
                <image
                  xlinkHref="/assets/images/portraits/ThisChristography-20200201-4.jpg"
                  transform="matrix(2.830000e-02 0 0 2.830000e-02 59.9585 7.3556)"
                  filter={activeLabel === "Portraits" ? "" : "url(#grayscale)"} />
              </g>
            </Link>
            <Link className="primary-page-link" to="/weddings" id="Weddings" onMouseEnter={() => setActiveLabel("Weddings")} onMouseLeave={() => setActiveLabel(null)}>
              <clipPath id="cp-weddings">
                <path d="M61.1,42.6c8.2-4.3,15.8-9.6,22.6-15.9c0.1,1.2,0.3,2.2,0.3,3.2c0.2,6.7-2.4,13.2-7.1,18c-0.3,0.5-1,0.6-1.5,0.4c-4.6-1.4-9.2-3.2-13.5-5.3L61.1,42.6z" />
              </clipPath>
              <g style={{ clipPath: 'url(#cp-weddings)' }}>
                <image
                  xlinkHref="/assets/images/weddings/ThisChristography-20190724-52.jpg"
                  transform="matrix(2.411111e-02 0 0 2.411111e-02 56.9309 26.1667)"
                  filter={activeLabel === "Weddings" ? "" : "url(#grayscale)"} />
              </g>
            </Link>
            <Link className="primary-page-link" to="/automotive" id="Automotive" onMouseEnter={() => setActiveLabel("Automotive")} onMouseLeave={() => setActiveLabel(null)}>
              <clipPath id="cp-automotive">
                <path d="M50,38c7.7,4.9,16.1,8.8,24.8,11.5l0.1,0.2c-1.2,0.8-2.3,1.6-3.4,2.2C67.7,54,63.4,55.1,59,55c-2.1,0-4.2-0.4-6.2-1c-0.3-0.1-0.4-0.4-0.5-0.6c-0.7-3.6-1.3-7.2-1.9-10.9c-0.2-1.3-0.3-2.7-0.4-4.1C50,38.3,50,38.2,50,38z" />
              </clipPath>
              <g style={{ clipPath: 'url(#cp-automotive)' }}>
                <image
                  xlinkHref="/assets/images/automotive/ThisChristography-20190101-003.jpg"
                  transform="matrix(2.017041e-02 0 0 2.017041e-02 44.7444 37.5291)"
                  filter={activeLabel === "Automotive" ? "" : "url(#grayscale)"} />
              </g>
            </Link>
            <Link className="primary-page-link" to="/galleries" id="Galleries2" onMouseEnter={() => setActiveLabel("Galleries")} onMouseLeave={() => setActiveLabel(null)}>
              <clipPath id="cp-galleries2">
                <path d="M50.8,53.5c-2.3-0.8-4.5-2.1-6.4-3.6c-4.2-3.3-7.2-7.9-8.6-13.1c-0.2-0.4,0-0.8,0.3-1.1c3.6-3.4,7.5-6.5,11.5-9.3c0.2-0.1,0.4-0.3,0.7-0.4C47.9,35.2,48.8,44.5,50.8,53.5z" />
              </clipPath>
              <g style={{ clipPath: 'url(#cp-galleries2)' }}>
                <image
                  xlinkHref="/assets/images/galleries/balloon-fiesta/ThisChristography-20191013.jpg"
                  transform="matrix(1.238889e-02 0 0 1.238889e-02 41.7222 38.125)"
                  filter={activeLabel === "Galleries" ? "" : "url(#grayscale)"} />
              </g>
            </Link>
          </g>
        </g>
        <g id="Text" className="cls-3">
          <path id="C" d="M51.5,37.5c.2-.4.4-.6.7-.6q1.2,0,1.2,3a10.08,10.08,0,0,1-2.2,5.9A18.22,18.22,0,0,1,47.1,50a14.76,14.76,0,0,1-9,3,12.66,12.66,0,0,1-6-1.4,9.9,9.9,0,0,1-4.3-4.5,16.15,16.15,0,0,1-1.9-7.6c-.1-7,2.2-13.7,7.1-20.2,4.2-5.6,8.7-9.3,13.5-11.2A16.12,16.12,0,0,1,52,6.9a6.44,6.44,0,0,1,4.2,1.4A12,12,0,0,1,60,13.6a9.26,9.26,0,0,1,.4,2.3,8.76,8.76,0,0,1-1,4c-.6,1.2-1.5,3.5-2.9,7.1-.3.8-.8.9-1.6.4a5,5,0,0,1-2.2-4.3,17.24,17.24,0,0,1,1.5-5.6,17.44,17.44,0,0,0,1.5-5.1c0-1.3-.6-1.9-1.8-1.9-2.1,0-4.9,1.3-8.4,4a39.35,39.35,0,0,0-9.8,10.9,30.21,30.21,0,0,0-4.8,15.8c0,4.1.9,6.8,2.7,8.3a5.08,5.08,0,0,0,3.5,1.3c2.3,0,4.7-1.2,7.2-3.5A31.18,31.18,0,0,0,51.5,37.5Z" transform="translate(-0.6 -0.5)" />
          <path id="T" d="M17.4,14.5A24.71,24.71,0,0,1,13,15c-4.6.2-7.3-1.2-8.2-4.1a.75.75,0,0,1,.1-.8c.1-.1.3-.2.7-.1,2.4.2,6.4-.1,12.1-.9C23.6,8.3,27,7.9,28,8c3.6.1,5.9,1.3,6.8,3.7a1.1,1.1,0,0,1,0,.8q-.15.3-.9.3c-.6,0-1.3-.1-2-.1a63.71,63.71,0,0,0-10.2,1.2c.1,2.1-.7,4.6-2.4,7.6-2.5,4.5-5,9-7.6,13.5C8.4,41.1,5.6,47,3.2,52.6c-.3.6-.7.7-1.2.2A5.06,5.06,0,0,1,.6,49,8.42,8.42,0,0,1,1,46.3c.8-3,2.9-7.8,6.2-14.3C10.8,25.3,14.1,19.5,17.4,14.5Z" transform="translate(-0.6 -0.5)" />
        </g>
        <path id="Slash" d="M36,60.5a.47.47,0,0,1-.25-.07.49.49,0,0,1-.18-.68l34-59a.5.5,0,0,1,.86.5l-34,59A.5.5,0,0,1,36,60.5Z" transform="translate(-0.6 -0.5)" />
      </svg>
      <div className={classnames("label", "font-montserrat", { "show-label": !!activeLabel })}>
        <h1>{activeLabel}</h1>
      </div>
    </>
  );
}

export default Logo;