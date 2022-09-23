// Webpack Config
const path = require("path");
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve("src"), "node_modules"],
    },
  });
};

// Transform Remote Images to Image Sharp
const { createRemoteFileNode } = require("gatsby-source-filesystem");
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      id: String
      frontmatter: Frontmatter
      thumbnailImg: File @link(from: "fields.localFile")
    }

    type Frontmatter {
      title: String!
      slug: String
      caption: String
      thumbnail: String
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.thumbnail !== null
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.thumbnail,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
      console.log(node.frontmatter.title);
    }
  }
};
