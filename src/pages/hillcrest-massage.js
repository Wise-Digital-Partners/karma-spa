import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import HeroAlignEndCentered from "../components/Hero/HeroAlignEndCentered";
import Services from "../components/Repeating/ServicesHillcrest";
import TestimonialBackgroundImage from "../components/Testimonial/TestimonialBackgroundImage";
import Packages from "../components/Repeating/Packages";
import BlogRecentPosts from "../components/Repeating/RecentBlogPosts";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 767px)`,
      },
   ];

   const mapImages = [
      data.mapDesktop.childImageSharp.fluid,
      {
         ...data.mapMobile.childImageSharp.fluid,
         media: `(max-width: 767px)`,
      },
   ];

   return (
      <Layout headerStyle="overlap" headerLinkColor="white" headerHasBorder={true}>
         <SearchEngineOptimization
            title="Hillcrest Massage Spa in San Diego | Karma Spa"
            description="Karma Spa is a top massage spa in Hillcrest. Experience affordable indulgence in the form of massage, skin care services, & more. Book today! "
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroAlignEndCentered
            backgroundImages={heroImages}
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            minHeightDesktop="560px"
            minHeightMobile="480px"
         >
            <h1>Hillcrest Massage</h1>
            <div className="block mt-5 lg:hidden">
               <ButtonSolid
                  href="https://login.meevo.com/KarmaRelaxSpa/ob?locationId=203929"
                  // target="_blank"
                  rel="noopener noreferrer"
                  text="Book Hillcrest"
               />
            </div>
         </HeroAlignEndCentered>

         <section className="lg:transform lg:-translate-y-12">
            <div className="container flex justify-center">
               <div className="bg-white lg:shadow-2xl inline-flex flex-wrap lg:flex-no-wrap pt-12 lg:pt-0 pb-8 lg:pb-0 border-b border-solid border-gray-200 border-opacity-25 w-full lg:w-auto">
                  <div className="lg:px-8 lg:py-6 flex items-center justify-center lg:justify-start text-center lg:text-left w-full lg:w-auto order-2 lg:order-1">
                     <i className="fal fa-map-marker-alt text-2xl lg:text-3xl text-black mr-3"></i>
                     <span className="text-large">
                        <a
                           className="text-black hover:text-primary_400 focus:text-primary_400 active:text-primary_400"
                           href="https://goo.gl/maps/PNpCbZkE87YRjwLAA"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           3969 1st Ave, San Diego, CA 92103
                        </a>
                     </span>
                  </div>
                  <div className="hidden lg:flex h-auto w-px bg-gray-200 bg-opacity-25 order-2"></div>
                  <div className="lg:px-8 lg:py-6 flex items-center justify-center lg:justify-start text-center lg:text-left w-full lg:w-auto order-1 lg:order-2 mb-6 lg:mb-0">
                     <i className="fal fa-phone-alt text-2xl lg:text-3xl text-black mr-3"></i>
                     <span className="text-large">
                        <a
                           className="gtm-phone-number text-black hover:text-primary_400 focus:text-primary_400 active:text-primary_400"
                           href="tel:+1-619-299-9888"
                        >
                           (619) 299-9888
                        </a>
                     </span>
                  </div>
                  <div className="hidden lg:flex h-auto w-px bg-gray-200 bg-opacity-25 order-4"></div>
                  <div className="hidden lg:flex px-8 py-6 order-5">
                     <ButtonSolid
                        href="https://login.meevo.com/KarmaRelaxSpa/ob?locationId=203929"
                        //target="_blank"
                        rel="noopener noreferrer"
                        text="Book Hillcrest"
                     />
                  </div>
               </div>
            </div>
         </section>

         <section className="wrapper mt-12 md:mt-20">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-0 items-center">
                  <div className="md:col-start-1 md:col-end-7 md:pr-12">
                     <h1>Best Hillcrest Massage Spa in San Diego</h1>
                     <p className="mb-0">
                     Welcome to Karma Spa, the relaxing paradise you’ve been dreaming of. From Thai and deep tissue to hot stone, prenatal, and everything in between, our well-versed massage therapists are here to melt away your stress. For ultimate relaxation, combine a rejuvenating massage with our assortment of <a className="text-gray-700" href="https://www.karmamassagespa.com/skin-care-hillcrest/">skin care services</a> and aesthetic treatments. When you’re ready for affordable indulgence in Hillcrest, we’ll be here.
                     </p>
                  </div>
                  <div className="md:col-end-13 md:col-span-6">
                     <Img fluid={data.intro.childImageSharp.fluid} alt="Best Hillcrest Massage Spa in San Diego" />
                  </div>
               </div>
            </div>
         </section>

         <section className="wrapper">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 items-center">
                  <div className="md:col-start-1 md:col-span-7">
                     <a href="https://goo.gl/maps/PNpCbZkE87YRjwLAA" target="_blank" rel="noopener noreferrer">
                        <Img fluid={mapImages} alt="Map of Hillcrest location" />
                     </a>
                  </div>
                  <div className="md:col-end-13 md:col-span-4">
                     <h2 className="heading-three">About Karma Spa Hillcrest</h2>
                     <p className="mb-0">
                        Our 4,000 sq ft facility features nine massage rooms, including dedicated rooms for couples massage. We also have a large,
                        open space for reflexology, a sauna and steam room, and a Vichy shower room. Most importantly, you’ll be rejuvenated in a
                        comfortable, relaxing environment with our skilled massage therapists.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <Services />

         <TestimonialBackgroundImage />

         <BlogRecentPosts />

         <Packages />

         <CTABackgroundImage />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/hillcrest-massage-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/hillcrest-massage-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "locations/san-diego/san-diego-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 2880, height: 1200, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "locations/san-diego/san-diego-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 750, height: 960, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      intro: file(relativePath: { eq: "locations/san-diego/intro.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1096, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      mapDesktop: file(relativePath: { eq: "locations/san-diego/san-diego-map-desktop.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      mapMobile: file(relativePath: { eq: "locations/san-diego/san-diego-map-mobile.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 732, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
