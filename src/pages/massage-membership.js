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
                  <div className="shadow-xl">
                     <div className="bg-gray-300 px-6 py-5 md:py-8 text-center">
                        <p className="heading-three text-white mb-2 md:mb-1">Basic Membership</p>
                        <p className="text-medium text-white mb-0">$35/year</p>
                     </div>
                     <div className="bg-white px-6 md:px-12 pt-6 pb-8 md:py-12">
                        <ul className="styled-list space-y-3 pl-0 mb-8 text-small">
                           <li className="!items-baseline">Paid once, annually (Example: July 7th, 2022-July 7th, 2023)</li>
                           <li className="!items-baseline">Monthly Specials on services/packages that only members can enjoy.</li>
                           <li className="!items-baseline">Points never expire.</li>
                           <li className="!items-baseline">
                              Points System--Spend $1, get 1 point. <br />
                              700 points = FREE 60 Minute Massage
                              <br />
                              1000 points = FREE 90 Minute Massage
                              <br />
                              14000 = FREE 2 Hour Massage
                           </li>
                        </ul>
                        <p className="text-xsmall mb-8 md:mb-4">
                           * No breaking points in half. If you have 350 points, you cannot redeem for 30 Minute Massage
                        </p>
                        <p className="text-xsmall mb-8 md:mb-16">
                           * The $35 annual fee doesn’t count towards points accumulated but gift card purchases do!
                        </p>
                        <ButtonGhost as="button" data="modal-membership" className="w-full" text="Get Basic Membership" />
                     </div>
                  </div>
                  <div className="shadow-xl">
                     <div className="bg-gray-900 px-6 py-5 md:py-8 text-center">
                        <p className="heading-three text-white mb-2 md:mb-1">VIP Membership</p>
                        <p className="text-medium text-white mb-0">$60/month</p>
                     </div>
                     <div className="bg-white px-6 md:px-12 pt-6 pb-8 md:py-12">
                        <ul className="styled-list space-y-3 pl-0 mb-8 text-small">
                           <li className="!items-baseline">Automatically pulls on the 15th of each month.</li>
                           <li className="!items-baseline">
                              Monthly fee of $60 = (1) 60 Minute Massage (Deep Tissue, Swedish, Hot Oil, Back & Shoulder. Basically any $70 Massage
                              can be redeemed with this monthly benefit.
                           </li>
                           <li className="!items-baseline">
                              Any additional services redeemed in the same month will be $10 OFF. We encourage clients at booking to pay cash with
                              your $10 discount.
                           </li>
                           <li className="!items-baseline">Unused prepaid massages don’t expire. They roll over to the following month.</li>
                           <li className="!items-baseline">Monthly Specials on services/packages that only members can enjoy.</li>
                           <li className="!items-baseline">
                              Points System--Spend $1, get 1 point. 700 points = FREE 60 Minute Massage 1000 points = FREE 90 Minute Massage 14000 =
                              FREE 2 Hour Massage
                           </li>
                        </ul>

                        <p className="text-xsmall mb-8 md:mb-4">
                           * No breaking points in half. If you have 350 points, you cannot redeem for 30 Minute Massage
                        </p>
                        <p className="text-xsmall mb-8 md:mb-4">
                           * Clients can cancel VIP membership at anytime BEFORE the scheduled ACH on the 15th. If the client calls on the 16th,
                           you’ve already been charged and WE WILL NOT REFUND.
                        </p>
                        <p className="text-xsmall mb-8 md:mb-16">
                           * $60 is automatically collected at sign up for that current month's ACH. New members can redeem that monthly benefit the
                           same day, if you would like. (Example: If client comes in on January 24th, 2022 and signs up for VIP membership, then you
                           are billed that same day for $60 and will be billed again on Feb. 15th, 2022 with all other VIP members, then again March
                           15th and so on.)
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
