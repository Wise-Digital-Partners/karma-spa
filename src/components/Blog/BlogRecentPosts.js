import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Blog = () => {

	const data = useStaticQuery(graphql`
		{
			blogThumbnail_1: file(relativePath: {eq: "blog/benefits-to-infrared-light-therapy.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
            }
			blogThumbnail_2: file(relativePath: {eq: "blog/the-wonderful-world-of-aromatherapy-oils.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
            }
            blogThumbnail_3: file(relativePath: {eq: "blog/key-ways-that-message-helps-relieve-stress.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)     
     
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 row-gap-8 md:row-gap-0 md:col-gap-10">
            <div className="group relative">
                <div className="overflow-hidden mb-6">
                    <Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.blogThumbnail_1.childImageSharp.fluid} alt="5 Benefits to Infrared Light Therapy" />
                </div>
                <p className="text-xsmall text-gray-600 uppercase mb-2">March 20, 2017 | by Karma</p>
                <h4 className="heading-four mb-4 mb-0">5 Benefits to Infrared Light Therapy</h4>
                <AniLink fade to="/5-benefits-infrared-light-therapy/"><span className="link-overlay"></span></AniLink>
            </div>
            <div className="group relative">
                <div className="overflow-hidden mb-6">
                    <Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.blogThumbnail_2.childImageSharp.fluid} alt="The Wonderful World of Aromatherapy Oils" />
                </div>
                <p className="text-xsmall text-gray-600 uppercase mb-2">March 10, 2017 | by Karma</p>
                <h4 className="heading-four mb-4 mb-0">The Wonderful World of Aromatherapy Oils</h4>
                <AniLink fade to="/wonderful-world-aromatherapy-oils/"><span className="link-overlay"></span></AniLink>
            </div>
            <div className="group relative">
                <div className="overflow-hidden mb-6">
                    <Img className="transform scale-100 group-hover:scale-110 transition-all duration-500 ease-linear" fluid={data.blogThumbnail_3.childImageSharp.fluid} alt="Key Ways That Message Helps Relieve Stress" />
                </div>
                <p className="text-xsmall text-gray-600 uppercase mb-2">February 20, 2017 | by Karma</p>
                <h4 className="heading-four mb-4 mb-0">Key Ways That Message Helps Relieve Stress</h4>
                <AniLink fade to="/key-ways-massage-helps-relieve-stress/"><span className="link-overlay"></span></AniLink>
            </div>                     
        </div>
    );
}

export default Blog;