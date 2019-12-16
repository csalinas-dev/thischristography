import React, { FC } from 'react';
import './Brand.scss';

const Brand: FC = () => (
  <>
    <img
      src="/assets/logos/icon.png"
      alt="This Christography Icon"
      className="brand d-inline-block d-md-none align-top"
    />
    <img
      src="/assets/logos/logo.png"
      alt="This Christography Logo"
      className="brand d-none d-md-inline-block align-top"
    />
  </>
);

export default Brand;
