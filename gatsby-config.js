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
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          defaultLayouts: {
            default: require.resolve("./src/components/Layout.js"),
          },
        },
      },

    // Add a collection called "posts" that looks
    // for files in content/posts/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/pages/blogs/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages/blogs/`,
      },
    },
    ]
  }