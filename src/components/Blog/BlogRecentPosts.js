import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Blog = () => {

	const data = useStaticQuery(graphql`
		{
			blogThumbnail_1: file(relativePath: {eq: "blog/how-message-can-help-your-fibromyalgia.jpg"}) {
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
        <section className={`wrapper`}>
            <div className="container">
                <header className="md-8 md:mb-16">
                    <h2>The Karma Blog</h2>
                    <p className="text-2xlarge font-heading">Discover what’s new and learn how to live a life of true relaxation.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 row-gap-8 md:row-gap-0 col-gap-10">
                    <div>
                        <Img className="mb-6" fluid={data.blogThumbnail_1.childImageSharp.fluid} alt="Karma Spa flower logo" />
                        <p className="flex items-center text-small text-gray-600 uppercase mb-2">January 20, 2017 | by Karma</p>
                        <h4 className="heading-four mb-4 mb-0">How Message Can Help Your Fibromyalgia</h4>
                    </div>
                    <div>
                        <Img className="mb-6" fluid={data.blogThumbnail_2.childImageSharp.fluid} alt="Karma Spa flower logo" />
                        <p className="flex items-center text-small text-gray-600 uppercase mb-2">January 20, 2017 | by Karma</p>
                        <h4 className="heading-four mb-4 mb-0">The Wonderful World of Aromatherapy Oils</h4>
                    </div>
                    <div>
                        <Img className="mb-6" fluid={data.blogThumbnail_3.childImageSharp.fluid} alt="Karma Spa flower logo" />
                        <p className="flex items-center text-small text-gray-600 uppercase mb-2">January 20, 2017 | by Karma</p>
                        <h4 className="heading-four mb-4 mb-0">Key Ways That Message Helps Relieve Stress</h4>
                    </div>                     
                </div>
            </div>
        </section>
    );
}

export default Blog;