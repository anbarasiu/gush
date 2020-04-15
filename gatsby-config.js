module.exports = {
  siteMetadata: {
    title: 'GUSH - Lets the words flow',
    author: 'Anbarasi U',
    description: "Let's get the creative juices flowing",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: '', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
};
