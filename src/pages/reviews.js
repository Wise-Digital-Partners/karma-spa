import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
// import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroAlignEndCentered";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";
// import ButtonWithIcon from "../Button/ButtonWithIcon";

const Page = ({ data }) => {
     const heroImages = [
       data.heroDesktop.childImageSharp.fixed,
       {
         ...data.heroDesktop.childImageSharp.fixed,
         media: `(max-width: 767px)`,
       },
     ];

    //  const mapImages = [
    //    data.mapDesktop.childImageSharp.fluid,
    //    {
    //      ...data.mapMobile.childImageSharp.fluid,
    //      media: `(max-width: 767px)`,
    //    },
    //  ];
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Reviews | Karma Spa | San Diego & Carlsbad Massage"
        description="Discover authentic & insightful reviews on a wide range of services & experiences. Get valuable feedback to make informed decisions. Explore our reviews today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={heroImages}
        backgroundSizeDesktop="cover"
        backgroundSizeMobile="cover"
        backgroundPositionDesktop="50% 50%"
        backgroundPositionMobile="50% 50%"
        minHeightDesktop="560px"
        minHeightMobile="480px"
      >
        <h1>From Our Customers</h1>
    
      </Hero>

      <section className="pt-16 md:pt-24 pb-22 md:pb-16">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/carlsbad-massage-facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/carlsbad-massage-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "locations/carlsbad/reviewsHero.jpg" }
    ) {
      childImageSharp {
        fixed(width: 2880, height: 1200, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: { eq: "locations/carlsbad/carlsbad-hero-mobile.jpg" }
    ) {
      childImageSharp {
        fixed(width: 750, height: 960, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    intro: file(relativePath: { eq: "locations/carlsbad/intro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1096, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mapDesktop: file(
      relativePath: { eq: "locations/carlsbad/carlsbad-map-desktop.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mapMobile: file(
      relativePath: { eq: "locations/carlsbad/carlsbad-map-mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 732, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Page;
