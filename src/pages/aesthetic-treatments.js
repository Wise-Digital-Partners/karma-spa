import React from "react";
import { graphql } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
import ScrollWrapper from "../components/Scroll/ScrollWrapper"
import ScrollNavigation from "../components/Scroll/ScrollNavigation"
import ScrollContent from "../components/Scroll/ScrollContent"
import ButtonGhost from "../components/Button/ButtonGhost"
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
        title=""
        description=""
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
        <h1>Aesthetic Treatments</h1>
        <p className="mb-2 md:mb-0">Enhance your natural beauty with Karma Bella Medical Aesthetics! In partnership with Karma Spa, we bring cutting edge cosmetic treatments and extensive expertise in the field of aesthetic medicine. Here are the treatments available in both Hillcrest and Carlsbad Karma Spa locations.</p>
      </HeroSplit>

      <ScrollWrapper>
		<ScrollNavigation>
			<li><AnchorLink to="/aesthetic-treatments/#section-1" title="Botox & Fillers" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-2" title="EmSculpt" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-3" title="Infra-Slim" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-4" title="Body Detox" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-5" title="IV Vitamin Drip Therapy" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-6" title="Kybella" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-7" title="Chemical Peels" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-8" title="Microneedling" stripHash /></li>
			<li><AnchorLink to="/aesthetic-treatments/#section-9" title="Latisse" stripHash /></li>
		</ScrollNavigation>		  
		<ScrollContent>
			<div id="section-1" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">01</span>
				<h3>Botox & Fillers</h3>
				<p>Be proactive in the anti-aging process! Restore a more youthful appearance with botox treatments and facial fillers.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Botox treatments start at $10.99 per unit<br />
					Dermal facial fillers start at $499
				</p>
				<ButtonGhost href="/botox-fillers/" text="Learn More"/>
			</div>

			<div id="section-2" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">02</span>
				<h3>EmSculpt</h3>
				<p>Define yourself with our EmSculpt body-contouring treatment. Experience quick, convenient, and comfortable muscle definition in just a few sessions.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Starts at $1,000 per treatment<br />
					(minimum of 4 treatments)
				</p>
			</div>

			<div id="section-3" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">03</span>
				<h3>Infra-Slim</h3>
				<p>Reduce fat, improve circulation, and detoxify your body with Infra-Slim. This 50-minute treatment is painless, relaxing, and non-invasive with multiple benefits.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$55 for individuals<br />
					$100 for couples
				</p>
			</div>

			<div id="section-4" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">04</span>
				<h3>Body Detox</h3>
				<p>Wherever your body toxins are, our Ionic Detox foot cleanse will help remove them comfortably. Add our body detox to any of our other services.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$11 (15 Minutes)<br />
					$21 (30 Minutes)
				</p>
			</div> 

			<div id="section-5" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">05</span>
				<h3>IV Vitamin Drip Therapy</h3>
				<p>Give your body a much-needed nutrient boost with our IV Vitamin Drip Therapy to hydrate quickly, increase energy, and reduce stress.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Injections start at $25<br />
					Infusions start at $150
				</p>
			</div>  

			<div id="section-6" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">06</span>
				<h3>Kybella</h3>
				<p>Reduce the appearance of discrete areas of fat under the chin using a naturally occurring molecule to help the body absorb and melt away fat cells.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">$799</p>
			</div>  

			<div id="section-7" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">07</span>
				<h3>Chemical Peels</h3>
				<p>Treat fine lines and wrinkles, large pores and dark spots, and tighten the skin with superficial peels. Medium-depth peels can help treat skin that has a significant amount of photodamage, sun spots, mild to moderate acne scars, crepey skin under the eyes or dark circles.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">Starts at $125</p>
			</div>  

			<div id="section-8" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">08</span>
				<h3>Microneedling</h3>
				<p>Stimulate collagen and elastin production through microneedling. Decrease the appearance of pigmentation, fine lines and wrinkles, enlarged pores, and mild acne scars. Treatment is most effective when done in a series of 2-3 sessions.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Special Introductory Price at $100<br />
					Regular Price at $130
				</p>
			</div>  

			<div id="section-9" className="mb-20 lg:mb-40">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">09</span>
				<h3>Latisse</h3>
				<p>LATISSE® solution is the first FDA-approved and clinically proven growth treatment for hypotrichosis (inadequate or not enough eyelashes). Ditch the mascara and fake eyelashes with longer, fuller natural lashes. Experience the LATISSE® difference today!</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					Special Introductory Price at $130<br />
					Regular Price at $150
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
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/aesthetic-treatments-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/aesthetic-treatments-twitter.jpg"}) {
    publicURL
  }    

  heroDesktop: file(relativePath: {eq: "services/aesthetic-treatments/aesthetic-treatments-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1358, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
	  }
    }
  }
  heroMobile: file(relativePath: {eq: "services/aesthetic-treatments/aesthetic-treatments-hero-mobile.jpg"}) {
    childImageSharp {
      fixed(width: 828, height: 956, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }     
}
`