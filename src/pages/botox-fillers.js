import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
import CTABackgroundImage from "../components/CTA/CTABackgroundImage"

export const Page = ({data}) => {

	const heroImages = [
		data.heroDesktop.childImageSharp.fixed,
		{
		...data.heroMobile.childImageSharp.fixed,
			media: `(max-width: 767px)`,
		},
	]

	return (
		<Layout 
			headerStyle="classic"
			headerLinkColor="black"
			headerHasBorder={false}
		>
			<SEO
				title=""
				description=""
				openGraphImage={data.openGraphImage.publicURL}
				twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
			/>

			<HeroSplit 
				hasContainer={true}
				backgroundImageWrapperWidth="3/5"
				textWrapperWidth="2/5"
				backgroundImages={heroImages} 
				backgroundImageSide="right"
				backgroundSizeDesktop="cover" 
				backgroundSizeMobile="cover" 
				backgroundPositionDesktop="50% 50%" 
				backgroundPositionMobile="50% 50%" 
				minHeightDesktop="560px" 
				minHeightMobile="320px"
			>
				<h1>Botox & <br className="hidden md:block"/> Facial Fillers</h1>
				<p className="mb-0">Restore a more youthful look and rejuvenate your skin with neuromodulators and facial fillers. Our licensed aesthetic medicine team uses only safe and FDA-approved products for great results. Schedule your free consultation today! </p>
			</HeroSplit>

			<section className="wrapper">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-12 row-gap-5 md:row-gap-0 items-center">
						<div className="md:col-start-1 md:col-span-7">
				<Img fluid={data.team.childImageSharp.fluid} alt="Team" />
						</div>
						<div className="md:col-end-13 md:col-span-4">
							<h2>About Karma Bella</h2>
							<p>Trust only licensed professionals who use FDA-approved treatments for your aesthetic needs. At Karma Bella, our team provides high-quality aesthetic medicine services to enhance our clients’ natural beauty. For the latest in anti-aging, look no further than Karma Bella.</p>
						</div>
					</div>
				</div>
			</section>
		
			<section className="bg-gray-100 py-18 md:py-36">
				<div className="container">
					<div className="bg-white shadow-xl px-20 py-32">
						<span className="block text-xs font-bold text-gray-900 mb-8">01</span>
						<div className="grid grid-cols-1 md:grid-cols-2 row-gap-10 md:row-gap-0 md:col-gap-20 mb-24">
							<div className="md:col-start-1 md:col-span-4">
								<h2>Botox</h2>
							</div>
							<div className="md:col-end-13 md:col-span-7">
								<p>Botox, Xeomin and Dysport are excellent options for men and women who want to be proactive in the anti-aging process. Neuromodulators relax muscles to prevent and smooth crow’s feet, forehead wrinkles and fine lip lines. Neuromodulators are also used for non-surgical brow lifts and can lessen TMJ.</p>
								<p className="text-small text-gray-900 mb-0">Botox: $10.99/unit<br/>
								Xeomin: $10.99/unit<br/>
								Dysport: $4.40/unit</p>
							</div>
						</div>

						<span className="block text-xs font-bold text-gray-900 mb-8">02</span>
						<div className="grid grid-cols-1 md:grid-cols-2 row-gap-10 md:row-gap-0 md:col-gap-20">
							<div className="md:col-start-1 md:col-span-4">
								<h2>Facial Fillers</h2>
							</div>
							<div className="md:col-end-13 md:col-span-7">
								<p>We carry FDA-approved products Restylane, Juvéderm, Beloterro, and Radiesse) for both men and women interested in restoring and preserving a youthful complexion. Fillers replace volume to address fine lines around lips, circles under the eyes, laugh lines and increases fullness of the lips, cheeks and temporal areas and last 6 months to 2 years depending on the area treated.</p>
								<p className="text-small text-gray-900 mb-5">Belotero Balance</p>
								<ul className="styled-list mb-12">
									<li className="text-sm leading-4">Add subtle volume to lips</li>
									<li className="text-sm leading-4">Soften vertical lip lines</li>
								</ul>
								<p className="text-small text-gray-900 mb-5">Restalyne</p>
								<ul className="styled-list mb-12">
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Restalyne Silk</span> for lips and lines around them</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Restalyne Refyne</span> for moderate smile and laugh lines</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Restalyne Defyne</span> for deep smiles and laugh lines</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Restalyne</span> for facial wrinkles and folds</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Voluma/Restalyne Lyft</span> lift and contour cheeks</li>
								</ul>
								<p className="text-small text-gray-900 mb-5">Juvederm</p>
								<ul className="styled-list">
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Juvederm Ultra XC</span> adds fullness to lips</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Juvederm Vobella XC</span> adds subtle lip volume and softens vertical lip lines</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Juvederm XC</span> reduce lines and wrinkles around your nose and mouth</li>
									<li className="text-sm leading-4"><span className="font-bold italic mr-1">Juvederm Vollure XC</span> add volume to lines around your nose and mouth</li>
								</ul>									
							</div>
						</div>						
					</div>
				</div>
			</section>

		<CTABackgroundImage backgroundImageAlternative={true} />
		
		</Layout>
	);
}

export default Page;

export const query = graphql`
{ 
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/botox-fillers-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/botox-fillers-twitter.jpg"}) {
    publicURL
  }
  heroDesktop: file(relativePath: {eq: "services/aesthetic-treatments/botox-fillers/botox-fillers-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1120, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  heroMobile: file(relativePath: {eq: "services/aesthetic-treatments/botox-fillers/botox-fillers-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1120, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  team: file(relativePath: {eq: "services/team.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1440, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }       
}
`