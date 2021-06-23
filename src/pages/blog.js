import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

export const Page = ({ data }) => {
   return (
      <Layout headerStyle="classic" headerLinkColor="black" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Blog | Karma Spa | Massage Spa in San Diego & Carlsbad"
            description="Our Karma Spa blog connects you with all kinds of massage information and tips on living a life of total relaxation. We're a top San Diego massage spa."
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <section className={`wrapper pt-8 md:pt-12`}>
            <div className="container">
               <header className="mb-10 md:mb-16 text-center">
                  <h1>The Karma Blog</h1>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 md:gap-x-12">
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_8.childImageSharp.fluid}
                           alt="5 Benefits to Infrared Light Therapy"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">March 20, 2017 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">5 Benefits to Infrared Light Therapy</h4>
                     <AniLink fade to="/5-benefits-infrared-light-therapy/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_7.childImageSharp.fluid}
                           alt="The Wonderful World of Aromatherapy Oils"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">March 10, 2017 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">The Wonderful World of Aromatherapy Oils</h4>
                     <AniLink fade to="/wonderful-world-aromatherapy-oils/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_6.childImageSharp.fluid}
                           alt="Key Ways That Message Helps Relieve Stress"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">February 20, 2017 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">Key Ways That Message Helps Relieve Stress</h4>
                     <AniLink fade to="/key-ways-massage-helps-relieve-stress/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_5.childImageSharp.fluid}
                           alt="Why Try Reflexology? 5 Good Reasons"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">February 10, 2017 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">Why Try Reflexology? 5 Good Reasons</h4>
                     <AniLink fade to="/try-reflexology-5-good-reasons/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_4.childImageSharp.fluid}
                           alt="Best Ways to Prepare for a Massage"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">January 20, 2017 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">Best Ways to Prepare for a Massage</h4>
                     <AniLink fade to="/best-ways-prepare-massage/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_3.childImageSharp.fluid}
                           alt="How Message Can Help Your Fibromyalgia"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">January 10, 2017 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">How Message Can Help Your Fibromyalgia</h4>
                     <AniLink fade to="/massage-can-help-fibromyalgia/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_2.childImageSharp.fluid}
                           alt="8 Types of Massage: What’s the Difference?"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">December 20, 2016 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">8 Types of Massage: What’s the Difference?</h4>
                     <AniLink fade to="/8-types-massage-whats-difference/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
                  <div className="group relative">
                     <div className="overflow-hidden mb-6">
                        <Img
                           className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                           fluid={data.blogThumbnail_1.childImageSharp.fluid}
                           alt="5 Reasons to Hydrate Post-Massage"
                        />
                     </div>
                     <p className="text-xsmall text-gray-600 uppercase mb-2">December 10, 2016 | by Karma</p>
                     <h4 className="heading-four mb-4 mb-0">5 Reasons to Hydrate Post-Massage</h4>
                     <AniLink fade to="/5-reasons-hydrate-post-massage/">
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      blogThumbnail_1: file(relativePath: { eq: "blog/5-reasons-to-hydrate-post-massage.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_2: file(relativePath: { eq: "blog/8-types-of-massage-whats-the-difference.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_3: file(relativePath: { eq: "blog/how-message-can-help-your-fibromyalgia.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_4: file(relativePath: { eq: "blog/best-ways-to-prepare-for-a-massage.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_5: file(relativePath: { eq: "blog/why-try-reflexology-5-good-reasons.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_6: file(relativePath: { eq: "blog/key-ways-that-message-helps-relieve-stress.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_7: file(relativePath: { eq: "blog/the-wonderful-world-of-aromatherapy-oils.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      blogThumbnail_8: file(relativePath: { eq: "blog/benefits-to-infrared-light-therapy.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
