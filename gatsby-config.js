module.exports = {
  siteMetadata: {
    title_en: 'TEAMX IT Solutions',
    title_ar: 'تيم اكس لحلول تكنولوجيا المعلومات',
    description: 'This is teamx website developed by gatsby',
    siteUrl: 'http://www.teamx.ae',
    author: 'Abdel Rahman Harahsheh',
    twitter: 'Abdelrahman_146',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/icon_32x32.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
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
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
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
        background_color: '#F5F8FB',
        theme_color: '#6E48AA',
        display: 'fullscreen',
        icons: [
          {
            src: '/img/icon_180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/img/icon_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand`,
          `Mada`,
          `source sans pro`, // you can also specify font weights and styles
        ],
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
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#6E48AA`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
}
