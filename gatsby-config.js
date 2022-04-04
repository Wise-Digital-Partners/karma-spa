const {
   NODE_ENV,
   URL: NETLIFY_SITE_URL = "https://www.karmamassagespa.com/",
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
      `gatsby-plugin-emotion`,
      `gatsby-plugin-gatsby-cloud`,
      `gatsby-plugin-offline`,
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
            includeInDevelopment: false,
         },
      },
   ],
};
