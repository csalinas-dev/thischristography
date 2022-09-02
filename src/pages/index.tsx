import * as React from "react";
import { css } from "@emotion/react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Layout } from "components";
import { graphql } from "gatsby";
import { FC } from "react";

interface Props {
  data: {
    imageData: ImageDataLike;
  };
}

const background = css`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const IndexPage: FC<Props> = ({ data: { imageData } }: Props) => {
  let content = <div>Missing Homepage Image</div>;
  if (imageData) {
    const image = getImage(imageData);
    if (image) {
      content = (
        <GatsbyImage
          alt="White Sands National Park by This Christography"
          css={background}
          objectFit="cover"
          image={image}
        />
      );
    }
  }

  return <Layout footer={false}>{content}</Layout>;
};
export default IndexPage;

export const query = graphql`
  query HomepageImage {
    imageData: imageSharp(
      fluid: {originalName: {eq: "thischristography-20201010.jpg"}}
    ) {
      id
      gatsbyImageData
    }
  }
`;
