import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
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

const BackButton = styled(Link)`
  color: inherit;
  display: block;
  margin-bottom: 0.75rem;
  opacity: 0.54;
  position: relative;
  text-decoration: none !important;
  transition: opacity ease-in-out 225ms;

  &:active,
  &:visited {
    color: inherit !important;
  }

  &:hover {
    opacity: 1;
  }

  i {
    align-items: center;
    display: inline-flex;
    font-size: 0.8em;
    margin-right: 0.5rem;
  }
`;

const CollectionPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      collectionImages: images,
    },
  },
}: Props) => (
  <Layout>
    <BackButton to="/photography">
      <i className="fa-solid fa-chevron-left"/> Back to Photography
    </BackButton>
    <PageTitle css={css`margin: 0rem`}>{title}</PageTitle>
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
            quality: 100
            width: 1600
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
