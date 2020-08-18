import React from "react";
import { graphql } from 'gatsby';
// import Img from "gatsby-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
// import ButtonGhost from "../components/Button/ButtonGhost"
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
        <p className="text-2xlarge font-heading">Firm pressure with amazing benefits.</p>
      </HeroSplit>

      <section className="wrapper mt-12 md:mt-32">
        <div className="container">
          <header className="mb-12">
            <h2>Best Deep Tissue Massage in San Diego</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 row-gap-20 md:row-gap-0 md:col-gap-16">
            <div>
                <p>Ready for deep relaxation? Karma Spa’s massage therapists specialize in San Diego deep tissue massage. We combine firm pressure and slow strokes to reach deeper layers of muscle and tissue in your body. This helps ease tension and reduce pain and inflammation.</p>
            </div>
            <div>
              <p>Deep tissue massage therapy is particularly helpful for chronic aches and pains. If you have a stiff neck and upper back, low back pain, leg muscle tightness, or sore shoulders—and if you’re not a massage first-timer—this is the massage for you.</p>
            </div>
          </div>
        </div>
      </section>

			<section className="wrapper">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-12 row-gap-5 md:row-gap-0 items-center">
						<div className="md:col-start-1 md:col-span-7">
							{/* <Img fluid={data.packages.childImageSharp.fluid} alt="VIP Treatment" /> */}
						</div>
						<div className="md:col-end-13 md:col-span-4">
							<h3>What You Can Expect</h3>
							<p>When booking an appointment, you’ll be able to choose between a male or female therapist. We’ll make sure the amount of pressure applied to your body is what you’re looking for too.</p>
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
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/botox-fillers-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/botox-fillers-twitter.jpg"}) {
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
}
`