import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledScroll = styled.section`
    ${tw`flex items-center justify-center`}
` 

const Scroll = ({children}) => {

	const data = useStaticQuery(graphql`
		{
            flowersDesktop: file(relativePath: {eq: "services/flowers-desktop.png"}) {
                childImageSharp {
                  fixed(width: 443, quality: 100) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
            }
            flowersMobile: file(relativePath: {eq: "services/flowers-mobile.png"}) {
                childImageSharp {
                  fixed(width: 200, quality: 100) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
            } 
		}
	`)     

    const flowerImages = [
        data.flowersDesktop.childImageSharp.fixed,
        {
        ...data.flowersMobile.childImageSharp.fixed,
            media: `(max-width: 1023px)`,
        },
    ]
 
    return (
        <StyledScroll className="wrapper relative bg-gray-100 lg:bg-transparent z-0 pb-10 lg:pb-0 pt-24 lg:pt-0">
            <div className="container">
                <div className="absolute right-0 top-0 transform -translate-y-16 lg:-translate-y-28 z-10">
                    <Img fixed={flowerImages} alt="Flowers"/>
                </div>                
                <div className="grid grid-cols-1 lg:grid-cols-12 row-gap-16 lg:row-gap-0">
                    {children[0]}
                    {children[1]}
                </div>
            </div>
        </StyledScroll>
    );
}

export default Scroll;