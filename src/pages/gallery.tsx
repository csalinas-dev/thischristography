import { css } from "@emotion/react";
import { Layout } from "components";
import React, { FC } from "react";

const Gallery: FC = () => (
  <Layout>
    Gallery
    <div
      css={css`
        width: 200px;
        height: 4000px;
        background: red;
      `}
    ></div>
  </Layout>
);

export default Gallery;
