import React from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";
// import ButtonGhost from "../components/Button/ButtonGhost"
import HillcrestCTAHero from "../components/CTA/CTAHillcrest";

const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 1023px)`,
      },
   ];

   const url = typeof window !== "undefined" ? window.location.pathname : "";

   return (
      <Layout>
         <SearchEngineOptimization
            title="San Diego IV Hydration Therapy | Karma Spa"
            description="At Karma Spa, our San Diego IV hydration therapy delivers essential nutrients into your body. Browse our IV infusion & injection packages today!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroSplit
            hasContainer={false}
            backgroundImageWrapperWidth="1/2"
            textWrapperWidth="1/2"
            backgroundImages={heroImages}
            backgroundImageSide="left"
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            minHeightDesktop="680px"
            minHeightMobile="480px"
         >
            <h1>Med Spa Services</h1>
            <p className="mb-2 md:mb-0">
               Karma Relaxation Spa partnered up with Active Lifestyle Aesthetics to bring med spa services back in our Hillcrest location.We now offer neurotoxins, microdermal needling, IV therapy, and wellness injections at competitive prices to make our services affordable for everyone.            </p>
         </HeroSplit>



         <HillcrestCTAHero />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/iv-treatments-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/iv-treatments-twitter.jpg" }) {
         publicURL
      }

      heroDesktop: file(relativePath: { eq: "services/iv-hydration/iv-hydration-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1358, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "services/iv-hydration/iv-hydration-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 828, height: 956, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
