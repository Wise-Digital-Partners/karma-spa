import React from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";
// import ButtonGhost from "../components/Button/ButtonGhost"
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

const Page = ({ data }) => {
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
            title="San Diego IV Hydration Therapy | Karma Spa"
            description="At Karma Spa, our San Diego IV hydration therapy delivers essential nutrients into your body. Browse our IV infusion & injection packages today!"
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
            <h1>Med Spa Services</h1>
            <p className="mb-2 md:mb-0">
               Karma Relaxation Spa partnered up with Active Lifestyle Aesthetics to bring med spa services back in our Hillcrest location. We now
               offer neurotoxins, microdermal needling, IV therapy, and wellness injections at competitive prices to make our services affordable for
               everyone.
            </p>
         </HeroSplit>

         <ScrollWrapper>
            <ScrollNavigation>
               <li>
                  <AnchorLink to={url + "#section-1"} title="Neurotoxins" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-2"} title="Microdermal Needling" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-3"} title="IV Hydration" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-4"} title="Wellness Injections" stripHash />
               </li>
            </ScrollNavigation>
            <ScrollContent>
               <div id="section-1" className="mb-20 lg:mb-40">
                  <h3 className="mb-1">Neurotoxins</h3>
                  <p>Neurotoxins are used to reduce and prevent wrinkles by temporarily relaxing the face muscles.</p>
                  <ul className="styled-list mb-8">
                     <li className="text-gray-600">Botox — $10/unit</li>
                     <li className="text-gray-600">Xeomin — $10/unit</li>
                     <li className="text-gray-600">Dysport — $3.33/unit</li>
                  </ul>
               </div>

               <div id="section-2">
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $250
                     </span>
                     <h3>Microdermal Needling</h3>
                     <p>
                        MDPen rapidly creates a pattern of micro channels in the treatment area that significantly increase the production of collagen
                        and elastin to leave the skin smoother, fresher, and more uniform.
                     </p>
                  </div>
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $300
                     </span>
                     <h3>Microdermal Needling with Growth Factor</h3>
                     <p>Growth factor enhances hydration and accelerates healing.</p>
                  </div>
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $199
                     </span>
                     <h3>Hydr8 Plus</h3>
                     <p>Replenish and rehydrate the body to improve overall health and energy.</p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Ascorbic Acid (Vitamin C)
                        <br />
                        Vitamin B Complex
                        <br />
                        Magnesium Cl, Zinc, Manganese, Copper, Selenium
                        <br />
                        500 ml of IV fluids
                     </p>
                  </div>
               </div>

               <div id="section-3">
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $150
                     </span>
                     <h3>Hangover</h3>
                     <p>Alleviate symptoms of hangover including dehydration, headache, and nausea.</p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Ketorolac (anti-inflammatory & analgesic)
                        <br />
                        Ondansetron (anti-nausea)
                        <br />
                        500 ml of IV fluids
                     </p>
                  </div>
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $100
                     </span>
                     <h3>Hydr8</h3>
                     <p>Recover from heat exhaustion, dehydration, and muscle fatigue. </p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Vitamin B Complex
                        <br />
                        500 ml of IV fluids
                     </p>
                  </div>
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $150
                     </span>
                     <h3>Hydr8 Plus</h3>
                     <p>Replenish and rehydrate the body to improve overall health and energy.</p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Ascorbic Acid (Vitamin C)
                        <br />
                        Vitamin B Complex
                        <br />
                        Magnesium Cl, Zinc, Manganese, Copper, Selenium
                        <br />
                        500 ml of IV fluids
                     </p>
                  </div>
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $150
                     </span>
                     <h3>Beauty</h3>
                     <p>Enhance beauty from within and improve hair, skin, and nails.</p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Ascorbic Acid (Vitamin C)
                        <br />
                        Vitamin B Complex
                        <br />
                        Biotin
                        <br />
                        500 ml of IV fluids
                     </p>
                  </div>
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $100
                     </span>
                     <h3>Simply C </h3>
                     <p>Infused with Vitamin C to boost the immune system.</p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Ascorbic Acid (Vitamin C)
                        <br />
                        500 ml of IV fluids
                     </p>
                  </div>
               </div>

               <div id="section-4">
                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $25
                     </span>
                     <h3>Lipo-Mino Mix</h3>
                     <p>
                        A weekly injection that starts with a special lipotropins fat burning combination of methionine, inositol, choline, carnitine,
                        B1, B2, B6 and B12. Each of these ingredients can help the body turn fat into energy.
                     </p>
                  </div>

                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $20
                     </span>
                     <h3>MICC Injection </h3>
                     <p>
                        A weekly injection specially formulated to help the body turn fat into energy. The nutrients are also powerful antioxidants.
                     </p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        Methionine: Helps break down sugars and carbohydrates and convert to energy.
                        <br />
                        Inositol: Converts food to energy.
                        <br />
                        Choline: Cuts muscle recovery time and helps convert fat to energy.
                        <br />
                        Cyanocobalamin B12: Improves energy and brain function.
                     </p>
                  </div>

                  <div className="mb-20 lg:mb-40">
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $20
                     </span>
                     <h3>Vitamin B12 Injection</h3>
                     <p>A monthly injection to improve energy and brain function.</p>
                  </div>

                  <div>
                     <span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8">
                        <i className="fas fa-tag text-primary_400 mr-2"></i> $20
                     </span>
                     <h3>Vitamin C Injection</h3>
                     <p>
                        This high concentration of ascorbic is the ultimate immune system enhancer designed to help maintain a healthy immune
                        response.
                     </p>
                     <p className="text-small font-medium tracking-wide text-gray-900">
                        *10% OFF First Time Clients*
                        <br />
                        *20% OFF All Healthcare Workers*
                     </p>
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/iv-treatments-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/iv-treatments-twitter.jpg" }) {
         publicURL
      }

      heroDesktop: file(relativePath: { eq: "services/iv-hydration/iv-hydration-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1358, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "services/iv-hydration/iv-hydration-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 828, height: 956, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
