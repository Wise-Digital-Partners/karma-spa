import React from "react";
import { graphql } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
import ScrollWrapper from "../components/Scroll/ScrollWrapper"
import ScrollNavigation from "../components/Scroll/ScrollNavigation"
import ScrollContent from "../components/Scroll/ScrollContent"
// import ButtonGhost from "../components/Button/ButtonGhost"
import CTABackgroundImage from "../components/CTA/CTABackgroundImage"

export const Page = ({data}) => {

  const heroImages = [
    data.heroDesktop.childImageSharp.fixed,
    {
    ...data.heroMobile.childImageSharp.fixed,
    media: `(max-width: 1023px)`,
    },
  ]
 
  return (
    <Layout 
      headerStyle="overlap"
      headerLinkColor="black"
      headerHasBorder={false}
    >
      <SEO
        title="Skin Care Services San Diego & Carlsbad | Karma Spa"
        description="Karma Spa offers San Diego skin care services at Hillcrest & Carlsbad locations. Book a facial, waxing session, scrubs, or sauna session today!"
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
        <h1>Skin Care Services</h1>
        <p className="mb-2 md:mb-0">Show yourself some extra love with our skin care services! Stress, free radicals, sun damage, and many other factors impact our skin. Find the right service for your needs today, whether it’s a facial, waxing session, scrubs, or sauna session.</p>
      </HeroSplit>

      <ScrollWrapper>
		<ScrollNavigation>
			<li><AnchorLink to="/skin-care-services/#section-1" title="Karma Spa Signature Facial" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-2" title="O2 Facial" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-3" title="Oxygen Facial" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-4" title="HydraFacial" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-5" title="Back Facial" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-6" title="Waxing" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-7" title="Full Spectrum Infrared Sauna" stripHash /></li>
			<li><AnchorLink to="/skin-care-services/#section-8" title="Sauna & Steam Room (SD)" stripHash /></li>
		</ScrollNavigation>		  
		<ScrollContent>
			<div id="section-1" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">01</span>
				<h3>Karma Spa Signature Facial</h3>
				<p>Our Signature Facial is a relaxing deep cleansing facial. Cleanses, exfoliates, and nourishes the skin, promoting a clear, well-hydrated complexion.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">Price: $89 (60 Minutes)</p>
			</div>

			<div id="section-2" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">02</span>
				<h3>O2 Facial</h3>
				<p>Rejuvenate skin with oxygen infusion, plant-derived stem cells, peptides, and a high concentration of enzymatic botanicals.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">Price: $99 (60 Minutes)</p>
			</div>

			<div id="section-3" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">03</span>
				<h3>Oxygen Facial</h3>
				<p>Experience deep exfoliation without the downtime of a chemical peel! This exfoliating facial is not recommended for sensitive skin. Choose between lighting treatment for hyperpigmentation or rejuvenating treatment for fine lines and wrinkles.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">Price: $119 (60 Minutes)</p>
			</div> 

			<div id="section-4" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">04</span>
				<h3>HydraFacial</h3>
				<p>Get clearer skin through hydradermabrasion, which combines cleansing, exfoliation, extraction, hydration and antioxidant protection all at once. This treatment is soothing, moisturizing, non-invasive and non-irritating.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">Price: $145 (45 Minutes)</p>
			</div>  

			<div id="section-5" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">05</span>
				<h3>Back Facial</h3>
				<p>We’ve got your back! Our back facial treatment includes Dr. Schwab Products, a steam session, cleansing, exfoliation, extractions, and finishing masks.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">Price: $75 (30 Minutes)</p>
			</div>  

			<div id="section-6" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">06</span>
				<h3>Waxing</h3>
				<p>Remove unwanted hair and enjoy smooth skin with our waxing services. </p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Brow: $25<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Nose: $20<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Upper Lip: $20<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Full Face: $50<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Underarm: $30<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Half Arm: $35<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Full Arm: $45<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Half Leg: $55<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Full Leg: $75<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Chest: $40<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Full Back: $70<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Lower Back: $30<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Stomach: $40<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Brazilian Wax: $60 (Includes back strip; trimming: add $20)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Bikini Line: $40<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Bikini Front: $50<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					Full Body: by consultation
				</p>
			</div>  

			<div id="section-7" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">07</span>
				<h3>Full Spectrum Infrared Sauna</h3>
				<p>Spend some time in the sauna to look and feel great! Whether you want a traditional or infrared sauna experience, we’ve got you covered.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Infrared Sauna: <br className="block lg:hidden" />
					$20 (15 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$35 (30 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$55 (60 Minutes)<br/><br className="block lg:hidden" />
					Traditional Sauna: <br className="block lg:hidden" />
					$15 (15 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$30 (30 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$40 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$50 (90 Minutes)
				</p>
			</div> 
			<div id="section-8">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">08</span>
				<h3>Sauna & Steam Room (SD)</h3>
				<p>Sweat, relax, and promote body detoxification at Karma Spa’s steam room. Sauna and  sessions help to relieve pain, relax muscles, and more.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$11 (15 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$21 (30 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$31 (60 Minutes)
				</p>
			</div>			
		</ScrollContent>
	</ScrollWrapper>

    <CTABackgroundImage />
      
    </Layout>
  );
}

export default Page;

export const query = graphql`
{ 
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/skin-care-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/skin-care-twitter.jpg"}) {
    publicURL
  }    
  heroDesktop: file(relativePath: {eq: "services/skin-care/skin-care-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1358, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  heroMobile: file(relativePath: {eq: "services/skin-care/skin-care-hero-mobile.jpg"}) {
    childImageSharp {
      fixed(width: 828, height: 956, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }     
}
`