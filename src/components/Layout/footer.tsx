import styled from '@emotion/styled';
import React, { FC } from 'react';

const Footer = styled.footer`
  grid-area: footer;
`;

const FooterWrapper: FC = () => (
  <Footer>
    App Footer
  </Footer>
);

export default FooterWrapper;