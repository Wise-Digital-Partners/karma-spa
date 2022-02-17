import React from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

export const Page = ({ data }) => {
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
            title="San Diego Massage Packages | Karma Spa"
            description="Karma Spa's San Diego massage packages bring you affordable indulgence. Get the relaxation you need at our Hillcrest or Carlsbad locations."
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
            <h1>San Diego Massage Packages</h1>
            <p className="mb-2 md:mb-0">
               Get the most out of your relaxation journey with our massage packages. Experience multiple benefits in a single indulgent session that
               will pamper you properly when you need it most. Our San Diego massage spa in Hillcrest is ready to deliver.
            </p>
         </HeroSplit>

         <ScrollWrapper>
            <ScrollNavigation>
               <li>
                  <AnchorLink to={url + "#section-1"} title="The President Package" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-2"} title="The Vice President Package" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-3"} title="The CEO Package" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-4"} title="The Premier Package" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-5"} title="The Royal Package" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-6"} title="The First Lady Package" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-7"} title="The Princess Package" stripHash />
               </li>
            </ScrollNavigation>
            <ScrollContent>
               <div id="section-1" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The President Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                     Experience the benefits of massage therapy and body detox in one session.
                  </p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$155
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                     <li className="text-gray-600">60 Minute Foot & Body Fusion (Clothes-on)</li>
                     <li className="text-gray-600">60 Minute Body Massage (Deep Tissue or Swedish)</li>
                     <li className="text-gray-600">Hot Towels</li>
                     <li className="text-gray-600">15 Minute Sauna Session</li>
                  </ul>
               </div>

               <div id="section-2" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The Vice President Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Ease your stress with a massage & sauna or steam session.</p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$95
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                     <li className="text-gray-600">60 Minute Body Massage (Deep Tissue or Swedish)</li>
                     <li className="text-gray-600">Hot Towels</li>
                     <li className="text-gray-600">15 Minute Sauna Session</li>
                  </ul>
               </div>

               <div id="section-3" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The CEO Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Make room in your busy schedule for some pampering.</p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$140
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                     <li className="text-gray-600">90 Minute Hot Stone Massage</li>
                     <li className="text-gray-600">Hot Towels</li>
                     <li className="text-gray-600">15 Minute Sauna Session</li>
                  </ul>
               </div>

               <div id="section-4" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The Premier Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                     Want a well-rounded massage experience? The Premier Package is for you.
                  </p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$170
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">60 Minute Body Massage (Deep Tissue or Swedish)</li>
                     <li className="text-gray-600">30 Minute Foot Massage Same room as body massage, 90 minute massage total</li>
                     <li className="text-gray-600">Hot Towels</li>
                     <li className="text-gray-600">Infra-Slim Body Wrap (50 Minutes, performed in same foot room as detox)</li>
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                  </ul>
               </div>

               <div id="section-5" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The Royal Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                     Feel like royalty with two therapists for maximum relaxation.
                  </p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$165
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                     <li className="text-gray-600">60 Minute Double Indulgence (2 Therapists, 4 Hands – Deep Tissue or Swedish)</li>
                     <li className="text-gray-600">Hot Towels</li>
                     <li className="text-gray-600">15 Minute Sauna Session</li>
                  </ul>
               </div>

               <div id="section-6" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The First Lady Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                     Get pampered from head to toe with two and a half hours of indulgence.
                  </p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$180
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                     <li className="text-gray-600">60 Minute Signature Facial</li>
                     <li className="text-gray-600">60 Minute Body Massage (Deep Tissue or Swedish)</li>
                     <li className="text-gray-600">15 Minute Sauna</li>
                  </ul>
               </div>

               <div id="section-7" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">The Princess Package</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                     Ladies, get the royal treatment with this luxurious 90-minute package.
                  </p>
                  <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-8">
                     <i class="fas fa-tag text-primary_400 mr-2"></i>$105
                  </span>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">60 Minute Signature Facial</li>
                     <li className="text-gray-600">15 Minute Ionic Body Detox</li>
                     <li className="text-gray-600">15 Minute Leg & Foot Massage</li>
                  </ul>
               </div>
            </ScrollContent>
         </ScrollWrapper>

         <CTABackgroundImage />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/packages-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/packages-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "services/special-packages/massage-packages-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1358, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "services/special-packages/massage-packages-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 828, height: 956, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
