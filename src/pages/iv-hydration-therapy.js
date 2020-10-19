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
        title="IV Hydration Therapy San Diego & Carlsbad | Karma Spa"
        description="At Karma Spa, our San Diego IV hydration therapy delivers essential nutrients into your body. Browse our IV infusion & injection packages today!"
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
        <h1>IV Hydration Therapy</h1>
        <p className="mb-2 md:mb-0">Our San Diego IV hydration therapy delivers essential nutrients into your body. Benefits include increased energy, boosted immune system, improved alertness, quick hydration, and reduced stress. These IV infusions and injections are available at our Hillcrest and Carlsbad locations!</p>
      </HeroSplit>

      <ScrollWrapper>
		<ScrollNavigation>
			<li><AnchorLink to="/iv-hydration-therapy/#section-1" title="IV Infusions" stripHash /></li>
			<li><AnchorLink to="/iv-hydration-therapy/#section-2" title="IV Injections" stripHash /></li>
		</ScrollNavigation>		  
		<ScrollContent>
			<div id="section-1">
				<div className="mb-20 lg:mb-40">
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $199</span>
					<h3>Hangover</h3>
					<p>Alleviate symptoms of hangover including dehydration, headache, and nausea. 500 ml of IV fluids.</p>
					<p className="text-small font-medium tracking-wide text-gray-900">
						Ketorolac (anti-inflammatory & analgesic)<br />
						Ondansetron (anti-nausea)
					</p>
				</div>
				<div className="mb-20 lg:mb-40">
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $150</span>
					<h3>Hydr8</h3>
					<p>Recover from heat exhaustion, dehydration, and muscle fatigue. </p>
					<p className="text-small font-medium tracking-wide text-gray-900">
						Vitamin B Complex<br />
						500 ml of IV fluids
					</p>
				</div>
				<div className="mb-20 lg:mb-40">
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $199</span>
					<h3>Hydr8 Plus</h3>
					<p>Replenish and rehydrate the body to improve overall health and energy.</p>
					<p className="text-small font-medium tracking-wide text-gray-900">
						Ascorbic Acid (Vitamin C)<br />
						Vitamin B Complex<br />
						Magnesium Cl, Zinc, Manganese, Copper, Selenium<br />
						500 ml of IV fluids
					</p>
				</div>
				<div className="mb-20 lg:mb-40">
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $199</span>
					<h3>Beauty</h3>
					<p>Enhance beauty from within and improve hair, skin, and nails.</p>
					<p className="text-small font-medium tracking-wide text-gray-900">
						Ascorbic Acid (Vitamin C)<br />
						Vitamin B Complex<br />
						Biotin<br />
						500 ml of IV fluids
					</p>
				</div>
				<div className="mb-20 lg:mb-40">
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $150</span>
					<h3>Simply C </h3>
					<p>Infused with Vitamin C to boost the immune system.</p>
					<p className="text-small font-medium tracking-wide text-gray-900">
						Ascorbic Acid (Vitamin C)<br />
						500 ml of IV fluids
					</p>
				</div>							
							
			</div>

			<div id="section-2">
				<div className="mb-20 lg:mb-40">
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $25</span>
					<h3>MICC Injection </h3>
					<p>This is a weekly injection specially formulated to help the body turn fat into energy and are also powerful antioxidants. </p>
					<p className="text-small font-medium tracking-wide text-gray-900">
						Methionine: Helps break down sugars and carbohydrates and convert to energy.<br />
						Inositol: Converts food to energy.<br />
						Choline: Cuts muscle recovery time and helps convert fat to energy.<br />
						Cyanocobalamin B12: Improves energy and brain function.
					</p>
				</div>
				<div>
					<span class="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $25</span>
					<h3>Vitamin B12 injection</h3>
					<p>This is a monthly injection to improve energy and brain function.</p>
				</div>				
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
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/iv-treatments-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/iv-treatments-twitter.jpg"}) {
    publicURL
  }    

  heroDesktop: file(relativePath: {eq: "services/iv-hydration/iv-hydration-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1358, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
	  }
    }
  }
  heroMobile: file(relativePath: {eq: "services/iv-hydration/iv-hydration-hero-mobile.jpg"}) {
    childImageSharp {
      fixed(width: 828, height: 956, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }     
}
`