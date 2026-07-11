module.exports = {
  siteMetadata: {
    title: "This Christography",
    siteUrl: "https://thischristography.com",
    description:
      "This Christography is a photographer in Albuquerque, NM. Specializes in family portraits, graduate portraits, automotive, and landscapes.",
  },
  plugins: [
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
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
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
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap"
  ],
};
