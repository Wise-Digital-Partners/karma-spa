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
                        <p className="text-medium text-white mb-0">$35/Annually</p>
                     </div>
                     <div className="bg-white px-6 md:px-8 pt-6 pb-8 md:py-12">
                        <ul className="styled-list space-y-3 pl-0 mb-8 text-small">
                           <li className="!items-baseline">Monthly specials on services and packages that only members can enjoy.</li>
                           <li className="!items-baseline">
                              <div>
                                 Points System--Spend $1, Get 1 point. <br />
                                 <span className="text-xs">700 points = FREE 60 Minute Body Massage</span>
                              </div>
                           </li>
                           <li className="!items-baseline">
                              <div>
                                 Points never expire. <br />
                                 <span className="text-xs">No breaking points in half.</span>
                              </div>
                           </li>
                        </ul>

                        <ButtonGhost as="button" data="modal-membership" className="w-full" text="Get Basic Membership" />
                     </div>
                  </div>
                  <div className="shadow-xl">
                     <div className="bg-gray-900 px-6 py-5 md:py-8 text-center">
                        <p className="heading-three text-white mb-2 md:mb-1">VIP Membership</p>
                        <p className="text-medium text-white mb-0">$60/Monthly</p>
                     </div>
                     <div className="bg-white px-6 md:px-8 pt-6 pb-8 md:py-12">
                        <div className="text-center mb-6">
                           <i>Receive (1) 60 Minute Body Massage</i> <br /> <span className="text-sm">Deep Tissue or Swedish</span>
                        </div>
                        <ul className="styled-list space-y-3 pl-0 mb-8 text-small">
                           <li className="!items-baseline">
                              <div>
                                 Any additional services redeemed in the same month; we will honor $10 off menu price.
                                 <br /> <span className="text-xs">Must pay cash.</span>
                              </div>
                           </li>
                           <li className="!items-baseline">Unused prepaid massages don’t expire. They roll over to the following month.</li>
                           <li className="!items-baseline">Monthly Specials on services/packages that only members can enjoy.</li>
                           <li className="!items-baseline">
                              <div>
                                 Points System--Spend $1, Get 1 point. <br />
                                 <span className="text-xs">700 points = FREE 60 Minute Body Massage</span>
                              </div>
                           </li>
                           <li className="!items-baseline">Points never expire.</li>
                           <li className="!items-baseline">
                              <div>
                                 No hassle cancelation or freezing options. <br />
                                 <span className="text-xs">
                                    Cancel any time before your scheduled ACH date. Any cancellation requests after scheduled ACH date that month, a
                                    refund will not be honored.
                                 </span>
                              </div>
                           </li>
                        </ul>

                        <p className="text-xsmall mb-2">* No refunds on unused prepaids.</p>
                        <p className="text-xsmall mb-2">* Membership benefits honored at location of purchase only.</p>
                        <p className="text-xsmall mb-8 md:mb-8">* No breaking points in half.</p>
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
