module.exports = {
  siteMetadata: {
    title: "Azath House",
    author: `DeltaManiac`,
    description: `I am the House imprisoning in my birth demonic hearts, so locked in each chamber some trembling enraged antiquity.`,
    siteUrl: `https://azath.in/`,
    social: {
      twitter:`Delta_Maniac`,
      github: `DeltaManiac`,
      dev: `Delta_Maniac`
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/page`,
          name: `page`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
                className: 'anchor-link'
            }
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              titleFontSize: 96,
              background: require.resolve('./content/assets/base.png'),
              fontColor: '#ffffff', // defaults to white (#ffffff)
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Azath.in`,
        short_name: `Azath`,
        start_url: `/`,
        background_color: `#FFF4EC`,
        theme_color: `#007acc`,
        display: `standalone`,
        // edit below
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
