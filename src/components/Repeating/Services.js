import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
            <p className="text-2xlarge font-heading">At Karma Spa, massage is just the beginning of your ultimate relaxation journey.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-4 row-gap-12 md:row-gap-0 md:col-gap-16 text-center">
            <div>
				<Img className="mx-auto mb-6" fluid={data.massageServices.childImageSharp.fluid} alt="Massage Services" />
				<h3 className="heading-four mb-4">Massage Services</h3>
				<p className="mb-0">No matter your indulgence, we have a massage for you.</p>
            </div>
            <div>
				<Img className="mx-auto mb-6" fluid={data.specialPackages.childImageSharp.fluid} alt="Special Packages" />
              	<h3 className="heading-four mb-4">Special Packages</h3>
              	<p className="mb-0">Our popular packages will pamper you with great value.</p>
            </div>
            <div>
				<Img className="mx-auto mb-6" fluid={data.aestheticTreatments.childImageSharp.fluid} alt="Aesthetic Treatments" />
              	<h3 className="heading-four mb-4">Aesthetic Treatments</h3>
              	<p className="mb-0">Karma Bella aesthetic treatments bring out your best self.</p>
            </div>
            <div>
				<Img className="mx-auto mb-6" fluid={data.skinCareServices.childImageSharp.fluid} alt="Skin Care Services" />
              	<h3 className="heading-four mb-4">Skin Care Services</h3>
              	<p className="mb-0">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services;