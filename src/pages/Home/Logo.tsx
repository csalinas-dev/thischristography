import React, { useState } from 'react';
import './Logo.scss';

const Logo = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  return (
    <>
      <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 85 60.9" xmlSpace="preserve">
        <style type="text/css">
          {`
        .st0{clip-path:url(#SVGID_2_);}
        .st1{clip-path:url(#SVGID_14_);}
        .st2{clip-path:url(#SVGID_16_);}
        .st3{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}
        `}
        </style>
        <g id="Aperture">
          <defs>
            <polygon id="SVGID_1_" points="70.7,0 35.4,60.9 85,60.9 85,0 		" />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
          </clipPath>
          <g id="Aperture_Icon" className="st0">
            <a href="/galleries" id="Boudoir" onMouseEnter={() => setActiveLabel("Galleries")} onMouseLeave={() => setActiveLabel(null)}>
              <defs>
                <path id="SVGID_3_" d="M50.8,53.5c-2.3-0.8-4.5-2.1-6.4-3.6c-4.2-3.3-7.2-7.9-8.6-13.1c-0.2-0.4,0-0.8,0.3-1.1c3.6-3.4,7.5-6.5,11.5-9.3c0.2-0.1,0.4-0.3,0.7-0.4C47.9,35.2,48.8,44.5,50.8,53.5z" />
              </defs>
              <clipPath id="SVGID_4_">
                <use xlinkHref="#SVGID_3_" style={{ overflow: 'visible' }} />
              </clipPath>
              <g style={{ clipPath: 'url(#SVGID_4_)' }}>
                <image style={{ overflow: 'visible' }} width="1000" height="1250" xlinkHref="/assets/images/galleries/balloon-fiesta/ThisChristography-20191013.jpg" transform="matrix(1.238889e-02 0 0 1.238889e-02 41.7222 38.125)"></image>
              </g>
            </a>
            <a href="/automotive" id="Automotive" onMouseEnter={() => setActiveLabel("Automotive")} onMouseLeave={() => setActiveLabel(null)}>
              <defs>
                <path id="SVGID_5_" d="M50,38c7.7,4.9,16.1,8.8,24.8,11.5l0.1,0.2c-1.2,0.8-2.3,1.6-3.4,2.2C67.7,54,63.4,55.1,59,55c-2.1,0-4.2-0.4-6.2-1c-0.3-0.1-0.4-0.4-0.5-0.6c-0.7-3.6-1.3-7.2-1.9-10.9c-0.2-1.3-0.3-2.7-0.4-4.1C50,38.3,50,38.2,50,38z" />
              </defs>
              <clipPath id="SVGID_6_">
                <use xlinkHref="#SVGID_5_" style={{ overflow: 'visible' }} />
              </clipPath>
              <g style={{ clipPath: 'url(#SVGID_6_)' }}>
                <image style={{ overflow: 'visible' }} width="1500" height="1000" xlinkHref="/assets/images/automotive/ThisChristography-20190101-003.jpg" transform="matrix(2.017041e-02 0 0 2.017041e-02 44.7444 37.5291)"></image>
              </g>
            </a>
            <a href="/weddings" id="Weddings" onMouseEnter={() => setActiveLabel("Weddings")} onMouseLeave={() => setActiveLabel(null)}>
              <defs>
                <path id="SVGID_7_" d="M61.1,42.6c8.2-4.3,15.8-9.6,22.6-15.9c0.1,1.2,0.3,2.2,0.3,3.2c0.2,6.7-2.4,13.2-7.1,18c-0.3,0.5-1,0.6-1.5,0.4c-4.6-1.4-9.2-3.2-13.5-5.3L61.1,42.6z" />
              </defs>
              <clipPath id="SVGID_8_">
                <use xlinkHref="#SVGID_7_" style={{ overflow: 'visible' }} />
              </clipPath>
              <g style={{ clipPath: 'url(#SVGID_8_)' }}>
                <image style={{ overflow: 'visible' }} width="1498" height="1000" xlinkHref="/assets/images/weddings/ThisChristography-20190724-52.jpg" transform="matrix(2.411111e-02 0 0 2.411111e-02 56.9309 26.1667)"></image>
              </g>
            </a>
            <a href="/portraits" id="Portraits" onMouseEnter={() => setActiveLabel("Portraits")} onMouseLeave={() => setActiveLabel(null)}>
              <defs>
                <path id="SVGID_9_" d="M70.7,35.2c0.4-9.2-0.4-18.4-2.5-27.4c0.4,0.1,0.7,0.2,0.9,0.4c7,3,12.2,9.1,14.1,16.5c0.1,0.3,0,0.5-0.2,0.8c-3.7,3.5-7.8,6.8-12,9.7H70.7z" />
              </defs>
              <clipPath id="SVGID_10_">
                <use xlinkHref="#SVGID_9_" style={{ overflow: 'visible' }} />
              </clipPath>
              <g transform="matrix(1 0 0 1 0 4.768372e-07)" style={{ clipPath: 'url(#SVGID_10_)' }}>
                <image style={{ overflow: 'visible' }} width="1000" height="1250" xlinkHref="/assets/images/portraits/ThisChristography-20200201-4.jpg" transform="matrix(2.830000e-02 0 0 2.830000e-02 59.9585 7.3556)"></image>
              </g>
            </a>
            <a href="/galleries" id="Galleries" onMouseEnter={() => setActiveLabel("Galleries")} onMouseLeave={() => setActiveLabel(null)}>
              <defs>
                <path id="SVGID_11_" d="M44,11.6c0.6-0.4,1.1-0.8,1.6-1.2C51.6,6.3,59.1,5,66.1,7c0.3,0,0.6,0.3,0.7,0.6c1.1,5,1.9,10.1,2.3,15.2c0,0.1,0,0.2,0,0.4C61.3,18.3,52.9,14.4,44,11.6z" />
              </defs>
              <clipPath id="SVGID_12_">
                <use xlinkHref="#SVGID_11_" style={{ overflow: 'visible' }} />
              </clipPath>
              <g transform="matrix(1 0 0 1 0 2.384186e-07)" style={{ clipPath: 'url(#SVGID_12_)' }}>
                <image style={{ overflow: 'visible' }} width="1498" height="1000" xlinkHref="/assets/images/galleries/thunderbirds/ThisChristography-20190518-029.jpg" transform="matrix(2.236315e-02 0 0 2.236315e-02 50.3996 3.6233)"></image>
              </g>
            </a>
          </g>
        </g>
        <g id="Text">
          <g>
            <defs>
              <polygon id="SVGID_13_" points="70.6,0 35.4,60.9 0,60.9 0,0" />
            </defs>
            <clipPath id="SVGID_14_">
              <use xlinkHref="#SVGID_13_" style={{ overflow: 'visible' }} />
            </clipPath>
            <path id="C" className="st1" d="M51.5,37.5c0.2-0.4,0.4-0.6,0.7-0.6c0.8,0,1.2,1,1.2,3c0,1.9-0.7,3.8-2.2,5.9c-1.2,1.7-2.6,3.1-4.1,4.2c-2.7,2-5.7,3-9,3c-2.3,0-4.3-0.5-6-1.4c-1.8-0.9-3.2-2.4-4.3-4.5c-1.2-2.3-1.9-4.8-1.9-7.6c-0.1-7,2.2-13.7,7.1-20.2c4.2-5.6,8.7-9.3,13.5-11.2c2.1-0.8,4-1.2,5.5-1.2c1.7,0,3.1,0.5,4.2,1.4c2,1.7,3.2,3.5,3.8,5.3c0.2,0.8,0.4,1.5,0.4,2.3c0,1.3-0.3,2.6-1,4c-0.6,1.2-1.5,3.5-2.9,7.1c-0.3,0.8-0.8,0.9-1.6,0.4c-1.4-1-2.2-2.4-2.2-4.3c0-1.2,0.5-3.1,1.5-5.6s1.5-4.2,1.5-5.1c0-1.3-0.6-1.9-1.8-1.9c-2.1,0-4.9,1.3-8.4,4c-3.9,3-7.2,6.6-9.8,10.9c-3.2,5.3-4.8,10.5-4.8,15.8c0,4.1,0.9,6.8,2.7,8.3c1,0.9,2.2,1.3,3.5,1.3c2.3,0,4.7-1.2,7.2-3.5C47.1,44.8,49.5,41.6,51.5,37.5z" />
          </g>
          <g>
            <defs>
              <polygon id="SVGID_15_" points="70.6,0 35.4,60.9 0,60.9 0,0" />
            </defs>
            <clipPath id="SVGID_16_">
              <use xlinkHref="#SVGID_15_" style={{ overflow: 'visible' }} />
            </clipPath>
            <path id="T" className="st2" d="M17.4,14.5C15.8,14.8,14.3,15,13,15c-4.6,0.2-7.3-1.2-8.2-4.1c-0.1-0.3-0.1-0.6,0.1-0.8C5,10,5.2,9.9,5.6,10C8,10.2,12,9.9,17.7,9.1C23.6,8.3,27,7.9,28,8c3.6,0.1,5.9,1.3,6.8,3.7c0.1,0.3,0.1,0.6,0,0.8s-0.4,0.3-0.9,0.3c-0.6,0-1.3-0.1-2-0.1c-2.3,0-5.7,0.4-10.2,1.2c0.1,2.1-0.7,4.6-2.4,7.6c-2.5,4.5-5,9-7.6,13.5c-3.3,6.1-6.1,12-8.5,17.6c-0.3,0.6-0.7,0.7-1.2,0.2c-0.9-0.9-1.4-2.1-1.4-3.8c0-0.9,0.1-1.8,0.4-2.7c0.8-3,2.9-7.8,6.2-14.3C10.8,25.3,14.1,19.5,17.4,14.5z" />
          </g>
        </g>
        <line id="Slash" className="st3" x1="36" y1="60" x2="70" y2="1" />
      </svg>
    </>
  );
}

export default Logo;