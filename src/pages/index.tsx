import * as React from "react";
import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout } from "components";

const background = css`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const IndexPage = () => (
  <Layout footer={false}>
    <StaticImage
      alt="White Sands National Park by This Christography"
      css={background}
      objectFit="cover"
      placeholder="blurred"
      src="../assets/images/ThisChristography-20201010.jpg"
      quality={100}
    />
  </Layout>
);

export default IndexPage;
