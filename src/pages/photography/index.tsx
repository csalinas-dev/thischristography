import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { Layout } from "components";
import { CategoryPlate } from "components/pages/photography";
import { breakpoints, PageTitle } from "core/styles";
import { Collection } from "core/types/collections";
import { getImage } from "gatsby-plugin-image";

type PhotographyQueryType = {
  allMarkdownRemark: {
    nodes: Collection[];
  };
};

interface Props {
  data: PhotographyQueryType;
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
  const collections = data.allMarkdownRemark.nodes;
  const children = collections.map(
    ({ 
      id,
      frontmatter: { slug, title, caption },
      thumbnailImg: {
        childImageSharp: imageData
      }
    }) => {
      const image = getImage(imageData);
      return (
        <CategoryPlate
          key={id}
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
export default Photography;

export const query = graphql`
  query PhotographyQuery {
    allMarkdownRemark(sort: {fields: frontmatter___title}) {
      nodes {
        id
        frontmatter {
          caption
          slug
          thumbnail
          title
        }
        thumbnailImg {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 0.67
              transformOptions: {fit: COVER, cropFocus: CENTER}
              quality: 25
            )
          }
        }
      }
    }
  }
`;
