import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import { Layout } from "components";
import { PageTitle } from "core/styles";
import { CollectionLayout } from "components/pages/photography";
import { Collection } from "core/types/collections";

interface Props {
  data: {
    markdownRemark: Collection;
  };
}

const BackButton = styled(Link)``;

const CollectionPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      collectionImages: images,
    },
  },
}: Props) => (
  <Layout>
    <BackButton to="/photography">Back To Photography</BackButton>
    <PageTitle>{title}</PageTitle>
    <CollectionLayout title={title} images={images} />
  </Layout>
);
export default CollectionPage;

export const query = graphql`
  query CollectionQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        caption
      }
      collectionImages {
        id
        childImageSharp {
          gatsbyImageData(
            transformOptions: { fit: COVER, cropFocus: CENTER }
            quality: 50
          )
          original {
            height
            width
          }
        }
      }
    }
  }
`;
