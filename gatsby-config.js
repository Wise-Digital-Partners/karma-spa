const {
   NODE_ENV,
   URL: NETLIFY_SITE_URL = "https://karma-spa.netlify.app/",
   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
   CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
   siteMetadata: {
      siteUrl,
      author: `WISE Digital Partners`,
   },
   plugins: [
      `gatsby-plugin-netlify`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-advanced-sitemap`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: "gatsby-plugin-robots-txt",
         options: {
            resolveEnv: () => NETLIFY_ENV,
            env: {
               production: {
                  policy: [{ userAgent: "*" }],
               },
               "branch-deploy": {
                  policy: [{ userAgent: "*", disallow: ["/"] }],
                  sitemap: null,
                  host: null,
               },
               "deploy-preview": {
                  policy: [{ userAgent: "*", disallow: ["/"] }],
                  sitemap: null,
                  host: null,
               },
            },
         },
      },
      {
         resolve: "gatsby-plugin-anchor-links",
         options: {
            offset: -100,
         },
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-relative-images`,
                  options: {
                     name: `uploads`,
                  },
               },
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 2048,
                  },
               },
               {
                  resolve: `gatsby-remark-copy-linked-files`,
                  options: {
                     destinationDir: `static`,
                  },
               },
            ],
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/static/images`,
            name: `uploads`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/images`,
            name: `images`,
         },
      },
      {
         resolve: `gatsby-plugin-styled-components`,
         options: {
            displayName: false,
         },
      },
      {
         resolve: `gatsby-plugin-sass`,
         options: {
            postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
         },
      },
      {
         resolve: `gatsby-plugin-emotion`,
         options: {
            // Accepts all options defined by `babel-plugin-emotion` plugin.
         },
      },
      {
         resolve: `gatsby-plugin-purgecss`,
         options: {
            tailwind: true,
            purgeOnly: ["node_modules/@fortawesome/fontawesome-pro/css/all.min.css"],
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `Karma Spa`,
            short_name: `Karma Spa`,
            start_url: `/`,
            background_color: `#F3AD51`,
            theme_color: `#F3AD51`,
            display: `standalone`,
            icon: `static/images/favicon.png`,
         },
      },
      {
         resolve: "gatsby-plugin-google-tagmanager",
         options: {
            id: "GTM-TMHN6D6",

            // Include GTM in development.
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,

            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            // Defaults to null
            // defaultDataLayer: { platform: "gatsby" },

            // Specify optional GTM environment details.
            // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            // dataLayerName: "YOUR_DATA_LAYER_NAME",
         },
      },
      `gatsby-plugin-offline`,
   ],
};
