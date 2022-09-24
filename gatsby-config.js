module.exports = {
  siteMetadata: {
    title: "This Christography",
    siteUrl: "https://thischristography.com",
    description:
      "This Christography is a photographer in Albuquerque, NM. Specializes in family portraits, graduate portraits, automotive, and landscapes.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-remote-images",
      options: {
        nodeType: "MarkdownRemark",
        imagePath: "frontmatter.images",
        type: "array",
        name: "collectionImages",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "asset",
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "collections",
        path: `${__dirname}/collections`,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 100,
          placeholder: "blurred"
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-136005418-1",
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    "gatsby-plugin-sitemap"
  ],
};
