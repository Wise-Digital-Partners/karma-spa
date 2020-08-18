import React, { Component } from 'react'
import { graphql } from "gatsby"
import {RadioGroup, Radio} from 'react-radio-group';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit"
import ButtonSolid from "../components/Button/ButtonSolid"

// Set Gift Card external link
let giftCardUrl = null;

export default class Page extends Component {
	constructor(props) {
	  super(props);
	  this.state = {selectedValue: ''};
	  this.handleChange = this.handleChange.bind(this);
	}
	  
	handleChange(value) {
		this.setState({selectedValue: value});
		
		if (value === 'Hillcrest'){
			giftCardUrl = 'http://www.secure-booker.com/karmaspa/ShopOnline/GiftCertificate.aspx';
		} else if (value === 'Carlsbad'){
			giftCardUrl = 'http://www.secure-booker.com/karmarelaxationspa2/ShopOnline/GiftCertificate.aspx';
		}
	}

  	render() {
		
		const heroImages = [
			this.props.data.heroDesktop.childImageSharp.fixed,
			{
			...this.props.data.heroMobile.childImageSharp.fixed,
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
				openGraphImage={this.props.data.openGraphImage.publicURL}
				twitterOpenGraphImage={this.props.data.twitterOpenGraphImage.publicURL}
			/>

			<HeroSplit 
				hasContainer={true}
				backgroundImageWrapperWidth="3/5"
				textWrapperWidth="2/5"
				backgroundImages={heroImages} 
				backgroundImageSide="left"
				backgroundSizeDesktop="cover" 
				backgroundSizeMobile="cover" 
				backgroundPositionDesktop="50% 50%" 
				backgroundPositionMobile="50% 50%" 
				minHeightDesktop="560px" 
				minHeightMobile="320px"
			>
				<h1>Gift Cards</h1>
				<p>Give the gift of affordable indulgence with our gift cards! They’re available for purchase online and in-store. Start with your preferred location below.</p>
				<RadioGroup 
					className="mb-8" 
					name="location" 
					selectedValue={this.state.selectedValue} 
					onChange={this.handleChange}
				>
					<legend className="text-small text-gray-700 font-bold mb-3">Select a Location</legend>
					<div className="flex flex-col mt-2 mb-1">
						<label className="relative pl-8 mb-2 cursor-pointer">
							<Radio value="Hillcrest" /> Hillcrest
							<span className="radio-checkmark"></span>
						</label>
						<label className="relative pl-8 mb-2 cursor-pointer">
							<Radio value="Carlsbad" /> Carlsbad
							<span className="radio-checkmark"></span>
						</label>
					</div>
				</RadioGroup>

				<ButtonSolid href={giftCardUrl} target="_blank" rel="noopener noreferrer" text="Customize Gift Card"/>
			</HeroSplit>
			
			</Layout>
		);
	}
}

export const query = graphql`
{
	openGraphImage: file(relativePath: {eq: "open-graph/facebook/gift-cards-facebook.jpg"}) {
		publicURL
	}
	twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/gift-cards-twitter.jpg"}) {
		publicURL
	}
	heroDesktop: file(relativePath: {eq: "about/gift-cards/gift-cards-hero.jpg"}) {
		childImageSharp {
			fixed(width: 1440, height: 1120, quality: 100) {
				...GatsbyImageSharpFixed_withWebp
			}
		}
	}
	heroMobile: file(relativePath: {eq: "about/gift-cards/gift-cards-hero.jpg"}) {
		childImageSharp {
			fixed(width: 1440, height: 1120, quality: 100) {
				...GatsbyImageSharpFixed_withWebp
			}
		}
	}  
}
`