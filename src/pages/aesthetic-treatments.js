import React from "react";
import { graphql } from 'gatsby';
// import Img from "gatsby-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
import Scroll from "../components/Scroll/Scroll"
// import ButtonGhost from "../components/Button/ButtonGhost"
import CTABackgroundImage from "../components/CTA/CTABackgroundImage"

export const Page = ({data}) => {

  const heroImages = [
    data.heroDesktop.childImageSharp.fixed,
    {
    ...data.heroMobile.childImageSharp.fixed,
    media: `(max-width: 1023px)`,
    },
  ]
 
  return (
    <Layout 
      headerStyle="overlap"
      headerLinkColor="black"
      headerHasBorder={false}
    >
      <SEO
        title=""
        description=""
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
        <h1>Massage Services</h1>
        <p>Relax. Reduce pain and stress. Improve circulation and flexibility. Prevent injury and facilitate healing. Massage has many benefits, and we have many options. Your next indulgence awaits.</p>
      </HeroSplit>

    <Scroll />

    <CTABackgroundImage />
      
    </Layout>
  );
}

export default Page;

export const query = graphql`
{ 
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/aesthetic-treatments-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/aesthetic-treatments-twitter.jpg"}) {
    publicURL
  }    
  heroDesktop: file(relativePath: {eq: "services/massage/massage-services-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1358, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  heroMobile: file(relativePath: {eq: "services/massage/massage-services-hero-mobile.jpg"}) {
    childImageSharp {
      fixed(width: 828, height: 956, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }     
}
`