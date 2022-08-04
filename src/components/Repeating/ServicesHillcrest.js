import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const Services = ({ className }) => {
   const data = useStaticQuery(graphql`
      {
         massageServices: file(relativePath: { eq: "repeating/massage-services.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         specialPackages: file(relativePath: { eq: "repeating/special-packages.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         ivHydration: file(relativePath: { eq: "repeating/iv-hydration.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         skinCareServices: file(relativePath: { eq: "repeating/skin-care-services.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   return (
      <section className={`wrapper ${className}`}>
         <div className="container">
            <header className="text-center md-8 md:mb-10">
               <h2>More than a Great Massage</h2>
               <p className="text-xl md:text-2xl font-heading text-gray-900 font-light">
                  At Karma Spa, massage is just the beginning of your ultimate relaxation journey.
               </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 md:gap-x-10">
               <div className="group relative">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.massageServices.childImageSharp.fluid}
                        alt="Massage Services"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Massage Services</h3>
                  <p className="mb-3">No matter your indulgence, we have a massage for you.</p>
                  <AniLink fade to="/massage-therapy-hillcrest/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/massage-therapy-hillcrest/" text="Hillcrest Massage" />
               </div>
               <div className="group relative">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.specialPackages.childImageSharp.fluid}
                        alt="Special Packages"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Special Packages</h3>
                  <p className="mb-3">Our popular packages will pamper you with great value.</p>
                  <AniLink fade to="/massage-packages-san-diego/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/massage-packages-san-diego/" text="Hillcrest Specials" />
               </div>
               <div className="group relative">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.ivHydration.childImageSharp.fluid}
                        alt="Aesthetic Treatments"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Med Spa Services</h3>
                  <p className="mb-3">Explore Hillcrest Med Spa Services</p>
                  <AniLink fade to="/iv-hydration-san-diego/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/iv-hydration-san-diego/" text="Hillcrest Med Spa Services" />
               </div>
               {/* <div className="group relative">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.skinCareServices.childImageSharp.fluid}
                        alt="Skin Care Services"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Skin Care Services</h3>
                  <p className="mb-3">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
                  <AniLink fade to="/skin-care-hillcrest/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/skin-care-hillcrest/" text="Hillcrest Skin Care" />
               </div> */}
            </div>
         </div>
      </section>
   );
};

export default Services;
