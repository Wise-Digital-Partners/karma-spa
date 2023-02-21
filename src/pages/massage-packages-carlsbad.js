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
        title="Carlsbad Massage Packages | Karma Spa"
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
        <h1>Carlsbad Massage Packages</h1>
        <p className="mb-2 md:mb-0">
          Get the most out of your relaxation journey with our massage packages.
          Experience multiple benefits in a single indulgent session that will
          pamper you properly when you need it most. Our Carlsbad massage spa is
          ready to deliver.
        </p>
      </HeroSplit>

      <ScrollWrapper>
        <ScrollNavigation>
          <li>
            <AnchorLink
              to={url + "#section-1"}
              title="The President Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-2"}
              title="The Vice President Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-3"}
              title="The CEO Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-4"}
              title="The Premier Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-5"}
              title="The Royal Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-6"}
              title="The First Lady Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-7"}
              title="The Crown Package"
              stripHash
            />
          </li>
          <li>
            <AnchorLink to={url + "#section-8"} title="Memberships" stripHash />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-9"}
              title="Spa Specials"
              stripHash
            />
          </li>
        </ScrollNavigation>
        <ScrollContent>
          <div id="section-1" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$160
            </span>
            <h3 className="mb-4">The President Package</h3>

            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Experience the benefits of massage therapy and body detox in one
               session.
             </p> */}
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>

            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                60 Minute Foot &amp; Body Fusion (Clothes-on)
              </li>
              <li className="text-gray-600">
                60 Minute Body Massage (Deep Tissue or Swedish)
              </li>
              <li className="text-gray-600">Hot Towels</li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
          </div>

          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$100
            </span>
            <h3 className="mb-4">The Vice President Package</h3>
            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Ease your stress with a massage & sauna or steam session.
             </p> */}

            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>

            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                60 Minute Body Massage (Deep Tissue or Swedish)
              </li>
              <li className="text-gray-600">Hot Towels</li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$145
            </span>
            <h3 className="mb-4">The CEO Package</h3>
            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Make room in your busy schedule for some pampering.
             </p> */}
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                90 Minute Body Massage (Deep Tissue or Swedish)
              </li>
              <li className="text-gray-600">Hot Towels</li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
          </div>

          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$175
            </span>
            <h3 className="mb-4">The Premier Package</h3>
            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Want a well-rounded massage experience? The Premier Package is
               for you.
             </p> */}
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">
                60 Minute Body Massage (Deep Tissue or Swedish)
              </li>
              <li className="text-gray-600">30 Minute Foot Massage</li>
              <li className="text-gray-600">Hot Towels</li>
              <li className="text-gray-600">50 Minute Infra-Slim Body Wrap</li>
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
            </ul>
          </div>

          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$170
            </span>
            <h3 className="mb-4">The Royal Package</h3>
            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Feel like royalty with two therapists for maximum relaxation.
             </p> */}
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                60 Minute Double Indulgence (Two Therapists, Four Hands)
              </li>
              <li className="text-gray-600">Hot Towels</li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$185
            </span>
            <h3 className="mb-4">First Lady Package</h3>
            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Want a well-rounded massage experience? The Premier Package is
               for you.
             </p> */}
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">60 Minute Signature Facial</li>
              <li className="text-gray-600">
                60 Minute Body Massage (Deep Tissue or Swedish)
              </li>
              <li className="text-gray-600">15 Minute Sauna</li>
            </ul>
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$155 (1 Hours, 45 Minutes)
            </span>
            <h3 className="mb-4">The Crown Package</h3>
            {/* <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
               Feel like royalty with two therapists for maximum relaxation.
             </p> */}
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">60 Minute Signature Facial</li>
              <li className="text-gray-600">
                15 Minute Scalp Massage (Same time as 15 Minute Ionic Body
                Detox)
              </li>
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                30 Minute Body Massage (Clothes-on)
              </li>
            </ul>
          </div>

          <div id="section-8" className="mb-20 lg:mb-40" >
            <div className="text-center mt-40">
              <h2>Memberships</h2>
            </div>
            <div className="mb-24">
              <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
                <i className="fas fa-tag text-primary_400 mr-2"></i>$40
                (Annually)
              </span>
              <h3 className="mb-4">Basic Membership</h3>
              <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                Example: July 7th, 2023 – July 7th, 2024
              </p>
              <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
                Includes:
              </p>
              <ul className="styled-list mb-0 text-gray-600">
                <li className="">
                  Monthly Specials on services/packages/facials that only
                  members can enjoy
                </li>
                <li>Point System—Spend $1, get 1 point</li>
                <div className="ml-10">
                  <p className="mb-1.5">
                    {" "}
                    750 points = FREE 60 Minute Massage 800 points = FREE 60
                    Minute Deep Tissue{" "}
                  </p>
                  <p className="mb-1.5">
                    {" "}
                    1050 points = FREE 90 Minute Massage 1100 points = FREE 90
                    Minute Deep Tissue{" "}
                  </p>
                  <p className="mb-1.5">
                    {" "}
                    1350 points = FREE 2 Hour Massage 1400 points = FREE 2 Hour
                    Deep Tissue{" "}
                  </p>
                  <p className="mb-1.5">
                    {" "}
                    No breaking points in half, if they have 500 points, they
                    cannot redeem for 30 Minute Massage{" "}
                  </p>
                </div>
                <li>
                  The $40 annual fee doesn’t count towards total points
                  accumulated but gift card purchases do!
                </li>
                <li>Points never expire</li>
                <p className="mb-1 italic">
                  {" "}
                  --- Front desk will need to go in and remove the 40 points
                  under the membership tab once the client has purchased their
                  Basic Membership{" "}
                </p>
                <p className="mb-1 italic">
                  {" "}
                  --- Unfortunately, we are not notified when a client’s Basic
                  Membership has expired. If membership tab in the client’s
                  profile is the color gray, that means their membership has
                  expired. If there is no membership tab is displayed at all,
                  then the client was never a member with us{" "}
                </p>
              </ul>
            </div>
            <div className="mb-24">
              <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
                <i className="fas fa-tag text-primary_400 mr-2"></i>$65 (ACH
                Monthly)
              </span>
              <h3 className="mb-4">VIP Membership</h3>
              <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
                Example: If client signs up on July 7th then their ACH date with
                be on the 7th of each month after that.
              </p>
              <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
                Includes:
              </p>
              <ul className="styled-list mb-0 text-gray-600">
                <li className="">
                  $65 is automatically charged the day the client signs up for
                  VIP membership and a benefit (60 Minute Body Massage) will be
                  available to use right away
                </li>
                <li>Point System—Spend $1, get 1 point</li>
                <div className="ml-10">
                  <p className="mb-1.5">
                    {" "}
                    750 points = FREE 60 Minute Massage 800 points = FREE 60
                    Minute Deep Tissue
                  </p>
                  <p className="mb-1.5">
                    {" "}
                    1050 points = FREE 90 Minute Massage 1100 points = FREE 90
                    Minute Deep Tissue
                  </p>
                  <p className="mb-1.5">
                    {" "}
                    1350 points = FREE 2 Hour Massage 1400 points = FREE 2 Hour
                    Deep Tissue
                  </p>
                  <p className="mb-1.5">
                    {" "}
                    No breaking points in half, if they have 500 points, they
                    cannot redeem for 30 Minute Massage{" "}
                  </p>
                </div>
                <li>
                  The $40 annual fee doesn’t count towards total points
                  accumulated but gift card purchases do!
                </li>
                <li>Points never expire</li>
                <p className="mb-1 italic">
                  {" "}
                  --- Front desk will need to go in and remove the 40 points
                  under the membership tab once the client has purchased their
                  Basic Membership{" "}
                </p>
                <p className="mb-1 italic">
                  {" "}
                  --- Unfortunately, we are not notified when a client’s Basic
                  Membership has expired. If membership tab in the client’s
                  profile is the color gray, that means their membership has
                  expired. If there is no membership tab is displayed at all,
                  then the client was never a member with us{" "}
                </p>
              </ul>
            </div>
          </div>

          <div id="section-9" className="mb-20 lg:mb-40">

            <h3 className="mb-4">Spa Specials</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
(Must Pay Cash)
             </p>

            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes: 
            </p>
            <ul className="styled-list mb-8 items-start">
              <li className="text-gray-600 "> <div><p className="font-semibold block mb-1">Military Special 10% off Monday-Friday</p> <p className="mb-0">ctive and retired military only. No dependents (Ex: Children/Spouses)</p></div></li>
            </ul>    

            <ul className="styled-list mb-8 items-start">
              <li className="text-gray-600 "> <div><p className="font-semibold block mb-1">Early Bird Special $10 off Monday-Thursday 10am-12pm</p> <p className="mb-0">Must book before 12pm</p></div></li>
            </ul>              
            
            <ul className="styled-list mb-8 items-start">
              <li className="text-gray-600 "> <div><p className="font-semibold block mb-1">First-time Customer Special $10 off</p> <p className="mb-0">60 Minutes, 90 Minutes or 2 Hour Body Massage</p></div></li>
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
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/packages-facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/packages-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "services/special-packages/Special Packages.jpg" }
    ) {
      childImageSharp {
        fixed(width: 1440, height: 1358, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: { eq: "services/special-packages/Special Packages.jpg" }
    ) {
      childImageSharp {
        fixed(width: 828, height: 956, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
