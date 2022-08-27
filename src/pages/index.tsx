import * as React from "react";
import { css } from "@emotion/react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import { Layout } from "components";
import { graphql } from "gatsby";
import { AllFile } from "core/types/datatype";
import { FC } from "react";

interface Props {
  data: {
    images: AllFile;
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

const IndexPage: FC<Props> = ({ data }: Props) => {
  const { images } = data;
  const imageData = images.nodes.find(i => i.name.includes("20201010"));
  if (!imageData) return;

  const image = getImage(imageData.childImageSharp);
  if (!image) return;

  return (
    <Layout footer={false}>
      <GatsbyImage
        alt="White Sands National Park by This Christography"
        css={background}
        objectFit="cover"
        image={image}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "asset" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 0.67
            transformOptions: { cropFocus: CENTER }
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;
