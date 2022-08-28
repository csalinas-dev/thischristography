import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import { Layout } from "components";
import { PageTitle, whiteframes } from "core/styles";

// interface Props {
//   data: {
//     collections: AllFile;
//     images: AllFile;
//   };
// }

const BackButton = styled(Link)``;

const Image = styled.img`
  box-shadow: ${whiteframes.shadows[12]};
  margin: 64px 0;
  width: 100%;
`;

const CollectionPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, caption, images: imageUrls },
    },
  },
}: any) => (
  <Layout>
    <BackButton to="/photography">Back To Photography</BackButton>
    <PageTitle>{title}</PageTitle>
    {imageUrls.map((url: any, i: number) => (
      <Image src={url} alt={`${i}. ${caption}`} />
    ))}
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
