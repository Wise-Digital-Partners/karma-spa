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
            title="Carlsbad Skin Care Services | Karma Spa"
            description="Karma Spa offers San Diego skin care services at Hillcrest & Carlsbad locations. Book a facial, waxing session, scrubs, or sauna session today!"
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
            <h1>Carlsbad Skin Care Services</h1>
            <p className="mb-2 md:mb-0">
               Show yourself some extra love with our skin care services! Stress, free radicals, sun damage, and many other factors impact our skin.
               Find the right service in Carlsbad for your needs today, whether it’s a facial, waxing session, scrubs, or sauna session.
            </p>
         </HeroSplit>

         <ScrollWrapper>
            <ScrollNavigation>
               <li>
                  <AnchorLink to={url + "#section-1"} title="Signature Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-2"} title="O2 Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-3"} title="Oxygen Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-4"} title="Hydra-Dermabrasion Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-5"} title="Back Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-6"} title="Mini Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-8"} title="Gentleman’s Facial" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-9"} title="Waxing" stripHash />
               </li>
               <li>
                  <AnchorLink to={url + "#section-10"} title="Facial Add-ons" stripHash />
               </li>
            </ScrollNavigation>
            <ScrollContent>
               <div id="section-1" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">01</span>
                  <h3>Signature Facial</h3>
                  <p>
                     Our Signature Facial is customizable to all skin types. It promotes a clear, well-hydrated complexion utilizing all-natural Dr.
                     Schwab products.
                  </p>
                  <ul className="styled-list mb-8">
                     <li>Skin analysis</li>
                     <li>Cleanse</li>
                     <li>Exfoliation</li>
                     <li>Extractions </li>
                     <li>Facial Massage</li>
                     <li>Mask Treatment</li>
                     <li>Arm & Hand Massage</li>
                     <li>Sunscreen</li>
                     <li>Toner & Moisturizer</li>
                     <li>Lip & Eye Treatment</li>
                  </ul>
                  <p>*Steam & hot towels are used throughout entire treatment</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $85 (60 Minutes)</p>
               </div>

               <div id="section-2" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">02</span>
                  <h3>O2 Facial</h3>
                  <p>Rejuvenate skin with oxygen infusion, plant-derived stem cells, peptides, and a high concentration of enzymatic botanicals.</p>
                  <p className="mb-3">Signature Facial that incorporates</p>
                  <ul className="styled-list mb-8">
                     <li>Image O2 Facial Products</li>
                     <li>Exfoliation</li>
                     <li>Mask treatment </li>
                  </ul>
                  <p>*Steam & hot towels are used throughout entire treatment.</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $95 (60 Minutes)</p>
               </div>

               <div id="section-3" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">03</span>
                  <h3>Oxygen Facial</h3>
                  <p>
                     Experience deep exfoliation without the downtime of a chemical peel! This exfoliating facial is{" "}
                     <b>not recommended for sensitive skin</b>. Choose between NeoBright for a lighting treatment for hyper-pigmentation or NewRevive
                     for rejuvenating treatment for fine lines and wrinkles.
                  </p>
                  <p className="mb-3">Includes:</p>
                  <ul className="styled-list mb-8">
                     <li>Cleanse</li>
                     <li>Exfoliate with Sodium Bicarbonate Tip</li>
                     <li>Ultrasound for deeper product penetrations</li>
                     <li>Massage</li>
                     <li>Moisturize</li>
                  </ul>
                  <p>*Steam & hot towels are used throughout entire treatment</p>

                  <p className="text-small font-medium tracking-wide text-gray-900">
                     <b>NeoBright active ingredients</b>
                     <br />
                     Azelaic Acid: Evens out skin tone • Kojic Acid: Brightens • Retinol: Anti-aging
                  </p>

                  <p className="text-small font-medium tracking-wide text-gray-900">
                     <b>NeoRevive active ingredients</b>
                     <br />
                     Hyaluronic acid: Wrinkle reducer • Peptides: Skin repair • Retinol: Anti-aging
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $110 (60 Minutes)</p>
               </div>

               <div id="section-4" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">04</span>
                  <h3>Hydra-Dermabrasion Facial</h3>
                  <p>
                     Get clearer skin through hydra-dermabrasion, which combines cleansing, exfoliation, extraction, hydration and antioxidant
                     protection all at once. This treatment is soothing, moisturizing, non-invasive and non-irritating.
                  </p>
                  <p className="mb-3">Includes:</p>
                  <ul className="styled-list mb-8">
                     <li>Cleanse</li>
                     <li>Exfoliation</li>
                     <li>Extraction</li>
                     <li>Hydration and Antioxidant Protection</li>
                  </ul>
                  <p>*Steam & hot towels are used throughout entire treatment</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $130 (60 Minutes)</p>
               </div>

               <div id="section-5" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">05</span>
                  <h3>Back Facial</h3>
                  <p>
                     We’ve got your back! Benefit from our 30-minute signature back facial that utilizes all-natural Dr. Schwab Products. Benefits
                     include getting rid of back acne, reducing oiliness, and softening the skin and an overall soothing experience. Consider adding
                     on our Mini Facial to experience 60 minutes of relaxation.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $70 (30 Minutes)</p>
               </div>

               <div id="section-6" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">06</span>
                  <h3>Mini Facial</h3>
                  <p>
                     A mini facial treatment is an abbreviated version of our signature facial treatment. Typically provided in 30 minutes, it’s short
                     enough to complete during a lunch break but long enough to feel luxurious.
                  </p>
                  <p className="mb-3">Includes:</p>
                  <ul className="styled-list mb-8">
                     <li>Skin analysis</li>
                     <li>Cleanse</li>
                     <li>Exfoliation</li>
                     <li>Facial Massage</li>
                     <li>Mask Treatment</li>
                     <li>Sunscreen</li>
                     <li>Toner & Moisturizer</li>
                     <li>Lip & Eye Treatment</li>
                  </ul>
                  <p>*Steam & hot towels are used throughout entire treatment</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $55 (30 Minutes)</p>
               </div>

               <div id="section-8" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">08</span>
                  <h3>Gentleman’s Facial </h3>
                  <p>
                     Men need pampering too! This relaxing treatment helps repair the damage caused by daily shaving, skin sensitivity, dullness, and
                     aging.
                  </p>
                  <p className="mb-3">Includes:</p>
                  <ul className="styled-list mb-8">
                     <li>Skin analysis</li>
                     <li>Cleanse</li>
                     <li>Exfoliation</li>
                     <li>Extractions </li>
                     <li>Facial Massage</li>
                     <li>Mask Treatment</li>
                     <li>Arm & Hand Massage</li>
                     <li>Sunscreen</li>
                     <li>Toner & Moisturizer</li>
                     <li>Lip & Eye Treatment</li>
                  </ul>
                  <p>*Steam & hot towels are used throughout entire treatment</p>
                  <p className="text-small font-medium tracking-wide text-gray-900">Price: $85 (60 Minutes)</p>
               </div>

               <div id="section-9" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">09</span>
                  <h3>Waxing</h3>
                  <p>Remove unwanted hair and enjoy smooth skin with our waxing services. </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     Brow: $15
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Nose: $10
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Upper Lip: $15
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Full Face: $50
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Underarm: $25
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Half Arm: $30
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Full Arm: $45
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Half Leg: $55
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Full Leg: $75
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Chest: $40
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Full Back: $75
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Lower Back: $35
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Stomach: $40
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Brazilian Wax: $60 (Includes back strip; trimming: add $10)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Bikini Line: $40
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Bikini Front: $50
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     Full Body: by consultation only
                  </p>
               </div>

               <div id="section-10">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">10</span>
                  <div className="mb-20 lg:mb-40">
                     <h3>Pumpkin Peel Mask</h3>
                     <p>
                        This add-on helps drive highly refined extracted ingredients that have been added to (h2t) Pumpkin Peel (anti-oxidants,
                        vitamins & nutrients) into the skin. *No $5 off when paying cash*
                     </p>
                     <p className="mb-3">Benefits:</p>
                     <ul className="styled-list mb-8">
                        <li>Exfoliates surface cells</li>
                        <li>Helps destroy surface area bacteria </li>
                        <li>Binds moisture to the skin</li>
                        <li>Softens the appearance of fine lines and wrinkles</li>
                        <li>Improves texture & pliability of the corneum layer</li>
                     </ul>
                     <p className="text-small font-medium tracking-wide text-gray-900">Price: $20</p>
                  </div>

                  <div className="mb-20 lg:mb-40">
                     <h3>High Frequency</h3>
                     <p>
                        Treat and prevent stubborn acne, shrink enlarged pores, reduce inflammation, and decongest puffy eyes. The primary action of
                        high-frequency current is thermal (heat producing) and oxygen. Add to any facial. *No $5 off when paying cash*
                     </p>
                     <p className="mb-3">Benefits:</p>
                     <ul className="styled-list mb-8">
                        <li>Assists in killing stubborn acne bacteria under the skin</li>
                        <li>Relieves cystic acne</li>
                        <li>Reduces the severity and duration of breakouts</li>
                        <li>Shrinks enlarged pores</li>
                        <li>Reduces inflammation</li>
                     </ul>
                     <p className="text-small font-medium tracking-wide text-gray-900">Price: $15</p>
                  </div>

                  <div className="mb-20 lg:mb-40">
                     <h3>Anti Aging Serum with Hyaluronic Acid </h3>
                     <p>
                        MATRIXYL 3000 + ARGIRELINE Peptide Serum + Organic Hyaluronic Acid, Wrinkle Aging Fighting, Powerful Line Remover and Collagen
                        Booster. Liquid Face Lift in a Bottle.
                     </p>
                     <p>
                        Our potent serum signals your skin to increase collagen production for firmer, more youthful looking skin. It also creates
                        smoother and tighter skin with our powerful argireline peptide, also known as the natural botox. No oils, fragrances, parabens
                        or sulfates. All natural and serums are never tested on animals.
                     </p>
                     <p className="mb-3">Benefits:</p>
                     <ul className="styled-list mb-8">
                        <li>Increases collagen production with our potent Matrixyl 3000, leaving skin more firm and youthful looking</li>
                        <li>Creates smoother, tighter skin with our powerful argireline peptide, also known as the natural botox</li>
                        <li>Reduces fine lines and wrinkles for a smoother, more vibrant appearance</li>
                        <li>Enhances skin elasticity</li>
                        <li>Evens skin tone for a brighter, more radiant complexion</li>
                        <li>Improves skin texture by reducing skin problems due to age</li>
                        <li>Deeply moisturizes to hydrate dry, dull skin</li>
                     </ul>
                     <p className="text-small font-medium tracking-wide text-gray-900">Price: $10</p>
                  </div>

                  <div>
                     <h3>Add on Microdermabrasion</h3>
                     <p>Performed within the 60-minute Facial. No extra time is added! *No $5 off when paying cash*</p>
                     <p className="mb-3">Benefits:</p>
                     <ul className="styled-list mb-8">
                        <li>Fresher-looking skin</li>
                        <li>Diminished wrinkles</li>
                        <li>Minimized fine lines</li>
                        <li>Smoother skin</li>
                        <li>Brighter skin tone</li>
                        <li>Better skin color</li>
                        <li>Shrunken pores</li>
                        <li>Reduced age spots</li>
                     </ul>
                     <p className="text-small font-medium tracking-wide text-gray-900">Price: $15</p>
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/skin-care-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/skin-care-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "services/skin-care/Skin Care.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1358, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "services/skin-care/Skin Care.jpg" }) {
         childImageSharp {
            fixed(width: 828, height: 956, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
