import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';
import tw from 'twin.macro'

import ButtonGhost from "../Button/ButtonGhost"

const StyledScroll = styled.section`
    ${tw`flex items-center justify-center`}
` 

const Scroll = () => {

	const data = useStaticQuery(graphql`
		{
            flowersDesktop: file(relativePath: {eq: "services/flowers-desktop.png"}) {
                childImageSharp {
                  fluid(maxWidth: 806, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
            flowersMobile: file(relativePath: {eq: "services/flowers-mobile.png"}) {
                childImageSharp {
                  fluid(maxWidth: 380, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            } 
		}
	`)     

    const flowerImages = [
        data.flowersDesktop.childImageSharp.fluid,
        {
        ...data.flowersMobile.childImageSharp.fluid,
            media: `(max-width: 767px)`,
        },
    ]

    return (
        <StyledScroll className="wrapper">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 row-gap-20 md:row-gap-0 ">
                    <div className="md:col-start-1 md:col-span-3 md:mr-4">
                        <nav className="scroll-navigation mt-20">
                            <ul>
                                <li>Deep Tissue Massage</li>  
                                <li>Couples Massage</li>
                                <li>Hot Oil Massage</li>
                                <li>Back/Shoulder Massage</li>
                                <li>Swedish Massage</li>
                                <li>Thai Massage</li>
                                <li>Hot Stone Massage</li>
                                <li>Sports Massage</li>
                                <li>Tuina Massage</li>
                                <li>Aromatherapy</li>
                                <li>Acupressure</li>
                                <li>Double Indulgence</li>
                                <li>Reflexology</li>
                                <li>Foot & Body Fusion</li>
                                <li>Prenatal Body Massage</li>
                                <li>Craniosacral Massage Therapy</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="md:col-end-13 md:col-span-9 relative bg-gray-100 px-28 py-28">
                        <div className="absolute right-0 top-0">
                            <Img fluid={flowerImages} alt="Flowers"/>
                        </div>
                        
                        <div className="mb-28" id="introduction">
                            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-8">01</span>
                            <h3>Deep Tissue Massage</h3>
                            <p className="font-heading text-2xlarge text-gray-900">Firm pressure with amazing benefits</p>
                            <p>Slow, deep strokes reduce inflammation and tension in muscle or tissue. This massage therapy is particularly helpful for chronic aches and pains. If you have a stiff neck and upper back, low back pain, leg muscle tightness, or sore shoulders—and you’re not a massage first-timer—this is for you. </p>
                            <p className="text-medium text-gray-900 font-semibold tracking-wide">$60 (60 Minutes) • $80 (90 Minutes) • $100 (2 Hours)</p>
                            <ButtonGhost href="/deep-tissue-massage/" text="Learn More"/>
                        </div>

                        <div id="request-response">
                            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-8">02</span>
                            <h3>Couples Massage</h3>
                            <p className="font-heading text-2xlarge text-gray-900">Share your day of pampering</p>
                            <p>Two people are massaged in the same room at the same time by two different massage therapists. Great for dates or for catching up with a friend. Share a relaxing Swedish massage or deep tissue experience side-by-side. Many of our services can be done in our couples room—prices may vary.</p>
                            <p className="text-medium text-gray-900 font-semibold tracking-wide">$100 (60 Minutes) • $135 (90 Minutes) • $175 (2 Hours)<br/>
                            Four Hands: $175 (1 Hour) • $255 (90 Minutes) • $335 (2 Hours)</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledScroll>
    );
}

export default Scroll;