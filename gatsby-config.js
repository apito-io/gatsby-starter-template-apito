module.exports = {
  siteMetadata: {
    title: `apito-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-apollo',
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: 'posts',
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: 'posts',
    //     // Url to query from
    //     url: 'https://api.apito.io/secured/graphql',
    //     headers: {
    //       Authorization: `Bearer 1t1vnGcYNCZ5e81r9Tfq8OOZswopkVSu1XJx25ziqhS5TWndu3GOVfUfY9rqYPDn7uIfecFXSGEDgiP89yppIZTICuy2yE4tufzEJMGRVKp7kbx4zJbQbnh9Gm5FLew1ISn4LEtGkZyBNZJtaO98eCf7sLMxwJk8EL`,
    //     },
    //   },
    // },
  ],
};
