import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import HeroSplit from "../components/Hero/HeroSplit";
import TestimonialBackgroundImage from "../components/Testimonial/TestimonialBackgroundImage";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

export const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 767px)`,
      },
   ];

   return (
      <Layout headerStyle="classic" headerLinkColor="black" headerHasBorder={false}>
         <SearchEngineOptimization
            title="About Karma Spa | Massage Spa in San Diego & Carlsbad"
            description="Karma Spa offers you affordable indulgence in two San Diego locations: Hillcrest and Carlsbad. Learn more about our massage spas. Book today!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroSplit
            hasContainer={true}
            backgroundImageWrapperWidth="3/5"
            textWrapperWidth="2/5"
            backgroundImages={heroImages}
            backgroundImageSide="right"
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            minHeightDesktop="560px"
            minHeightMobile="320px"
         >
            <h1>About Us</h1>
            <p className="mb-0">
               Our mission is your relaxation. At Karma Spa, we offer “Affordable Indulgence” at our two massage spa locations in Hillcrest and
               Carlsbad. We offer a wide variety of services and packages to bring you great value and refreshment.
            </p>
         </HeroSplit>

         <section className="bg-gray-100 py-18 md:pt-32 md:pb-36">
            <div className="container">
               <header className="max-w-2xl mb-10 md:mb-16">
                  <h2>Your Hillcrest Massage Spa</h2>
                  <p>
                     Our 4,000 sq ft facility features nine massage rooms, including dedicated rooms for couples massage. We also have a large, open
                     space for reflexology, a sauna and steam room, and a Vichy shower room. Most importantly, you’ll be rejuvenated in a comfortable,
                     relaxing environment with our skilled massage therapists.
                  </p>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-12 mb-18 md:mb-32 shadow-xl">
                  <div className="md:col-start-1 md:col-span-7">
                     <div className="hidden md:block md:h-full">
                        <BackgroundImage className="h-full w-full" fluid={data.sanDiegoMapDesktop.childImageSharp.fluid} />
                     </div>
                     <div className="block md:hidden">
                        <Img fluid={data.sanDiegoMapMobile.childImageSharp.fluid} />
                     </div>
                  </div>
                  <div className="md:col-end-13 md:col-span-5 bg-white pt-6 pb-8 md:py-16 px-6 md:px-16 flex items-center">
                     <div>
                        <h3 className="mb-6 md:mb-10">Karma Spa Hillcrest</h3>

                        <div className="flex items-center mb-2">
                           <i className="far fa-phone-alt text-black text-2xl mr-3"></i>
                           <span className="font-heading text-2xlarge text-gray-900">Phone</span>
                        </div>
                        <p className="mb-4 md:mb-12">
                           Call:{" "}
                           <a class="gtm-phone-number" href="tel:+1-619-299-9888">
                              619-299-9888
                           </a>{" "}
                           <br /> Text:{" "}
                           <a class="gtm-phone-number" href="tel:+1-619-359-8841">
                              619-359-8841
                           </a>
                        </p>

                        <div className="flex items-center mb-2">
                           <i className="far fa-envelope text-black text-2xl mr-3"></i>
                           <span className="font-heading text-2xlarge text-gray-900">Email</span>
                        </div>
                        <p className="mb-8 md:mb-12">
                           <a href="mailto:relax@karmamassagespa.com">relax@karmamassagespa.com</a>
                        </p>

                        <ButtonSolid
                           href="https://go.booker.com/location/karmaspa/service-menu"
                           target="_blank"
                           rel="noopener noreferrer"
                           text="Book Online"
                        />
                     </div>
                  </div>
               </div>

               <header className="max-w-2xl mb-10 md:mb-16">
                  <h2>Your Carlsbad Massage Spa</h2>
                  <p>
                     Our 5,000 sq ft facility features 16 massage rooms, including dedicated rooms for couples massage. We also have a spacious
                     waiting area, both an infrared and traditional sauna, and two Vichy shower rooms. Above all, we bring you deep relaxation through
                     our skilled massage therapists and popular spa packages.
                  </p>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-12 shadow-xl">
                  <div className="md:col-start-1 md:col-span-7">
                     <div className="hidden md:block md:h-full">
                        <BackgroundImage className="h-full w-full" fluid={data.carlsbadMapDesktop.childImageSharp.fluid} />
                     </div>
                     <div className="block md:hidden">
                        <Img fluid={data.carlsbadMapMobile.childImageSharp.fluid} />
                     </div>
                  </div>
                  <div className="md:col-end-13 md:col-span-5 bg-white pt-6 pb-8 md:py-16 px-6 md:px-16 flex items-center">
                     <div>
                        <h3 className="mb-6 md:mb-10">Karma Spa Carlsbad</h3>

                        <div className="flex items-center mb-2">
                           <i className="far fa-phone-alt text-black text-2xl mr-3"></i>
                           <span className="font-heading text-2xlarge text-gray-900">Phone</span>
                        </div>
                        <p className="mb-4 md:mb-12">
                           Call:{" "}
                           <a class="gtm-phone-number" href="tel:+1-760-729-9888">
                              760-729-9888
                           </a>{" "}
                           <br /> Text:{" "}
                           <a class="gtm-phone-number" href="tel:+1-760-729-9889">
                              760-729-9889
                           </a>
                        </p>

                        <div className="flex items-center mb-2">
                           <i className="far fa-envelope text-black text-2xl mr-3"></i>
                           <span className="font-heading text-2xlarge text-gray-900">Email</span>
                        </div>
                        <p className="mb-8 md:mb-12">
                           <a href="mailto:carlsbad@karmamassagespa.com">carlsbad@karmamassagespa.com</a>
                        </p>

                        <ButtonSolid
                           href="https://go.booker.com/location/karmarelaxationspa2/service-menu"
                           target="_blank"
                           rel="noopener noreferrer"
                           text="Book Online"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <TestimonialBackgroundImage />

         <CTABackgroundImage />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/about-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/about-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "about/about-us-hero.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1120, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "about/about-us-hero.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1120, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      sanDiegoMapDesktop: file(relativePath: { eq: "about/san-diego-map-desktop.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      sanDiegoMapMobile: file(relativePath: { eq: "about/san-diego-map-mobile.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 732, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      carlsbadMapDesktop: file(relativePath: { eq: "about/carlsbad-map-desktop.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      carlsbadMapMobile: file(relativePath: { eq: "about/carlsbad-map-mobile.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 732, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
