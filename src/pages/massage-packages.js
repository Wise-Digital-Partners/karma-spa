import React from "react";
import { graphql } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SEO from "../components/SEO"
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
			title="Massage Packages San Diego & Carlsbad | Karma Spa"
			description="Karma Spa's San Diego massage packages bring you affordable indulgence. Get the relaxation you need at our Hillcrest or Carlsbad locations."
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
			<h1>Massage Packages</h1>
			<p className="mb-2 md:mb-0">Get the most out of your relaxation journey with our massage packages. Experience multiple benefits in a single indulgent session that will pamper you properly when you need it most. Our Hillcrest and Carlsbad massage spas are ready to deliver.</p>
		</HeroSplit>

		<ScrollWrapper>
			<ScrollNavigation>
				<li><AnchorLink to="/massage-packages/#section-1" title="The Premier Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-2" title="The Royal Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-3" title="The President Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-4" title="The First Lady Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-5" title="The Duchess Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-6" title="The Princess Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-7" title="The CEO Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-8" title="The Vice President Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-9" title="The Doctor Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-10" title="The Director Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-11" title="The Runners’ Package" stripHash /></li>
				<li><AnchorLink to="/massage-packages/#section-12" title="The Secretary Package" stripHash /></li>
			</ScrollNavigation>		  
			<ScrollContent>

				<div id="section-1" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $125</span>
					<h3 className="mb-1">The Premier Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Want a well-rounded massage experience? The Premier Package is for you.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Body Massage (60 Minutes)</li>
						<li className="text-gray-600">Foot Massage (30 Minutes)</li>
						<li className="text-gray-600">Infra-Slim Body Wrap</li>
						<li className="text-gray-600">Body Detox (15 Minutes)</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-2" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $135</span>
					<h3 className="mb-1">The Royal Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Feel like royalty with two therapists for maximum relaxation. </p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Body Massage (60 Minutes)</li>
						<li className="text-gray-600">Body Scrub (15 Minutes)</li>
						<li className="text-gray-600">Body Detox (15 Minutes)</li>
						<li className="text-gray-600">Sauna Session</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-3" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $105</span>
					<h3 className="mb-1">The President Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Stay on top of your game with a massage & sauna or steam session.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Clothes-On Foot & Body Fusion Massage (60 Minutes)</li>
						<li className="text-gray-600">Body Massage (60 Minutes)</li>
						<li className="text-gray-600">Vichy Shower</li>
						<li className="text-gray-600">Fruit Skin Conditioner</li>
						<li className="text-gray-600">Sauna or Steam Session</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-4" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $145</span>
					<h3 className="mb-1">The First Lady Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Get pampered from head to toe with two and a half hours of indulgence.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Facial (60 Minutes)</li>
						<li className="text-gray-600">Body Massage (60 Minutes)</li>
						<li className="text-gray-600">Body Scrub (15 Minutes)</li>
						<li className="text-gray-600">Sauna Session</li>
						<li className="text-gray-600">Optional: Sea Salt Scrub with Aromatherapy </li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-5" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $105</span>
					<h3 className="mb-1">The Duchess Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Hydrate and detoxify your entire body with this lush package.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Dry Brushing Scrub (30 Minutes)</li>
						<li className="text-gray-600">Aromatherapy Body Butter</li>
						<li className="text-gray-600">Hydrating Body Wrap</li>
						<li className="text-gray-600">Hydrating Body Wrap</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-6" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $90</span>
					<h3 className="mb-1">The Princess Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Ladies, get the royal treatment with this luxurious 90-minute package.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">French Facial with Mini Scalp & Shoulder Massage (60 Minutes)</li>
						<li className="text-gray-600">Leg & Foot Massage (15 Minutes)</li>
						<li className="text-gray-600">Body Detox (15 Minutes)</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-7" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $100</span>
					<h3 className="mb-1">The CEO Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Make room in your busy schedule for some pampering.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Body Detox (15 Minutes)</li>
						<li className="text-gray-600">Body Massage (90 Minutes)</li>
						<li className="text-gray-600">Vichy Shower with Fruit Skin Conditioner</li>
						<li className="text-gray-600">Sauna Session</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-8" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $80</span>
					<h3 className="mb-1">The Vice President Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Experience the benefits of massage therapy and body detox in one session.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Body Detox (15 Minutes)</li>
						<li className="text-gray-600">Body Massage (60 Minutes)</li>
						<li className="text-gray-600">Vichy Shower with Fruit Skin Conditioner</li>
						<li className="text-gray-600">Sauna Session</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-9" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $70</span>
					<h3 className="mb-1">The Doctor Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">You heal and take care of others. Take some time to care for and treat yourself.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Clothes-On Scalp Massage with Hair Conditioning Treatment</li>
						<li className="text-gray-600">Moisturizing Facial Mask</li>
						<li className="text-gray-600">Upper Body Massage (xx Minutes)</li>
						<li className="text-gray-600">Leg & Foot Massage (xx Minutes)</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-10" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $65</span>
					<h3 className="mb-1">The Director Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Take a moment to loosen up, detox your body, and calm your mind.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Clothes-On Upper Body Massage (30 Minutes)</li>
						<li className="text-gray-600">Clothes-On Reflexology Session (30 Minutes)</li>
						<li className="text-gray-600">Body Detox (15 Minutes)</li>
						<li className="text-gray-600">Foot Mask Treatment</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-11" className="mb-20 lg:mb-40">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $55</span>
					<h3 className="mb-1">The Runners’ Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Recover well and run better with this package tailored just for runners.</p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Clothes-On Body Massage (30 Minutes)</li>
						<li className="text-gray-600">Clothes-On Reflexology Session (30 Minutes)</li>
						<li className="text-gray-600">Stretching (15 Minutes)</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
				</div>

				<div id="section-12">
					<span className="inline-flex items-center bg-white rounded text-gray-900 text-lg font-medium px-3 py-2 mb-8"><i class="fas fa-tag text-primary_400 mr-2"></i> $50</span>
					<h3 className="mb-1">The Secretary Package</h3>
					<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Treat yourself and take a break after long hours at the desk.  </p>
					<ul className="styled-list mb-8">
						<li className="text-gray-600">Clothes-On Massage (30 Minutes - Scalp, Shoulders, Arms, and Hands)</li>
						<li className="text-gray-600">Body Detox (30 Minutes)</li>
					</ul>
					<span className="bg-white rounded-xl text-primary_400 text-xsmall font-medium tracking-wide px-3 py-1">$200 Value — you save $75</span>
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
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/packages-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/packages-twitter.jpg"}) {
    publicURL
  }    
  heroDesktop: file(relativePath: {eq: "services/special-packages/massage-packages-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1358, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  heroMobile: file(relativePath: {eq: "services/special-packages/massage-packages-hero-mobile.jpg"}) {
    childImageSharp {
      fixed(width: 828, height: 956, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }     
}
`