// import styled from "@emotion/styled";
import { Layout } from "components";
// import getFilename from "core/lib/getFilename";
import { PageTitle } from "core/styles";
// import { AllFile } from "core/types/datatype";
import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
import React, { FC } from "react";

// interface Props {
//   data: {
//     collections: AllFile;
//     images: AllFile;
//   };
// }

const Collection = () => (
  <Layout>
    <PageTitle>Collection</PageTitle>
  </Layout>
);

// export const pageQuery = graphql`
//   query CollectionQuery($id: String!) {
//     markdownRemark(id: {eq: $id}) {
//       frontmatter {
//         caption
//         thumbnail
//         title
//       }
//       id
//     }
//   }
// `;

export default Collection;
