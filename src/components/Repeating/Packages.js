import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ButtonGhost from '../Button/ButtonGhost'

const Packages = ({className}) => {

	const data = useStaticQuery(graphql`
		{
			packages: file(relativePath: {eq: "repeating/packages.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 1440, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}  
		}
	`)   

   return (
	   <div>
			<section className={`wrapper ${className}`}>
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-12 row-gap-5 md:row-gap-0 items-center">
						<div className="md:col-start-1 md:col-span-7">
							<Img fluid={data.packages.childImageSharp.fluid} alt="VIP Treatment" />
						</div>
						<div className="md:col-end-13 md:col-span-4">
							<h2 className="heading-three">Get the VIP Treatment. </h2>
							<p>Karma Spa now offers basic and VIP membership plans for regular guests. Get exclusive specials and earn points towards free massages.</p>
							<ButtonGhost href="/massage-membership/" text="Learn More" />
						</div>
					</div>
				</div>
			</section>
		</div>
   );
}

export default Packages;