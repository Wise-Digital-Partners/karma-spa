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
        title="Carlsbad Massage Packages"
        description="Get the most out of your relaxation journey with our massage packages at Karma Spa in Carlsbad! Choose the one that best fits you. Learn more here!"
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
        <h1>Massage Packages: Relax & Rejuvenate in Carlsbad</h1>
        <p className="mb-2 md:mb-0">
          Get the most out of your relaxation journey with our massage packages.
          Experience multiple benefits in a single indulgent session that will
          pamper you properly when you need it most. Our massage spa is ready to
          deliver.
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
            <AnchorLink
              to={url + "#section-8"}
              title="Spa Specials"
              stripHash
            />
          </li>
        </ScrollNavigation>
        <ScrollContent>
          <div id="section-1" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$175 (Single)
              • $350 (Couples)
            </span>
            <h3 className="mb-4">The President Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              Experience the benefits of massage therapy and body detox in one
              session.
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">
                15 Minute Ionic Body Detox plus 60 Minute Foot &amp; Body Fusion
                (performed simultaneously)
              </li>
              <li className="text-gray-600">
                60 Minute Body Massage (Choice of Swedish, Medium or Deep Tissue
                pressure)
              </li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
            <p className="text-gray-600 mb-0">2 Hours and 15 Minutes</p>
          </div>

          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$110 (Single)
              • $220 (Couples)
            </span>
            <h3 className="mb-4">The Vice President Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              Ease your stress with a massage & sauna or steam session.
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                60 Minute Body Massage (choice of Swedish, Medium or Deep Tissue
                pressure)
              </li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
            <p className="text-gray-600 mb-0">1 Hour and 30 Minutes</p>
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$160 (Single)
              • $320 (Couples)
            </span>
            <h3 className="mb-4">The CEO Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              Make room in your busy schedule for some pampering.
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                90 Minute Hot Stone Massage (choice of Swedish, Medium or Deep
                Tissue pressure)
              </li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
            <p className="text-gray-600 mb-0">2 Hours</p>
          </div>

          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$190 (Single)
              • $380 (Couples)
            </span>
            <h3 className="mb-4">The Premier Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              Want a well-rounded massage experience? The Premier Package is for
              you.
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">
                60 Minute Full Body Massage (choice of Swedish, Medium, or Deep
                Tissue pressure)
              </li>
              <li className="text-gray-600">30 Minute Foot Massage</li>
              <li className="text-gray-600">50 Minute Infra-Slim Body Wrap</li>
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
            </ul>
            <p className="text-gray-600 mb-0">2 Hours and 35 Minutes</p>
          </div>

          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$185 (Single)
              • $370 (Couples)
            </span>
            <h3 className="mb-4">The Royal Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              2 therapists, 1 amazing experience!
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                60 Minute Double Indulgence (choice of Swedish, Medium or Deep
                Tissue pressure)
              </li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
            </ul>
            <p className="text-gray-600 mb-0">1 Hour and 30 Minutes</p>
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$200 (Single)
              • $400 (Couples)
            </span>
            <h3 className="mb-4">The First Lady Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              When you need executive treatment, look no further. Our First Lady
              package delivers the ultimate renewal experience.
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">15 Minute Ionic Body Detox</li>
              <li className="text-gray-600">
                60 Minute Full Body Massage (choice of Swedish, Medium, or Deep
                Tissue pressure)
              </li>
              <li className="text-gray-600">15 Minute Sauna Session</li>
              <li className="text-gray-600">60 Minute Signature Facial</li>
            </ul>
            <p className="text-gray-600 mb-0">2 Hours and 30 Minutes</p>
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="inline-flex items-center bg-white rounded text-gray-900 font-medium px-3 py-2 mb-2 mt-4">
              <i className="fas fa-tag text-primary_400 mr-2"></i>$170 (Single)
              • $340 (Couples)
            </span>
            <h3 className="mb-4">The Crown Package</h3>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">
              Get the royal treatment with this luxurious 1 hour 45 minute
              package.
            </p>
            <p className="font-heading text-2xlarge font-light text-gray-900 mb-1">
              Includes:
            </p>
            <ul className="styled-list mb-8">
              <li className="text-gray-600">
                15 Minute Ionic Body Detox plus 15 Minute Scalp Massage
                (performed simultaneously)
              </li>
              <li className="text-gray-600">
                30 Minute Massage (any focused area)
              </li>
              <li className="text-gray-600">60 Minute Signature Facial</li>
            </ul>
            <p className="text-gray-600 mb-0">1 Hour and 45 Minutes</p>
          </div>

          <div id="section-8" className="mb-20 lg:mb-40">
            <h3 className="mb-4">Spa Specials (Must Pay Cash)</h3>
            <ul className="styled-list mb-8 items-start">
              <li className="text-gray-600">
                <div>
                  <p className="font-semibold block mb-1">Military Special:</p>
                  <p className="mb-0">
                    10% off Monday-Friday. Active and retired military only. No
                    dependents (Ex: Children/Spouses)
                  </p>
                </div>
              </li>
              <li className="text-gray-600">
                <div>
                  <p className="font-semibold block mb-1">
                    Early Bird Special:
                  </p>
                  <p className="mb-0">
                    $10 off Monday-Thursday 10am-12pm. Must book before 12pm
                  </p>
                </div>
              </li>
              <li className="text-gray-600">
                <div>
                  <p className="font-semibold block mb-1">
                    First-time Customer Special:
                  </p>
                  <p className="mb-0">
                    $10 off 60 Minutes, 90 Minutes or 2 Hour Body Massage
                  </p>
                </div>
              </li>
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
