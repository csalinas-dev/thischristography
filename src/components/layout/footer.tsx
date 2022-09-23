import styled from '@emotion/styled';
import React, { FC } from 'react';

const Footer = styled.footer`
  align-content: center;
  display: flex;
  grid-area: footer;
  justify-content: center;
  padding: 4rem 0;
`;

const FooterWrapper: FC = () => (
  <Footer>
    &copy; 2019 - {(new Date()).getFullYear()} This Christography. All Rights Reserved.
  </Footer>
);

export default FooterWrapper;