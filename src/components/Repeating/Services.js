import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Services = ({className}) => {

    const data = useStaticQuery(graphql`
        {
			massageServices: file(relativePath: {eq: "repeating/massage-services.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			} 
			specialPackages: file(relativePath: {eq: "repeating/special-packages.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			} 
			aestheticTreatments: file(relativePath: {eq: "repeating/aesthetic-treatments.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			} 
			skinCareServices: file(relativePath: {eq: "repeating/skin-care-services.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
            }					
        }
    `)   

    return (

    <section className={`wrapper text-center ${className}`}>
        <div className="container">
          <header className="text-center md-8 md:mb-20">
            <h2>More than a Great Massage</h2>
            <p className="text-xl md:text-2xl font-heading text-gray-900 font-light">At Karma Spa, massage is just the beginning of your ultimate relaxation journey.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-12 lg:row-gap-0 md:col-gap-12 xl:col-gap-16 text-center">
            <div className="group relative">
				<div className="overflow-hidden mb-6">
					<Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.massageServices.childImageSharp.fluid} alt="Massage Services" />
				</div>
				<h3 className="heading-four mb-4">Massage Services</h3>
				<p className="mb-0">No matter your indulgence, we have a massage for you.</p>
				<AniLink fade to="/massage-services/"><span className="link-overlay"></span></AniLink>
            </div>
            <div className="group relative">
				<div className="overflow-hidden mb-6">
					<Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.specialPackages.childImageSharp.fluid} alt="Special Packages" />
				</div>
              	<h3 className="heading-four mb-4">Special Packages</h3>
              	<p className="mb-0">Our popular packages will pamper you with great value.</p>
				<AniLink fade to="/massage-packages/"><span className="link-overlay"></span></AniLink>
            </div>
            <div className="group relative">
				<div className="overflow-hidden mb-6">
					<Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.aestheticTreatments.childImageSharp.fluid} alt="Aesthetic Treatments" />
				</div>
              	<h3 className="heading-four mb-4">Aesthetic Treatments</h3>
              	<p className="mb-0">Karma Bella aesthetic treatments bring out your best self.</p>
				<AniLink fade to="/aesthetic-treatments/"><span className="link-overlay"></span></AniLink>
            </div>
            <div className="group relative">
				<div className="overflow-hidden mb-6">
					<Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.skinCareServices.childImageSharp.fluid} alt="Skin Care Services" />
				</div>
              	<h3 className="heading-four mb-4">Skin Care Services</h3>
              	<p className="mb-0">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
				<AniLink fade to="/skin-care-services/"><span className="link-overlay"></span></AniLink>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services;