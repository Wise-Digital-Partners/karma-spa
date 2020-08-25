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
        <h1>Massage Services</h1>
        <p className="mb-2 md:mb-0">Relax. Reduce pain and stress. Improve circulation and flexibility. Prevent injury and facilitate healing. Massage has many benefits, and we have many options. Your next indulgence awaits.</p>
      </HeroSplit>

	  <ScrollWrapper>
		<ScrollNavigation>
			<li><AnchorLink to="/massage-services/#section-1" title="Deep Tissue Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-2" title="Couples Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-3" title="Hot Oil Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-4" title="Back/Shoulder Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-5" title="Swedish Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-6" title="Thai Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-7" title="Hot Stone Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-8" title="Sports Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-9" title="Tuina Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-10" title="Aromatherapy" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-11" title="Acupressure" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-12" title="Double Indulgence" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-13" title="Reflexology" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-14" title="Foot & Body Fusion" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-15" title="Prenatal Body Massage" stripHash /></li>
			<li><AnchorLink to="/massage-services/#section-16" title="Craniosacral Massage Therapy" stripHash /></li>
		</ScrollNavigation>		  
		<ScrollContent>
			<div id="section-1" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">01</span>
				<h3 className="mb-1">Deep Tissue Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Firm pressure with amazing benefits</p>
				<p>Slow, deep strokes reduce inflammation and tension in muscle or tissue. This massage therapy is particularly helpful for chronic aches and pains. If you have a stiff neck and upper back, low back pain, leg muscle tightness, or sore shoulders—and you’re not a massage first-timer—this is for you. </p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
				</p>
				<ButtonGhost href="/deep-tissue-massage/" text="Learn More"/>
			</div>

			<div id="section-2" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">02</span>
				<h3 className="mb-1">Couples Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Share your day of pampering</p>
				<p>Two people are massaged in the same room at the same time by two different massage therapists. Great for dates or for catching up with a friend. Share a relaxing Swedish massage or deep tissue experience side-by-side. Many of our services can be done in our couples room—prices may vary.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$100 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$135 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$175 (2 Hours)<br/><br className="block lg:hidden" />
					Four Hands: <br className="block lg:hidden" />
					$175 (1 Hour)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$255 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$335 (2 Hours)
				</p>
			</div>

			<div id="section-3" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">03</span>
				<h3 className="mb-1">Hot Oil Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Great after a busy day</p>
				<p>Relieve stress and strain after a busy workday with a soothing and relaxing hot oil massage. Hot oil massage improves circulation in both the head and neck, relaxes the body, and brings oxygenated blood to the roots. Choose from a Swedish or deep tissue massage, and we’ll take care of the rest.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
				</p>
			</div>

			<div id="section-4" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">04</span>
				<h3 className="mb-1">Back/Shoulder Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Relieve stress in key areas</p>
				<p>Need to relieve stress or complaints in your back, neck, and shoulder areas? This type of massage therapy is for you. Relax and ease tension in the areas where muscle problems most occur. Anyone with stress buildup due to lifestyle, computer use, or everyday life will benefit.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
				</p>
			</div> 

			<div id="section-5" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">05</span>
				<h3 className="mb-1">Swedish Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Light pressure for easy relaxation</p>
				<p>New to massage? Start here! With its lighter pressure and longer strokes, Swedish massage is the most common and best-known type of Western massage. It relaxes the entire body and reduces tension. If it’s your first time or you don’t get massages often, Swedish massage is perfect for you.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
				</p>
			</div>  

			<div id="section-6" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">06</span>
				<h3 className="mb-1">Thai Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Yoga without the work</p>
				<p>Thai massage is like doing yoga but in massage form. Your massage therapist will use their hands, knees, legs, and feet to move you into a series of yoga-like stretches. Thai massage is more energizing and rigorous than more classic forms of massage, and your body will love you for it.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$65 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$85 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$105 (2 Hours)
				</p>
			</div>  

			<div id="section-7" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">07</span>
				<h3 className="mb-1">Hot Stone Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Our Karma Spa specialty</p>
				<p>Our therapists use smooth, water-heated stones to warm up tight muscles and bring you relaxation more deeply, more quickly. We start with Swedish massage on your back before incorporating the stones for a customized massage throughout the entire body. It’s a unique, rejuvenating experience.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$75 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$105 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$135 (2 Hours)<br/><br className="block lg:hidden" />
					Couples: <br className="block lg:hidden" />
					$140 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$200 (90 Minutes)
				</p>
			</div>  

			<div id="section-8" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">08</span>
				<h3 className="mb-1">Sports Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Perfect for athletic guests</p>
				<p>Sports massage was developed to help athletes prepare their bodies for optimal performance, recover after a big event, or function well during training. It emphasizes prevention and healing of injuries to the muscles and tendons. Our therapist will generally incorporate stretching and concentrate on a specific problem area.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$65 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$85 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$105 (2 Hours)
				</p>
			</div>  

			<div id="section-9" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">09</span>
				<h3 className="mb-1">Tuina Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Chinese massage without oil or lotion</p>
				<p>Tuina is a hands-on body treatment influenced by Chinese taoist and martial arts principles. Using gentle or firm techniques, we will brush, knead, roll/press, and rub the areas between each of the joints, known as the eight gates. The goal is to open the body’s defensive chi and get energy moving in the muscles.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
				</p>
			</div>

			<div id="section-10" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">10</span>
				<h3 className="mb-1">Aromatherapy Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Enhance your massage with essential oils</p>
				<p>Aromatherapy massage incorporates scented essential oils to improve your mental and physical wellbeing. At Karma, our massage therapists use only the best organic oils for aromatherapy. Choose from our relaxing Swedish or deep tissue massage, and relax as we bring you a unique multi-sensory experience.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$65 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$85 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$105 (2 Hours)
				</p>
			</div> 

			<div id="section-11" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">11</span>
				<h3 className="mb-1">Acupressure</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Acupuncture without the needles</p>
				<p>Acupressure (also called pressure acupuncture) has been used for thousands of years in China, but you can get all its benefits right here. Your massage therapist will gently apply pressure to special acupressure points throughout the body to promote total relaxation and wellness.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
				</p>
			</div> 

			<div id="section-12" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">12</span>
				<h3 className="mb-1">Double Indulgence</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Two therapists, four hands</p>
				<p>Four-handed massage involves two therapists working on you at the same time, mirroring each other’s movements. This type of massage is a must for the experienced client as well as those wanting to indulge in an unforgettable journey in massage. Give it a try and experience ultimate relaxation.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$100 (1 Hour)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$140 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$180 (2 Hours)
				</p>
			</div> 

			<div id="section-13" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">13</span>
				<h3 className="mb-1">Reflexology</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Stimulate your pressure points</p>
				<p>Reflexology is a therapeutic method of relieving pain by stimulating predefined pressure points on the feet and hands. These pressure points are reputed to connect directly through the nervous system and affect the bodily organs and glands. At Karma Spa, we extend this technique to the whole body.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$40 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$60 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (2 Hours)<br/><br className="block lg:hidden" />
					Prenatal: <br className="block lg:hidden" />
					$45 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$65 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$85 (2 Hours)<br/><br className="block lg:hidden" />
					Add foot scrub for only $20<br/><br className="block lg:hidden" />
					All Clothes On
				</p>
			</div> 

			<div id="section-14" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">14</span>
				<h3 className="mb-1">Foot & Body Fusion</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Treat your feet and entire body</p>
				<p>Our massage therapists use reflexology to relieve pain and tension in your feet and body. We offer a few different options, including a foot scrub for only $10 more, and a prenatal version of Foot & Body Fusion. Whatever you choose, your body will be refreshed. This is a “clothes-on” service.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$45 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					65 (90 Minutes) <br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$85 (2 Hours)  Add foot scrub for only $20.<br/><br className="block lg:hidden" />
					Prenatal: <br className="block lg:hidden" />
					$50 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$70 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$90 (2 Hours)
				</p>
			</div> 

			<div id="section-15" className="mb-18 lg:mb-28">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">15</span>
				<h3 className="mb-1">Prenatal Body Massage</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Get refreshed during pregnancy</p>
				<p>This technique involves deep bodywork designed to improve your circulation, take some of the strain off your muscles and joints, and re-energize you. Increase blood flow (a must when you’re pregnant) and keep your lymphatic system working at peak efficiency, flushing out toxins from your body!</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$65 (1 Hour)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$85 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$105 (2 Hours)
				</p>
			</div> 

			<div id="section-16">
				<span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">16</span>
				<h3 className="mb-1">Craniosacral Massage Therapy</h3>
				<p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Head in the direction of relaxation</p>
				<p>Craniosacral massage therapy is a gentle, clothes-on, noninvasive form of bodywork. Your massage therapist will focus on the bones of the head, spinal column and sacrum. The goal is to release compression in those areas in order to alleviate stress and pain. Rest your weary head with us.</p>
				<p className="text-small font-medium tracking-wide text-gray-900">
					$60 (60 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$80 (90 Minutes)<br className="block lg:hidden" /><span className="hidden lg:inline lg:mx-1">•</span>
					$100 (2 Hours)
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
  openGraphImage: file(relativePath: {eq: "open-graph/facebook/massage-services-facebook.jpg"}) {
    publicURL
  }
  twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/massage-services-twitter.jpg"}) {
    publicURL
  }    
  heroDesktop: file(relativePath: {eq: "services/massage/massage-services-hero-desktop.jpg"}) {
    childImageSharp {
      fixed(width: 1440, height: 1358, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  heroMobile: file(relativePath: {eq: "services/massage/massage-services-hero-mobile.jpg"}) {
    childImageSharp {
      fixed(width: 828, height: 956, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }     
}
`