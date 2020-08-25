import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
import ButtonGhost from "../components/Button/ButtonGhost"
import TestimonialBackgroundImage from "../components/Testimonial/TestimonialBackgroundImage"
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
			<h1>San Diego Deep Tissue Massage</h1>
			<p className="text-2xlarge font-heading mb-0">Firm pressure with amazing benefits.</p>
      	</HeroSplit>

      	<section className="wrapper mt-12 md:mt-32">
			<div className="container">
				<header className="md:mb-12">
					<h2>Best Deep Tissue Massage in San Diego</h2>
				</header>
				<div className="grid grid-cols-1 md:grid-cols-2 row-gap-4 md:row-gap-0 md:col-gap-16">
					<div>
						<p className="mb-0">Ready for deep relaxation? Karma Spa’s massage therapists specialize in San Diego deep tissue massage. We combine firm pressure and slow strokes to reach deeper layers of muscle and tissue in your body. This helps ease tension and reduce pain and inflammation.</p>
					</div>
					<div>
						<p className="mb-0">Deep tissue massage therapy is particularly helpful for chronic aches and pains. If you have a stiff neck and upper back, low back pain, leg muscle tightness, or sore shoulders—and if you’re not a massage first-timer—this is the massage for you.</p>
					</div>
				</div>
			</div>
		</section>

		<section className="wrapper">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-12 row-gap-8 md:row-gap-0 items-center">
					<div className="md:col-start-1 md:col-span-7">
						<img src="https://via.placeholder.com/720x560?text=FPO" />
						{/* <Img fluid={data.packages.childImageSharp.fluid} alt="VIP Treatment" /> */}
					</div>
					<div className="md:col-end-13 md:col-span-4">
						<h3>What You Can Expect</h3>
						<p className="mb-0">When booking an appointment, you’ll be able to choose between a male or female therapist. We’ll make sure the amount of pressure applied to your body is what you’re looking for too.</p>
					</div>
				</div>
			</div>
		</section>

		<section className="wrapper">
			<div className="container">
				<div className="pb-12 md:py-20 md:border-t border-b border-solid border-gray-200 border-opacity-50">
					<header className="text-center max-w-2xl mx-auto">
						<Img className="mb-3" fixed={data.flower.childImageSharp.fixed} alt="Karma Spa flower logo" />
						<h3>Fun Fact</h3>
						<p className="mb-0">Research studies confirm that deep tissue massage has helped those with plantar fasciitis, fibromyalgia, and chronic tension headaches.</p>
					</header>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-12">
					<div className="md:col-start-1 md:col-span-6 pt-10 md:pt-20 pb-10 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r border-solid border-gray-200 border-opacity-50">
						<h3>Deep Tissue Massage Benefits</h3>
						<ul className="styled-list">
							<li className="text-xl text-gray-600">Relieve stress & tension</li>
							<li className="text-xl text-gray-600">Reduce inflammation</li>
							<li className="text-xl text-gray-600">Lessen aches & pains</li>
							<li className="text-xl text-gray-600">Promote healing</li>
							<li className="text-xl text-gray-600">Stimulate flexibility </li>
							<li className="text-xl text-gray-600">Relax deeply</li>
						</ul>
					</div>
					<div className="md:col-end-13 md:col-span-6 pt-10 md:pt-20 md:pl-10 lg:pl-16">
						<h3>Found in These Packages:</h3>
						<ul className="styled-list mb-8">
							<li className="text-xl text-gray-600">The Premier Package</li>
							<li className="text-xl text-gray-600">The President Package</li>
							<li className="text-xl text-gray-600">The Vice President Package</li>
							<li className="text-xl text-gray-600">The First Lady Package</li>
							<li className="text-xl text-gray-600">The CEO Package</li>
						</ul>
						<ButtonGhost href="#" text="Browse Packages" />
					</div>
				</div>
			</div>
		</section>      
    
      <TestimonialBackgroundImage />

      <CTABackgroundImage />
      
    </Layout>
  );
}

export default Page;

export const query = graphql`
{ 
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/deep-tissue-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/deep-tissue-twitter.jpg"}) {
    publicURL
  }
  heroDesktop: file(relativePath: {eq: "services/massage/deep-tissue/deep-tissue-hero.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1120, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  heroMobile: file(relativePath: {eq: "services/massage/deep-tissue/deep-tissue-hero.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1120, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  } 
  flower: file(relativePath: {eq: "repeating/flower.png"}) {
    childImageSharp {
      fixed(width: 48, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }      
}
`