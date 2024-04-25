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
        title="Hillcrest Skin Care Services | Karma Spa"
        description="Indulge in premium skin care services at Karma Spa in Hillcrest. Experience rejuvenating facials and personalized treatments tailored to your needs. Book today!"
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
        <h1>Hillcrest Skin Care Services</h1>
        <p className="mb-2 md:mb-0">
          Show yourself some extra love with our skin care services! Stress,
          free radicals, sun damage, and many other factors impact our skin.
          Find the right service for your needs in Hillcrest today, whether it’s
          a facial, waxing session, scrubs, or sauna session.
        </p>
      </HeroSplit>

      <ScrollWrapper>
        <ScrollNavigation>
          <li>
            <AnchorLink
              to={url + "#section-1"}
              title="Hydrating Facial"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-2"}
              title="Brightening Vitamin C Facial"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-3"}
              title="Anti-aging Facial"
              stripHash
            />
          </li>
                    <li>
            <AnchorLink
              to={url + "#section-4"}
              title="Hydra-Dermabrasion Facial"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-5"}
              title="Deep Pore Cleansing Facial"
              stripHash
            />
          </li>          
          <li>
            <AnchorLink
              to={url + "#section-6"}
              title="Signature Facial"
              stripHash
            />
          </li>          
          <li>
            <AnchorLink
              to={url + "#section-7"}
              title="Mini Facial"
              stripHash
            />
          </li>          
          <li>
            <AnchorLink
              to={url + "#section-8"}
              title="Dermaplaning Facial"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-9"}
              title="Dermaplane Express"
              stripHash
            />
          </li>          

        </ScrollNavigation>
        <ScrollContent>
          <div id="section-0" className="mb-10 ">
            <p className="font-heading text-2xl text-gray-800">
              Choose between a 10-minute scalp massage or a 10-minute arm and
              hand for all facials. *Not applicable to the mini facial,
              dermaplane express, and dermaplane facial*
            </p>
          </div>

          <div id="section-1" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              01
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Hydrating Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                For dehydrated skin, this facial uses ionactive hyaluronic acid
                and squalene to improve the skin’s ability to store moisture,
                leaving you refreshed, hydrated, and more radiant.
              </p>
              <p className="font-semibold text-sm text-gray-800">
                $110 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>          
          
          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              02
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Brightening Vitamin C Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
Get your daily dose of Vitamin C with this amazing facial packed with vitamins and antioxidants to Brighten and rejuvenate skin. This is a great option for anyone looking to help correct any Hyperpigmentation or dark spots caused by sun damage. <br></br>
              <i>*not recommended for recently sunburned skin*</i>

              </p>
              
              <p className="font-semibold text-sm text-gray-800">
$110 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              02
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Anti-aging Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
Set the clock back with this anti-aging facial packed with powerful vitamins and antioxidants to fight free radical damage, stimulate collagen production, and erase the signs of aging for a more youthful complexion. <br></br>

              </p>
              
              <p className="font-semibold text-sm text-gray-800">
$110 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>
          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              04
            </span>

            <div>
              <h3>Hydra-Dermabrasion Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Get clearer skin through hydra-dermabrasion, which combines
                cleansing, exfoliation, extraction, hydration and antioxidant
                protection all at once. This treatment is soothing,
                moisturizing, non-invasive and non-irritating because there is
                no incisions or punctures to the skin.
              </p>
              <ul className="mb-10">
                <li className="mb-1.5">Includes:</li>
                <li className="mb-1.5">-Cleanse</li>
                <li className="mb-1.5">-Exfoliation</li>
                <li className="mb-1.5">
                  -Hydration and Antioxidant Protection
                </li>
                <li className="mb-1.5">
                  *Steam & hot towels are used throughout entire treatment
                </li>
              </ul>
              <p className="font-semibold text-sm text-gray-800">
                $150 (60 Minutes)
              </p>
            </div>

          </div>
          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              05
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Deep Pore Cleansing Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                A deep pore cleansing facial targets clogged pores. From
                steaming to extraction, the entire experience is designed to
                remove the excess oil and debris from your pores leaving you
                with clean vibrant skin. People who struggle with acne or oily
                skin will especially benefit from this facial.
              </p>
              <p className="font-semibold text-sm text-gray-800">
                $110 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              06
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Signature Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                This facial is designed for anyone who doesn't know their skin
                type or just can't decide which kind of facial would be best for
                them. The esthetician will do an in-depth skin analysis and
                specifically tailor a treatment plan with the right products for
                your skin type.
              </p>
              <p className="font-semibold text-sm text-gray-800">
                $110 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              07
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Mini Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                For the person who is always on the go but still makes time for
                self-care, this facial is for you. For 35 minutes you will get a
                skin analysis, double cleanse, exfoliation, toner, 5-minute
                décolleté massage, mask, moisturizer & sunscreen
              </p>
              <p className="font-semibold text-sm text-gray-800">
                $75 (30 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-8" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              08
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Dermaplaning Facial</h3>
              <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
                Dermaplaning is a form of physical exfoliation with a medical
                grade surgical blade that removes up to 14-20 layers of skin.
                Similar to microdermabrasion but better. No down time and leave
                with an immediate glow. The benefits of this treatment include:
              </p>

              <ul className="mb-10">
                <li>
                  -Removes buildup of dead skin cells, dirt, & debris on the
                  skin
                </li>
                <li>-Improves skin texture </li>
                <li>-Improves fine lines and wrinkles</li>
                <li>-Improves skin care product penetration</li>
                <li>-Refines the appearance of pores</li>
                <li>-Increases skin's ability to absorb products </li>
                <li>-Reduces the appearance of Hyperpigmentation</li>
                <li>-Stimulates Circulation</li>
                <li>
                  -Encourages normal shedding (desquamation) of the Stratum
                  Corneum
                </li>
              </ul>
              <p className="font-semibold text-sm text-gray-800">
                $130 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>

          <div id="section-9" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              09
            </span>
            {/* SECTION 1 CONTENT */}
            <div>
              <h3>Dermaplane Express:</h3>
              <ul className="mb-10">
                <li>Includes:</li>
                <li>-Skin Analysis</li>
                <li>-Double Cleanse</li>
                <li>-Dermaplane</li>
                <li>-Moisturizer</li>
                <li>-Sunscreen</li>
              </ul>

              <p className="font-semibold text-sm text-gray-800">
                $100 (60 Minutes)
              </p>
            </div>
            {/* END OF SECTION 1 CONTENT */}
          </div>
          {/* <div id="section-4" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              06
            </span>
            <h3>O2 Facial</h3>
            <p>
              Rejuvenate skin with oxygen infusion, plant-derived stem cells,
              peptides, and a high concentration of enzymatic botanicals.
            </p>
            <p className="mb-3">Signature Facial that incorporates</p>
            <ul className="styled-list mb-8">
              <li>Image O2 Facial Products</li>
              <li>Exfoliation</li>
              <li>Mask treatment </li>
            </ul>
            <p>*Steam & hot towels are used throughout entire treatment.</p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Price: $95 (60 minutes)
            </p>
          </div> */}

          {/* <div id="section-5" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              03
            </span>
            <h3>Oxygen Facial</h3>
            <p>
              Experience deep exfoliation without the downtime of a chemical
              peel! This exfoliating facial is{" "}
              <b>not recommended for sensitive skin</b>. Choose between
              NeoBright for a lighting treatment for hyper-pigmentation or
              NewRevive for rejuvenating treatment for fine lines and wrinkles.
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
              Azelaic Acid: Evens out skin tone • Kojic Acid: Brightens •
              Retinol: Anti-aging
            </p>

            <p className="text-small font-medium tracking-wide text-gray-900">
              <b>NeoRevive active ingredients</b>
              <br />
              Hyaluronic acid: Wrinkle reducer • Peptides: Skin repair •
              Retinol: Anti-aging
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Price: $110 (60 minutes)
            </p>
          </div> */}
        </ScrollContent>
      </ScrollWrapper>

      <CTABackgroundImage />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/skin-care-facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/skin-care-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "services/skin-care/skin-care-hero-desktop.jpg" }
    ) {
      childImageSharp {
        fixed(width: 1440, height: 1358, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: { eq: "services/skin-care/skin-care-hero-mobile.jpg" }
    ) {
      childImageSharp {
        fixed(width: 828, height: 956, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
