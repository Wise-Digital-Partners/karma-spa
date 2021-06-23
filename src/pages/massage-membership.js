import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import ButtonGhost from "../components/Button/ButtonGhost";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";
import ModalMembership from "../components/Modal/ModalMembership";

export const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 767px)`,
      },
   ];

   return (
      <Layout headerLinkColor="black">
         <SearchEngineOptimization
            title="Massage Memberships in San Diego | Karma Spa"
            description="Karma Spa membership offers multiple benefits. We offer two membership plans to bring you free massages and monthly specials for members only."
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
            <h1>Massage Membership</h1>
            <p className="mb-0">
               Are you a Karma Spa regular, or do you want to be one? We offer two membership plans to bring you free massages and monthly specials
               for members only.
            </p>
         </HeroSplit>

         <section className="bg-gray-100 py-18 md:py-36">
            <div className="container">
               <header className="text-center mb-10 md:mb-20">
                  <h2>Memberships</h2>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-20 max-w-4xl mx-auto items-start">
                  <div className="shadow-xl text-center">
                     <div className="bg-gray-300 px-6 py-5 md:py-8">
                        <p className="heading-three text-white mb-2 md:mb-1">Basic Membership</p>
                        <p className="text-medium text-white mb-0">$35/year</p>
                     </div>
                     <div className="bg-white px-6 md:px-12 pt-6 pb-8 md:py-12">
                        <p className="font-heading text-2xlarge text-gray-900 mb-1 md:mb-3">Monthly Specials</p>
                        <p className="mb-6 md:mb-8">We offer a special rate on services that only members can enjoy.</p>
                        <p className="font-heading text-2xlarge text-gray-900 mb-1 md:mb-3">Points System</p>
                        <p className="mb-6 md:mb-8">Spend $1, get 1 point. 600 points gets you a free 60 min massage!*</p>
                        <p className="italic text-small mb-8 md:mb-16">
                           * The annual fee doesn’t count towards points accumulated—but gift cards do!
                        </p>
                        <ButtonGhost as="button" data="modal-membership" className="w-full" text="Get Basic Membership" />
                     </div>
                  </div>
                  <div className="shadow-xl text-center">
                     <div className="bg-gray-900 px-6 py-5 md:py-8">
                        <p className="heading-three text-white mb-2 md:mb-1">VIP Membership</p>
                        <p className="text-medium text-white mb-0">$55/year</p>
                     </div>
                     <div className="bg-white px-6 md:px-12 pt-6 pb-8 md:py-12">
                        <p className="font-heading text-2xlarge text-gray-900 mb-1 md:mb-3">Free Massage</p>
                        <p className="mb-6 md:mb-8">Get a free basic body massage 1x/month. Unused massages rollover. </p>
                        <p className="font-heading text-2xlarge text-gray-900 mb-1 md:mb-3">Monthly Specials</p>
                        <p className="mb-6 md:mb-8">We offer a special rate on services that only members can enjoy.</p>
                        <p className="font-heading text-2xlarge text-gray-900 mb-1 md:mb-3">Points System</p>
                        <p className="mb-6 md:mb-8">Spend $1, get 1 point. 600 points gets you a free 60 min massage!*</p>
                        <p className="italic text-small mb-8 md:mb-16">
                           * The monthly fee doesn’t count towards points accumulated—but gift cards do!
                        </p>
                        <ButtonGhost as="button" data="modal-membership" className="w-full" text="Get VIP Membership" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <CTABackgroundImage backgroundImageAlternative={true} />

         <ModalMembership />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/memberships-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/memberships-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "about/memberships/memberships-hero.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1120, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "about/memberships/memberships-hero.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1120, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
