import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroAlignEndCentered from "../components/Hero/HeroAlignEndCentered";
import ButtonSolid from "../components/Button/ButtonSolid";
import ModalFrontDeskReceptionist from "../components/Modal/ModalFrontDeskReceptionist";

const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 767px)`,
      },
   ];

   return (
      <Layout headerStyle="overlap" headerLinkColor="white" headerHasBorder={true}>
         <SearchEngineOptimization
            title="Join Our Team | Karma Spa | San Diego Massage"
            description="Join our Karma Spa team and see why we're one of the best massage spas in San Diego County. We have two locations: Hillcrest and Carlsbad."
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
            <h1>Karma Spa Careers</h1>
         </HeroAlignEndCentered>

         <section className="wrapper mt-12 md:mt-32">
            <div className="container">
               <header className="text-center mb-16 md:mb-24">
                  <h2>What Does It Mean to Work Here?</h2>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-0 md:gap-x-24 text-center">
                  <div className="md:col-start-1 md:col-span-6">
                     <img className="mb-8 mx-auto" src={data.relaxation.publicURL} alt="Relaxation in Mind" width="95" />
                     <h3>Relaxation in Mind</h3>
                     <p className="mb-0">
                        Our employees deserve the best care. When you start your career here, you get the opportunity to experience complimentary
                        massages from our esteemed expert therapists.
                     </p>
                  </div>
                  <div className="md:col-end-13 md:col-span-6">
                     <img className="mb-8 mx-auto" src={data.satisfaction.publicURL} alt="Superb Satisfaction" width="98" />
                     <h3>Superb Satisfaction</h3>
                     <p className="mb-0">
                        Want to make someone’s day? Tired of typical customer service jobs? Here, every customer you help is guaranteed total
                        relaxation and peace of mind. Be part of their healing process.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-100 py-20 md:pt-32 md:pb-36">
            <div className="container">
               <header className="text-center mb-12 md:mb-20">
                  <h2>Open Career Opportunities</h2>
               </header>
               <div className="lg:table w-full mb-10 md:mb-32">
                  <div className="lg:table-row-group">
                     <div className="lg:table-row bg-white bg-opacity-75 shadow-lg rounded px-6 py-5">
                        <div className="text-gray-900 lg:table-cell lg:px-4 lg:py-3 mb-7 lg:mb-0 lg:align-middle">
                           <span className="block text-xs text-gray-600 text-opacity-50 uppercase font-medium mb-1">Job Title</span> Front Desk
                           Receptionist
                        </div>
                        <div className="text-gray-900 lg:table-cell lg:px-4 lg:py-3 mb-7 lg:mb-0 lg:align-middle">
                           <span className="block text-xs text-gray-600 text-opacity-50 uppercase font-medium mb-1">Job Type</span> Part-Time | Full
                           Time
                        </div>
                        <div className="text-gray-900 lg:table-cell lg:px-4 lg:py-3 mb-7 lg:mb-0 lg:align-middle">
                           <span className="block text-xs text-gray-600 text-opacity-50 uppercase font-medium mb-1">Location</span> Hillcrest |
                           Carlsbad
                        </div>
                        <div className="text-gray-900 lg:table-cell lg:px-4 lg:py-3 mb-7 lg:mb-0 lg:align-middle">
                           <span className="block text-xs text-gray-600 text-opacity-50 uppercase font-medium mb-1">Date</span> Jul 7
                        </div>
                        <div className="lg:table-cell lg:px-4 lg:py-3 lg:text-right lg:align-middle">
                           <ButtonSolid as="button" data="modal-front-desk-receptionist" className="w-full lg:w-auto" text="View Description" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-white bg-opacity-50 text-center py-12 md:py-20 px-6">
                  <header className="max-w-lg mx-auto">
                     <h3 className="heading-two mb-8">Apply Today</h3>
                     <p className="mb-0">
                        Interested in working with us? Send your resume to{" "}
                        <a className="text-gray-900 hover:text-primary_400 font-bold underline" href="mailto:hiring@karmaspa.com">
                           hiring@karmaspa.com
                        </a>
                        .<br className="md:hidden" /> We look forward to hearing from you!
                     </p>
                  </header>
               </div>
            </div>
         </section>

         <ModalFrontDeskReceptionist />
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
      heroDesktop: file(relativePath: { eq: "about/careers/careers-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 2880, height: 1200, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "about/careers/careers-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 750, height: 960, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      relaxation: file(relativePath: { eq: "about/careers/relaxation-in-mind.svg" }) {
         publicURL
      }
      satisfaction: file(relativePath: { eq: "about/careers/superb-satisfaction.svg" }) {
         publicURL
      }
   }
`;
