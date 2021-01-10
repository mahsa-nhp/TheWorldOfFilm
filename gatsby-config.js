// configuratie van gatsby
module.exports = {
  siteMetadata: {
    // title hier aanpassen => SEO
    title: `The World Of Film`,
    // een description van ons project
    description: ``,
    author: `Mahsa Nasir Hajipour`,
  },
  // alle plugins definieren van gatsby
  plugins: [
    // voor SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // image optimalisation
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Gatsby Source GraphQL
      // Met de gatsby source graphQL plugin zullen we onze Headless WordPress GraphQL API integreren met het GraphQL schema van Gatsby.
      resolve: "gatsby-source-graphql",
      options: {
      typeName: "WPGraphql",
      fieldName: "wpcontent",
      url: "http://the-world-of-film.local/graphql", // de link naar de route van je website
      },
      },
      {
        // Gatsby Plugin Google Fonts
        resolve: `gatsby-plugin-google-fonts`,
        options: {      
        fonts: [`Roboto`, `Oswald`],      
        display: "swap",        
        },        
        },
        "gatsby-plugin-styled-components", //!!!

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
