import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const Services = ({ className }) => {
   const data = useStaticQuery(graphql`
      {
         massageServicesCarlsbad: file(relativePath: { eq: "repeating/Carlsbad Massage Services - Card.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         specialPackagesCarlsbad: file(relativePath: { eq: "repeating/Carlsbad Special Packages - Card.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         skinCareServicesCarlsbad: file(relativePath: { eq: "repeating/Carlsbad Skin Care - Card.jpg" }) {
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
            <header className="text-center md-8 md:mb-12">
               <h2>More than a Great Massage</h2>
               <p className="text-xl md:text-2xl font-heading text-gray-900 font-light">
                  At Karma Spa, massage is just the beginning of your ultimate relaxation journey.
               </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-11 gap-y-12 lg:gap-y-0 md:gap-x-10">
               <div className="group relative md:col-span-3 md:col-start-2">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.massageServicesCarlsbad.childImageSharp.fluid}
                        alt="Massage Services"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Massage Services</h3>
                  <p className="mb-3">No matter your indulgence, we have a massage for you.</p>
                  <AniLink fade to="/massage-therapy-carlsbad/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/massage-therapy-carlsbad/" text="Carlsbad Massage" />
               </div>
               <div className="group relative md:col-span-3 md:col-start-5">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.specialPackagesCarlsbad.childImageSharp.fluid}
                        alt="Special Packages"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Special Packages</h3>
                  <p className="mb-3">Our popular packages will pamper you with great value.</p>
                  <AniLink fade to="/massage-packages-carlsbad/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/massage-packages-carlsbad/" text="Carlsbad Specials" />
               </div>
               <div className="group relative md:col-span-3 md:col-start-8">
                  <div className="relative overflow-hidden mb-4">
                     <Img
                        className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
                        fluid={data.skinCareServicesCarlsbad.childImageSharp.fluid}
                        alt="Skin Care Services"
                     />
                  </div>
                  <h3 className="heading-four mb-1">Skin Care Services</h3>
                  <p className="mb-3">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
                  <AniLink fade to="/skin-care-carlsbad/">
                     <span className="link-overlay hidden md:inline"></span>
                  </AniLink>
                  <ButtonWithIcon href="/skin-care-carlsbad/" text="Carlsbad Skin Care" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
