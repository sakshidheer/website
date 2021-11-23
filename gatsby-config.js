module.exports = {
    plugins: [
      `gatsby-plugin-provide-react`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-plugin-google-fonts',
        options: {
          fonts: [
            'material icons',
            'roboto:300,400,500,700',
          ],
        },
      },
    ]
  }