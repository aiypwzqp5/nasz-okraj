module.exports = {
  pathPrefix: `nasz-okraj`,
  siteMetadata: {
    title: "projekt",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@react-icons/all-files`,
  ],
};
