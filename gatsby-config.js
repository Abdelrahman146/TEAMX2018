module.exports = {
  siteMetadata: {
    title_en: 'TEAMX IT Solutions',
    title_ar: 'تيم اكس لخدمات التكنولوجيا',
    description: 'This is teamx website developed by gatsby',
    siteUrl: 'http://www.teamx.ae',
    author: 'Abdel Rahman Harahsheh',
    twitter: 'Abdelrahman_146',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
      {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TEAMX IT Solutions',
        short_name: 'TEAMX',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        langKeyForNull: 'en',
      }
    },
  ],
}
