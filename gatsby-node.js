// Webpack Config
const path = require("path");
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve("src"), "node_modules"],
    },
  });
};

// Transform remote image URLs (thumbnail + images[]) into local File nodes so
// they can be processed by gatsby-plugin-sharp / gatsby-plugin-image.
// (Replaces the unmaintained gatsby-plugin-remote-images, which is incompatible
// with Gatsby 5's module layout.)
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      id: String
      frontmatter: Frontmatter
      thumbnailImg: File @link(from: "fields.localFile")
      collectionImages: [File] @link(from: "fields.collectionImages")
    }

    type Frontmatter {
      title: String!
      slug: String
      caption: String
      thumbnail: String
      images: [String]
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (node.internal.type !== "MarkdownRemark") {
    return;
  }

  // Featured image -> single File node (queried as `thumbnailImg`).
  if (node.frontmatter.thumbnail != null) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.thumbnail,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  }

  // Gallery images -> array of File nodes (queried as `collectionImages`).
  if (Array.isArray(node.frontmatter.images)) {
    const fileNodes = await Promise.all(
      node.frontmatter.images.map((url) =>
        createRemoteFileNode({
          url,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          getCache,
        })
      )
    );

    createNodeField({
      node,
      name: "collectionImages",
      value: fileNodes.filter(Boolean).map((n) => n.id),
    });
  }
};
