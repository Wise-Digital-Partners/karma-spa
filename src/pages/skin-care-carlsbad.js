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
          Show yourself some extra love with our skin care services! Stress, free radicals, sun
          damage, and many other factors impact our skin. Find the right service in Carlsbad for
          your needs today, whether it’s a facial, waxing session, scrubs, or sauna session.
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
            <AnchorLink to={url + "#section-4"} title="HydraFacial" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-5"} title="Back Facial" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-6"} title="Mini Facial" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-7"} title="Gentleman’s Facial" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-8"} title="Dermaplane Facial" stripHash />
          </li>
        </ScrollNavigation>
        <ScrollContent>
          <div id="section-1" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              01
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Signature Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Our Signature Facial is customizable to all skin types. It promotes a clear,
                well-hydrated complexion utilizing all-natural Dr. Schwab products.
              </p>{" "}
              <ul className="mb-10">
                <li>Includes:</li>
                <li>-Skin analysis</li>
                <li>-Cleanse</li>
                <li>-Exfoliation</li>
                <li>-Extractions</li>
                <li>-Facial Massage</li>
                <li>-Mask Treatment</li>
                <li>-Arm & Hand Massage</li>
                <li>-Sunscreen</li>
                <li>-Toner & Moisturizer</li>
                <li>-Lip & Eye Treatment</li>
                <li></li>
                <li>*Steam & hot towels are used throughout entire treatment</li>
              </ul>
              <p className="font-semibold text-sm text-gray-800">$90 (60 Minutes)</p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
            {/* SECTION ADDONS  */}
            <div className="text-center mt-20">
              <h2>Signature Facial Add-ons</h2>
            </div>
            <div className="mt-20">
              <div className="mb-20">
                {" "}
                <h3>Dermaplaning</h3>
                <p className="font-semibold text-sm text-gray-800">
                  +$65 card/$60 cash (Add additional 20-30 Minutes to 60 Minute Signature Facial)
                </p>
              </div>
              {/* service sub section */}
              <div className="mb-20">
                {" "}
                <h3>Microdermabrasion</h3>
                <p>Exfoliating!</p>
                <p>
                  Performed within the 60-minute Facial. No extra time is added!  Can be added to a
                  30-minute Mini Facial, but client should be informed the cleanse + mask treatment
                  will be drastically shortened!
                </p>
                <ul className="mb-10">
                  <li className="mb-1.5">Benefits:</li>
                  <li className="mb-1.5">-Fresher looking skin</li>
                  <li className="mb-1.5">-Diminishes wrinkles</li>
                  <li className="mb-1.5">-Minimizes fine lines</li>
                  <li className="mb-1.5">-Smoother skin</li>
                  <li className="mb-1.5">-Brighter skin tone</li>
                  <li className="mb-1.5">-Better skin color</li>
                  <li className="mb-1.5">-Shrunken pores</li>
                  <li className="mb-1.5">-Reduced age spots</li>
                </ul>
                <p className="font-semibold text-sm text-gray-800">
                  +$20 Cash or Card (NO $5 OFF WITH CASH as it’s an add-on)
                </p>
              </div>
              {/* END SERBICE SUB SECTION */}
              {/* service sub section */}
              <div className="mb-20">
                {" "}
                <h3>Pumpkin Peel Enzyme Mask</h3>
                <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                  This add-on helps drive highly refined extracted ingredients that have been added
                  to (h2t) Pumpkin Peel (anti-oxidants, vitamins & nutrients) into the skin. Not for
                  sensitive skin.
                </p>{" "}
                <ul className="mb-10">
                  <li className="mb-1.5">Benefits:</li>
                  <li className="mb-1.5">-Exfoliates surface cells</li>
                  <li className="mb-1.5">-Helps destroy surface area bacteria</li>
                  <li className="mb-1.5">-Binds moisture into the skin</li>
                  <li className="mb-1.5">-Softens the appearance of fine lines and wrinkles</li>
                  <li className="mb-1.5">-Improves texture & pliability of the corneum layer</li>
                  <li className="mb-1.5">
                    -Helps drive highly refined extracted ingredients that have been added to (h2t)
                    Pumpkin Peel (anti-oxidants, vitamins & nutrients) into the skin
                  </li>
                </ul>
                <p className="font-semibold text-sm text-gray-800">
                  +$20 Cash or Card (NO $5 OFF WITH CASH as it’s an add-on)
                </p>
              </div>
              {/* END SERBICE SUB SECTION */}
              {/* service sub section */}
              <div className="mb-20">
                {" "}
                <h3>High Frequency</h3>
                <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                  For Stubborn acne!
                </p>{" "}
                <ul className="mb-10">
                  <li className="mb-1.5">Benefits:</li>
                  <li className="mb-1.5">
                    -Assists in killing acne causing bacteria under the skin
                  </li>
                  <li className="mb-1.5">-Relieves cystic acne</li>
                  <li className="mb-1.5">-Reduces the severity and duration of breakouts</li>
                  <li className="mb-1.5">-Shrinks enlarged pores</li>
                  <li className="mb-1.5">-Reduces inflammation</li>
                </ul>
                <p className="font-semibold text-sm text-gray-800">
                  +$15 Cash or Card (NO $5 OFF WITH CASH as it’s an add-on)
                </p>
              </div>
              {/* END SERBICE SUB SECTION */}
              {/* service sub section */}
              <div className="mb-20">
                {" "}
                <h3>Extractions</h3>
                <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                  Using an extraction tool that creates pressure in the area of the clogged pore!
                </p>{" "}
                <ul className="mb-10">
                  <li className="mb-1.5">Benefits:</li>
                  <li className="mb-1.5">
                    -Remove blackheads and whiteheads, oil, dead skin cells
                  </li>
                  <li className="mb-1.5">-Prevents future breakouts</li>
                  <li className="mb-1.5">-Improves product absorption</li>
                  <li className="mb-1.5">-Clearer and more even complexion</li>
                </ul>
                <p className="font-semibold text-sm text-gray-800">
                  FREE-Included only within the Signature Facial (No Mini Facial)
                </p>
              </div>
              {/* END SERBICE SUB SECTION */}
              {/* service sub section */}
              <div className="mb-20">
                {" "}
                <h3>Anti-Aging Hyaluronic Serum</h3>
                <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                  Powerful Line Remover and Collagen Booster. Liquid Face Lift in a Bottle. Our
                  potent serum signals your skin to increase collagen production for firmer, more
                  youthful looking skin. It also creates smoother and tighter skin with our powerful
                  argireline peptide, also known as the natural Botox. No oils, fragrances, parabens
                  or sulfates. All natural and serums are never tested on animals.
                </p>{" "}
                <ul className="mb-10">
                  <li className="mb-1.5">Benefits:</li>
                  <li className="mb-1.5">-“Liquid face lift in a bottle”</li>
                  <li className="mb-1.5">-Firms, plumps, moisturizes skin</li>
                  <li className="mb-1.5">-Powerful argireline peptides (Natural Botox)</li>
                </ul>
                <p className="font-semibold text-sm text-gray-800">
                  +$10 Cash or Card (NO $5 OFF WITH CASH as it is an add-on)
                </p>
              </div>
              {/* END SERBICE SUB SECTION */}
            </div>
          </div>

          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              02
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>O2 Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Rejuvenate skin with oxygen infusion, plant-derived stem cells, peptides, and a high
                concentration of enzymatic botanicals.
              </p>
              <ul className="mb-10">
                <li className="mb-1.5">Signature Facial that incorporates:</li>
                <li className="mb-1.5">-Image O2 Facial Lift Treatment</li>
                <li className="mb-1.5">-Exfoliation</li>
                <li className="mb-1.5">-Mask treatment</li>
                <li className="mb-1.5">
                  *Steam & hot towels are used throughout entire treatment.
                </li>
              </ul>

              <p className="font-semibold text-sm text-gray-800">$100 (60 Minutes)</p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              03
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Oxygen Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Experience deep exfoliation without the downtime of a chemical peel! This
                exfoliating facial is{" "}
                <span className="underline">not recommended for sensitive skin types</span>. Choose
                between <span className="font-bold">NeoBright</span> for a lighting treatment for
                hyper-pigmentation or <span className="font-bold">NewRevive</span> for rejuvenating
                treatment for fine lines and wrinkles.
              </p>
              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Cleanse</li>
                <li className="mb-1.5">-Exfoliate with Sodium Bicarbonate Tip</li>
                <li className="mb-1.5">-Ultrasound for deeper product penetrations</li>
                <li className="mb-1.5">-Massage</li>
                <li className="mb-1.5">-Moisturize</li>
                <li className="mb-1.5">*Steam & hot towels are used throughout entire treatment</li>
              </ul>
              <p className="font-semibold">
                NeoBright active ingredients{" "}
                <span className="text-gray-500 block font-normal">
                  Azelaic Acid: Evens out skin tone • Kojic Acid: Brightens • Retinol: Anti-aging
                </span>
              </p>
              <p className="font-semibold">
                NeoRevive active ingredients
                <span className="text-gray-500 block font-normal">
                  Hyaluronic acid: Wrinkle reducer • Peptides: Skin repair • Retinol: Anti-aging
                </span>
              </p>

              <p className="font-semibold text-sm text-gray-800">$115 (60 Minutes)</p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>
          {/* SECTION 4 CONTENT */}
          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              04
            </span>

            <div>
              <h3>Hydra-Dermabrasion Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Get clearer skin through hydra-dermabrasion, which combines cleansing, exfoliation,
                extraction, hydration, and antioxidant protection all at once. This treatment is
                soothing, moisturizing, non-invasive, and non-irritating.
              </p>
              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Cleanse</li>
                <li className="mb-1.5">-Exfoliation</li>
                <li className="mb-1.5">-Hydration and Antioxidant Protection</li>
                <li className="mb-1.5">*Steam & hot towels are used throughout entire treatment</li>
              </ul>
              <p className="font-semibold text-sm text-gray-800">$135 (60 Minutes)</p>
            </div>
          </div>
          {/* END OF SECTION 1 CONTENT */}
          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              05
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Back Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                We’ve got your back! Benefit from our signature back facial that utilizes
                all-natural Dr. Schwab products. Benefits include getting rid of back acne, reducing
                oiliness, and softening the skin and an overall soothing experience. Consider adding
                on our Mini Facial to experience 60 minutes of relaxation.
              </p>
              <ul className="mb-10">
                <li className="mb-1.5">-Getting rid of back acne</li>
                <li className="mb-1.5">-Reducing oiliness</li>
                <li className="mb-1.5">-Softening the skin</li>
                <li className="mb-1.5">-Healing dry skin</li>
                <li className="mb-1.5">-Easing tension to back muscles</li>
              </ul>
              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Skin analyses</li>
                <li className="mb-1.5">-Double Cleanse</li>
                <li className="mb-1.5">-Extractions (if needed)</li>
                <li className="mb-1.5">-Moisturizer</li>
              </ul>

              <p className="font-semibold text-sm text-gray-800">$70 (30 Minutes)</p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              06
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Mini Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                A mini facial treatment is an abbreviated version of our Signature Facial. Typically
                provided in 30 minutes, it’s short enough to complete during a lunch break but long
                enough to feel luxurious!
              </p>
              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Skin analysis</li>
                <li className="mb-1.5">-Cleanse</li>
                <li className="mb-1.5">-Exfoliation</li>
                <li className="mb-1.5">-Facial Massage</li>
                <li className="mb-1.5">-Mask Treatment</li>
                <li className="mb-1.5">-Sunscreen</li>
                <li className="mb-1.5">-Toner & Moisturizer</li>
                <li className="mb-1.5">-Lip & Eye Treatment</li>
                <li className="mb-1.5">*Steam & hot towels are used throughout entire treatment</li>
              </ul>
              <p className="font-semibold text-sm text-gray-800">$60 (30 Minutes)</p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              07
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Gentleman’s Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Men need pampering too! This relaxing treatment helps repair the damage caused by
                daily shaving, skin sensitivity, dullness, and aging.
              </p>

              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Skin analysis</li>
                <li className="mb-1.5">-Cleanse</li>
                <li className="mb-1.5">-Exfoliation</li>
                <li className="mb-1.5">-Extractions</li>
                <li className="mb-1.5">-Facial Massage</li>
                <li className="mb-1.5">-Mask Treatment</li>
                <li className="mb-1.5">-Arm & Hand Massage</li>
                <li className="mb-1.5">-Sunscreen</li>
                <li className="mb-1.5">-Toner & Moisturizer</li>
                <li className="mb-1.5">-Lip & Eye Treatment</li>
                <li className="mb-1.5">*Steam & hot towels are used throughout entire treatment</li>
              </ul>
              <p className="font-semibold text-sm text-gray-800">$90 (60 Minutes)</p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-8" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              08
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Dermaplane Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Dermaplaning is an exfoliation treatment that involves gently scraping the face with
                a medical-grade scalpel to remove the very top layer of skin. The shave removes both
                dead skin cells and the fine vellus hairs that are known as “peach fuzz,” leaving
                the surface of the face ultra smooth. By stimulating the development of new skin
                cells, this type of exfoliation helps new skin rise to the surface. It leaves
                clients with a more youthful and dewy face without any harsh chemicals, excessive
                downtime, or pain.
              </p>

              <ul className="mb-10">
                <li className="mb-1.5">Benefits:</li>
                <li className="mb-1.5">-Removes dead skin cells</li>
                <li className="mb-1.5">-Removes fine vellus hairs (peach fuzz)</li>
                <li className="mb-1.5">
                  -Leaves the surface of the face ultra-smooth for smoother makeup application
                </li>
                <li className="mb-1.5">-Leaves you with a more youthful and dewy face</li>
                <li className="mb-1.5">*Facial hair does NOT grow back thicker or darker</li>
              </ul>
              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Skin analysis</li>
                <li className="mb-1.5">-Cleanse</li>
                <li className="mb-1.5">-Exfoliation</li>
                <li className="mb-1.5">-Extractions</li>
                <li className="mb-1.5">-Mask Treatment with facial massage</li>
                <li className="mb-1.5">-Toner</li>
                <li className="mb-1.5">-Serum x 2</li>
                <li className="mb-1.5">-Sunscreen</li>
                <li className="mb-1.5">-Lip & Eye Treatment</li>
                <li className="mb-1.5">*Steam & hot towels are used throughout entire treatment</li>
              </ul>

              <p className="font-semibold text-sm text-gray-800">
                $130 (60 Minutes)
                <br />
                ADD on just Dermaplaning to Signature Facial + $65 card/$60 cash (Add additional
                20-30 Minutes to 60 Minute Signature Facial)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
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
