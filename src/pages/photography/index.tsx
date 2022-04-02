import styled from "@emotion/styled";
import { Layout } from "components";
import getFilename from "core/lib/getFilename";
import { breakpoints, PageTitle } from "core/styles";
import { AllFile } from "core/types/datatype";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { CategoryPlate } from "../../components/pages/photography";

interface Props {
  data: {
    collections: AllFile;
    images: AllFile;
  };
}

const Categories = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;

  @media ${breakpoints.sm} {
    justify-content: space-between;
  }

  @media ${breakpoints.md} {
    gap: 3rem;
  }

  @media ${breakpoints.xl} {
    gap: 5rem;
  }
`;

const Photography: FC<Props> = ({ data }: Props) => {
  const collections = data.collections.nodes;
  const children = collections.map(
    ({
      name: slug,
      childMarkdownRemark: {
        frontmatter: { title, caption, image: imagePath },
      },
    }) => {
      console.log(imagePath);
      // Get imageData
      const filename = getFilename(imagePath);
      const imageData = data.images.nodes.find((v) => v.name === filename);
      if (!imageData) return;

      // Convert imageData to image
      const image = getImage(imageData.childImageSharp);
      if (!image) return;
      return (
        <CategoryPlate
          alt={caption}
          href={`/photography/${slug}`}
          image={image}
          title={title}
        />
      );
    }
  );
  return (
    <Layout>
      <PageTitle>Photography</PageTitle>
      <Categories>{children}</Categories>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    collections: allFile(
      filter: { sourceInstanceName: { eq: "collection" } }
      sort: { fields: name }
    ) {
      nodes {
        name
        childMarkdownRemark {
          frontmatter {
            title
            caption
            image
          }
          id
        }
        base
      }
    }
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

export default Photography;
