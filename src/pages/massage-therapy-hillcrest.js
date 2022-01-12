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
            title="Hillcrest Massage Therapy Services | Karma Spa"
            description="Ready for top massage services in San Diego? Karma Spa offers a wide variety of massages at its Hillcrest & Carlsbad locations. Book today!"
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
            <h1>Hillcrest Massage Therapy</h1>
            <p className="mb-2 md:mb-0">
               Relax. Reduce pain and stress. Improve circulation and flexibility. Prevent injury and facilitate healing. Massage has many benefits,
               and we have many options. Your next indulgence awaits with our Hillcrest massage therapy services.
            </p>
         </HeroSplit>

         <ScrollWrapper>
            <ScrollNavigation>
               <li>
                  <AnchorLink to={url + "#section-1"} title="Acupressure Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-2"} title="Back & Shoulder Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-3"} title="Chair/Body Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-4"} title="Hot Oil Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-5"} title="Tuina Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-6"} title="Ashiatsu Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-7"} title="Swedish Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-8"} title="Deep Tissue Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-9"} title="Sports Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-10"} title="Thai Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-11"} title="Hot Stone Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-12"} title="Prenatal Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-13"} title="Double Indulgence" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-14"} title="Aromatherapy Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-15"} title="Foot & Body Fusion" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-16"} title="CBD Body Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-17"} title="Add-Ons" stripHash />
               </li>
            </ScrollNavigation>
            <ScrollContent>
               <div id="section-1" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">01</span>
                  <h3>Acupressure Massage</h3>
                  <p>Similar to Trigger Point, focuses on knots and breaks them up. Deep Pressure.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-2" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">02</span>
                  <h3>Back & Shoulder Massage</h3>
                  <p>
                     Face down the entire time (No Turn over) Customer can also request standard full body with emphasis on Neck, Back & Shoulders.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-3" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">03</span>
                  <h3>Chair/Body Massage</h3>
                  <p>“Chair” means clothes on and is done in a foot massage room or performed in a chair.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $25 (15 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $45 (30 Minutes)
                  </p>
               </div>

               <div id="section-4" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">04</span>
                  <h3>Hot Oil Massage</h3>
                  <p>Doesn’t affect pressure, can be deep or light pressure. Hot oil is used in almost every massage modality we offer.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-5" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">05</span>
                  <h3>Tuina Massage</h3>
                  <p>No oil, No lotion. Great for clients with knots or clients who like deep pressure.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-6" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">06</span>
                  <h3>Ashiatsu Massage</h3>
                  <p>Traditional Chinese Massage, using the bars attached to ceiling, they walk on your back.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-7" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">07</span>
                  <h3>Swedish Massage</h3>
                  <p>Longer strokes, lighter pressure, more relaxing.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-8" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">08</span>
                  <h3>Deep Tissue Massage</h3>
                  <p>Deep pressure. Using elbows, thumbs or forearms. Customer may be sore for a few days after deep tissue.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $70 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $100 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $130 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $260 (2 Hours)
                  </p>
               </div>

               <div id="section-9" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">09</span>
                  <h3>Sports Massage</h3>
                  <p>This massage is perfect for athletes and those who train regularly.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $75 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $135 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $150 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $210 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $270 (2 Hours)
                  </p>
               </div>

               <div id="section-10" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">10</span>
                  <h3>Thai Massage</h3>
                  <p>
                     Yoga, but in massage form. Stretching techniques used to relax the whole body. Traditionally performed on the floor but we
                     perform on massage table at Karma Spa.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $75 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $135 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $150 (1 Hour)
                     <br className="block lg:hidden" />
                     <san className="hidden lg:inline lg:mx-1">•</san>
                     $210 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $270 (2 Hours)
                  </p>
               </div>

               <div id="section-11" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">11</span>
                  <h3>Hot Stone Massage</h3>
                  <p>
                     Starts off with a traditional massage (deep tissue or relaxing pressure) then they slowly incorporate the stones into the
                     massage. They use hot oil and stones to massage the full body. Recommended for clients who like to relax, not recommended for
                     clients who like deep pressure as the stones are just gliding across the skin for warmth and relaxation.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $85 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $115 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $145 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $170 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $230 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $290 (2 Hours)
                  </p>
               </div>

               <div id="section-12" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">12</span>
                  <h3>Prenatal Massage</h3>
                  <p>
                     We do not have belly tables here at Karma Spa. We offer side-lining, meaning the client will lay on their side for the back
                     massage. We offer a pregnancy pillow to support the belly for extra comfort.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $75 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                  </p>
               </div>

               <div id="section-13" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">13</span>
                  <h3>Double Indulgence</h3>
                  <p>2 Therapists, 4 Hands massaging the customer at once. *standard gratuity encouraged for all 4 reserved therapists* </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $140 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $200 (90 Minutes)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $280 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $400 (90 Minutes)
                  </p>
               </div>

               <div id="section-14" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">14</span>
                  <h3>Aromatherapy Massage</h3>
                  <p>
                     Any type of massage you would like. +$5 to add essential oil. Client will select scent at the front desk when they check in. We
                     do not touch the body with the essential oil. It will be burned in an oil burner on the floor under the face cradle.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $75 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $135 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $150 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $210 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $270 (2 Hours)
                  </p>
               </div>

               <div id="section-15" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">15</span>
                  <h3>Foot & Body Fusion</h3>
                  <p>Client keeps clothes on for this massage.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $80 (90 Minutes)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $160 (90 Minutes)
                  </p>
                  <p className="text-small">**Add Foot Scrub +$15</p>
               </div>

               <div id="section-16" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">16</span>
                  <h3>CBD Body Massage</h3>
                  <p>
                     CBD massage oil contains hemp which conditions the skin making it supple and soft. Not only does this help you feel better and
                     more relaxed during and after the massage, but it can also help with skin conditions such as eczema, acne, psoriasis or even just
                     dry skin.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $85 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $115 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $145 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $170 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $230 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $290 (2 Hours)
                  </p>
               </div>

               <div id="section-17" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">17</span>
                  <div className="mb-12 lg:mb-24">
                     <h3>Add-Ons</h3>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Prenatal Add-on +$5
                        <br className="block lg:hidden" />
                        <span className="hidden lg:inline lg:mx-1">•</span> Aromatherapy Add-on +$5
                        <br className="block lg:hidden" />
                        <span className="hidden lg:inline lg:mx-1">•</span> CBD Body Oil Add-on +$15
                        <br className="block lg:hidden" />
                        <span className="hidden lg:inline lg:mx-1">•</span> Hot Stone Add-on +$15
                        <br className="block lg:hidden" />
                        <span className="hidden lg:inline lg:mx-1">•</span> Foot Scrub +$15
                     </p>
                  </div>

                  <div className="mb-12 lg:mb-24">
                     <h3>Foot Massage</h3>
                     <ul className="styled-list mb-8">
                        <li>Add-on to any body massage: 30 Minute Foot Massage +$30 (No $5 off with cash)</li>
                        <li>Add-on to any body massage: 30 Minute Couple’s Foot Massage +$60 (No $5 off with cash)</li>
                        <li>A la carte: 30 Minute Foot Massage ($45)</li>
                        <li>A la carte: 30 Minute Couple’s Foot Massage ($90)</li>
                     </ul>
                  </div>

                  <div className="mb-12 lg:mb-24">
                     <h3>Sauna</h3>
                     <p>**No $5 off with cash**</p>
                     <ul className="styled-list mb-8">
                        <li>15 Minute Sauna Session ($15)</li>
                        <li>15 Minute Couple’s Sauna Session ($30)</li>
                        <li>30 Minute Sauna Session ($30)</li>
                        <li>30 Minute Couple’s Sauna Session ($60)</li>
                     </ul>
                  </div>

                  <div className="mb-12 lg:mb-24">
                     <h3>Ionic Body Detox</h3>
                     <ul className="styled-list mb-8">
                        <li>15 Minute Couple’s Ionic Body Detox ($30)</li>
                        <li>30 Minute Ionic Body Detox ($30)</li>
                        <li>30 Minute Couple’s Ionic Body Detox ($60)</li>
                     </ul>
                  </div>
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/massage-services-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/massage-services-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "services/massage/massage-services-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1358, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "services/massage/massage-services-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 828, height: 956, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
