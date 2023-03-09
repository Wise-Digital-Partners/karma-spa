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
        title="Carlsbad Massage Therapy Services | Karma Spa"
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
        <h1>Carlsbad Massage Therapy</h1>
        <p className="mb-2 md:mb-0">
          Relax. Reduce pain and stress. Improve circulation and flexibility.
          Prevent injury and facilitate healing. Massage has many benefits, and
          we have many options. Your next indulgence awaits with our Carlsbad
          massage therapy services.
        </p>
      </HeroSplit>

      <ScrollWrapper>
        <ScrollNavigation>
          <li>
            <AnchorLink
              to={url + "#section-1"}
              title="Deep Tissue Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-2"}
              title="Hot Oil Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-3"}
              title="Back & Shoulder Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-4"}
              title="Swedish Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-5"}
              title="Thai Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-6"}
              title="Hot Stone Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-7"}
              title="Sports Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-8"}
              title="Tuina Massage"
              stripHash
            />
          </li>          
          <li>
            <AnchorLink
              to={url + "#section-9"}
              title="Aromatherapy Massage"
              stripHash
            />
          </li>          
          <li>
            <AnchorLink
              to={url + "#section-10"}
              title="Acupressure"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-11"}
              title="Double Indulgence"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-12"}
              title="Foot & Body Fusion"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-13"}
              title="Prenatal Body Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-14"}
              title="CBD Oil Body Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-15"}
              title="Ashiatsu Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-16"}
              title="Neck & Shoulder Relief"
              stripHash
            />
          </li>

          <li>
            <AnchorLink
              to={url + "#section-17"}
              title="Foot Massage al-la-carte"
              stripHash
            />
          </li>
          <li>
            <AnchorLink to={url + "#section-18"} title="Add-Ons" stripHash />
          </li>
        </ScrollNavigation>
        <ScrollContent>
          <div id="section-1" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              01
            </span>
            <h3>Deep Tissue Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Deep pressure, using elbows, thumbs, or forearms or walking on the
              back. Customers may be sore for a few days after a deep tissue
              session (Feels bruised). Not recommended for first-time customer
              who has never had massage before.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$80 (60 Minutes) • $110 (90 Minutes) • $140 (2 Hours)<br></br>
Couples: $160 (60 Minutes) •$220 (90 Minutes) •$280 (2 Hours)
            </p>
          </div>

          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              02
            </span>
            <h3>Hot Oil Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Does not affect pressure. Customers can receive deep tissue or
              lighter pressure. Therapist just warms the oil. Hot oil is used in
              every massage modality we offer (not Tuina).
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
  $75 (60 Minutes) • $105(90 Minutes) • $135 (2 Hours)<br></br>
Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              03
            </span>
            <h3>Back & Shoulder Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Face down the entire session (Tell therapist, “No turn over”) This
              is preferred for just the 60 minutes or 90 minutes. If customer is
              doing 2 hours, then customer will receive standard full body
              massage with more emphasis on neck, back and shoulders unless
              specified otherwise.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $25 (15 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $45 (30 Minutes) */}
$75 (60 Minutes) • $105(90 Minutes) • $135 (2 Hours)<br></br>
Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              04
            </span>
            <h3>Swedish Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Longer strokes, lighter pressure, more relaxing to get blood
              flowing.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
  $75 (60 Minutes) • $105(90 Minutes) • $140 (2 Hours)<br></br>
Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              05
            </span>
            <h3>Thai Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Yoga but in massage form. Stretching techniques used to relax the
              whole body. Traditionally performed on the floor but we perform on
              massage table at Karma Spa.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$80 (60 Minutes) • $110(90 Minutes) • $140 (2 Hours)<br></br>
Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              06
            </span>
            <h3>Hot Stone Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Starts off with a traditional massage (Deep tissue or Swedish)
              then the therapist slowly incorporates water heated stones into
              the massage. They use hot oil and the stones to massage the full
              body. Recommended for clients who like to relax, not for clients
              who like deep pressure as the stones are gliding across the skin
              for warmth and relaxation.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$90 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)<br></br>
Couples: $180 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              07
            </span>
            <h3>Sports Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Does not affect pressure. Client can receive deep tissue or
              lighter pressure. The therapist just incorporates stretching
              through-out the massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$75 (60 Minutes) • $105 (90 Minutes) • $135 (2 Hours)<br></br>
Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-8" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              08
            </span>
            <h3>Tuina Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              No oil, No lotion. Great for clients with knots or clients or
              clients who like deep pressure. (This modality is not for
              everyone.. it can feel like Indian Burn at times -LOL-).
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$75 (60 Minutes) • $105 (90 Minutes) • $135 (2 Hours)<br></br>
Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-9" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              09
            </span>
            <h3>Aromatherapy Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Any type of massage the client would like, add essential oil +$5
              per person. Client selects the scent at the front desk when they
              check in. We NEVER touch the body with essential oils as we do not
              know who is allergic to what. We burn the oil in a diffuser that
              is plugged into the room. This should be set up by therapist or
              front desk BEFORE client enters room.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $75 (1 Hour)
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
                     $270 (2 Hours) */}
$80 (60 Minutes) • $110 (90 Minutes) • $140 (2 Hours)<br></br>
Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-10" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              10
            </span>
            <h3>Acupressure</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Similar to Trigger Point. Focuses on knots and breaks them up.
              Deep Pressure, not relaxing.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$75 (60 Minutes) • $105 (90 Minutes) • $135 (2 Hours)<br></br>
Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-11" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              11
            </span>
            <h3>Double Indulgence</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Two therapists, four hands massaging on client at once. VERY
              RELAXING.. WORTH THE EXTRA $$.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$150 (1 Hour) • $210 (90 Minutes) NO TWO HOURS<br></br>
Couples: $300 (60 Minutes) • $420 (90 Minutes) NO TWO HOURS
            </p>
          </div>

          <div id="section-12" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              12
            </span>
            <h3>Foot & Body Fusion</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Clothes-on in foot massage room. 60 minutes = 30 minutes on the
              feet + 30 minutes upper body with warm water foot soak 90 minutes
              = 45 minutes on the feet + 45 minutes upper body with warm water
              foot soak.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$65 (1 Hour) • $95 (90 Minutes) NO TWO HOURS<br></br>
Prenatal: $70 (1 Hour) • $100 (90 Minutes) NO TWO HOURS<br></br>
Couples: $130 (60 Minutes) • $190 (90 Minutes) NO TWO HOURS
            </p>
          </div>

          <div id="section-13" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              13
            </span>
            <h3>Prenatal Body Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              We do not have belly tables at Karma Spa (Massage tables with a
              belly hole for woman to lay face down) We offer side-lining,
              meaning the woman will lay on her side for the back massage as she
              can not lay on her back. We provide a long pregnancy pillow to
              support the belly for extra comfort.{" "}
            </p>
            <br></br>
            <p>
              <sm>
                *Expected mothers must be at least 8 weeks to begin massage
                therapy*
              </sm>
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$80 (1 Hour) • $110 (90 Minutes) •  NO TWO HOUR, UNLESS THEY ADD ON 30 MINUTE FOOT MESSAGE TO 90 MINUTE BODY
            </p>
          </div>

          <div id="section-14" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              14
            </span>
            <h3>CBD Oil Body Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              CBD massage oil contains hemp which conditions the skin making it
              supple and soft. It also helps with skin conditions such as
              eczema, psoriasis, or even just dry skin.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $75 (1 Hour)
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
                     $270 (2 Hours) */}
$90 (60 Minutes) • $115 (90 Minutes) •  $150 (2 Hours) <br></br>Couples: $180 (60 Minutes) • $230 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-15" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              15
            </span>
            <h3>Ashiatsu Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Traditional Chinese massage using the bars attached to the
              ceiling, they walk on your back for deeper pressure.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $60 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $80 (90 Minutes)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $160 (90 Minutes) */}
              $75 (60 Minutes) • $105 (90 Minutes) • $135 (2 Hours)<br></br>Couples: $150
              (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-16" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              16
            </span>
            <h3>Neck & Shoulder Relief</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed clothes-on in the massage chair where therapist stands
              behind client while they are sitting upright in chair.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$30 (15 Minutes)<br></br>Couples: $60 (15 Minutes)
            </p>
          </div>


          <div id="section-17" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              17
            </span>
            <h3>30 Minute Foot Massage al-la-carte</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
$50 (30 Minutes)<br></br>Couples: $100 (30 Minutes)
            </p>
                        <h3>
              Add-on to any 60 Minute or <br></br> 90 Minute Body Massage
            </h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light"></p>
            <p className="text-small font-medium tracking-wide text-gray-900">
  
              $35 (30 Minutes)<br></br>Couples: $70 (30 Minutes)
            </p>
          </div>



          <div id="section-18" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              18
            </span>
            <h3>Add-ons</h3>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <ul>
                <li>-Prenatal Add-on +$5</li>
                <li>-Aromatherapy Add-on +$5</li>
                <li>-CBD Body Oil Add-on +$15</li>
                <li>-Hot Stone Add-on +$15</li>
                <li>-Foot Scrub +$5</li>
                <li>-Foot Massage (30 Minutes) Add-on +$30</li>
                <li>-Thai Massage (Stretching) +$5</li>
              </ul>
            </p>
            <div className="mb-12 lg:mb-24">
               <h3>Sauna</h3>
               <p>**No $5 off with cash**</p>
               <ul className=" text-small font-medium tracking-wide text-gray-900 mb-8">
                 <li>15 Minute Sauna Session $20</li>
                 <li>30 Minute Sauna Session $35</li>
                 <li>30 Minute Couple’s Sauna Session $40</li>
                 <li>30 Minute Couple’s Sauna Session $70</li>
               </ul>
             </div>

             <div className="mb-12 lg:mb-24">
               <h3>Ionic Body Detox</h3>
               <p>**No $5 off with cash**</p>
               <ul className="text-small font-medium tracking-wide text-gray-900 mb-8">
                 <li>15 Minute Detox $20</li>
                 <li>30 Minute Detox $35</li>
                 <li>30 Minute Couple’s Detox $40</li>
                 <li>30 Minute Couple’s Detox $70</li>
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
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/massage-services-facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/massage-services-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "services/massage/Massage Services.jpg" }
    ) {
      childImageSharp {
        fixed(width: 1440, height: 1358, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: { eq: "services/massage/Massage Services.jpg" }
    ) {
      childImageSharp {
        fixed(width: 828, height: 956, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
