import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import { Layout } from "components";
import { PageTitle, whiteframes } from "core/styles";
import { CollectionLayout } from "components/pages/photography";

// interface Props {
//   data: {
//     collections: AllFile;
//     images: AllFile;
//   };
// }

const BackButton = styled(Link)``;

const CollectionPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, caption, images },
    },
  },
}: any) => (
  <Layout>
    <BackButton to="/photography">Back To Photography</BackButton>
    <PageTitle>{title}</PageTitle>
    <CollectionLayout caption={caption} images={images} />
  </Layout>
);
export default CollectionPage;

export const query = graphql`
  query collectionQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        slug
        title
        caption
        images
      }
    }
  }
`;
