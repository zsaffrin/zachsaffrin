module.exports = {
  siteMetadata: {
    title: 'Zach Saffrin',
    description: 'Personal profile site for Zach Saffrin',
    author: 'Zach Saffrin <zach@zachsaffrin.com> (http://zachsaffrin.com)',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Zach Saffrin',
        short_name: 'ZachSaffrin',
        start_url: '/',
        background_color: '#2a3442',
        theme_color: '#2a3442',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['400', '700'],
          },
          {
            family: 'Raleway',
            variants: ['400', '700'],
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
