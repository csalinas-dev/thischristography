module.exports = {
  siteMetadata: {
    title: "This Christography",
    siteUrl: "https://thischristography.com",
    description: "This Christography is a photographer in Albuquerque, NM. Specializes in family portraits, graduate portraits, automotive, and landscapes.",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "asset",
        path: "./static/assets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "collection",
        path: "./collection/",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
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
    }
  ],
};
