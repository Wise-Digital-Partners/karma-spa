import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import HeroAlignEnd from "../components/Hero/HeroAlignEnd";
import Services from "../components/Repeating/Services";
import TestimonialBackgroundImage from "../components/Testimonial/TestimonialBackgroundImage";
import Packages from "../components/Repeating/Packages";
import BlogRecentPosts from "../components/Repeating/RecentBlogPosts";
import Divider from "../components/Divider/Divider";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 767px)`,
      },
   ];

   const introImages = [
      data.introDesktop.childImageSharp.fluid,
      {
         ...data.introMobile.childImageSharp.fluid,
         media: `(max-width: 767px)`,
      },
   ];

   return (
      <Layout headerStyle="overlap" headerLinkColor="white" headerHasBorder={true}>
         <SearchEngineOptimization
            title="Massage San Diego & Carlsbad | Karma Spa"
            description="Karma Spa is a top San Diego massage spa with Hillcrest & Carlsbad locations. Try our massage packages & skin care services. Enjoy affordable indulgence!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroAlignEnd
            backgroundImages={heroImages}
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            minHeightDesktop="740px"
            minHeightMobile="600px"
         >
            <div className="max-w-4xl m-auto text-center">
               <p className="text-white font-heading text-mobile7xl md:text-7xl leading-tight font-semibold mb-4">Affordable indulgence.</p>
               <p className="font-heading text-white font-display text-mobile3xl md:text-3xl leading-tight italic mb-12">
                  San Diego massage at its finest.
               </p>
               <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 max-w-sm mx-auto">
                  <ButtonSolid
                     className="is-light w-full md:w-auto"
                     href="https://go.booker.com/location/karmaspa/service-menu"
                     target="_blank"
                     rel="noopener noreferrer"
                     text="Hillcrest"
                  />
                  <ButtonSolid
                     className="is-light w-full md:w-auto"
                     href="https://go.booker.com/location/karmarelaxationspa2/service-menu"
                     target="_blank"
                     rel="noopener"
                     text="Carlsbad"
                  />
               </div>
            </div>
         </HeroAlignEnd>

         <section className="wrapper mt-12 md:mt-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-0">
                  <div className="md:col-start-1 md:col-end-7 md:pr-16">
                     <h1>Massage Spa in San Diego & Carlsbad</h1>
                     <p>
                        Ready to relax? See why Karma Spa is one of the best massage spas in San Diego. We offer over a dozen massage styles to suit
                        your tastes. But massage is just the beginning. Make the most of our day spas with quality skin care services and IV
                        hydration—or save money with a package that pampers you in style. Book your appointment at our Hillcrest or Carlsbad location
                        today!
                     </p>
                     <ButtonSolid as="button" data="modal-choose-location" text="Book Appointment" />
                  </div>
                  <div className="md:col-end-13 md:col-span-6">
                     <Img fluid={introImages} alt="Massage Spa in San Diego & Carlsbad" />
                  </div>
               </div>
            </div>
         </section>

         <Services />

         <TestimonialBackgroundImage />

         <Packages />

         <BlogRecentPosts />

         <Divider className="-mt-6 md:-mt-16 mb-16 md:mb-28" />

         <CTABackgroundImage />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/homepage-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/homepage-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "home/hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 2880, height: 1200, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "home/hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 414, height: 600, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      introDesktop: file(relativePath: { eq: "home/intro-desktop.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1179, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      introMobile: file(relativePath: { eq: "home/intro-mobile.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 760, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
