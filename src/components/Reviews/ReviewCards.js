import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Masonry from 'react-masonry-component';
import styled from '@emotion/styled';
import tw from 'twin.macro'

const ReviewCards = ({className}) => {

    const StyledReviews = styled.div`
        .grid-item {
            ${tw`
                border
                border-solid
                rounded-xl
                px-6
                py-8
                mx-6
                mb-12
            `}
            width: calc(50% - 3rem);
            border-color: #D4D4D4;
            @media (max-width: 767px){
                ${tw`
                    py-6
                    mb-10
                `}
                width: calc(100% - 3rem);
            }
        }
    `  
    const data = useStaticQuery(graphql`
        {
            yelp: file(relativePath: {eq: "testimonials/Yelp.png"}) {
                childImageSharp {
                    fixed(width: 49, quality: 100) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            google: file(relativePath: {eq: "testimonials/Google.png"}) {
                childImageSharp {
                    fixed(width: 76, quality: 100) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            facebook: file(relativePath: {eq: "testimonials/linkedin.png"}) {
                childImageSharp {
                    fixed(width: 95, quality: 100) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }            
            headshot: file(relativePath: {eq: "testimonials/User.svg"}) {
                publicURL
            }
            stars5: file(relativePath: {eq: "testimonials/Stars.svg"}) {
                publicURL
            }            
        }
    `)

    const masonryOptions = {
        itemSelector: '.grid-item',
    };    

    return (
        <StyledReviews className={className}>
            <div className="container">
                <Masonry
                    className="-mx-6"
                    options={masonryOptions}
                >

                    <div className="grid-item">
                        <div className="flex justify-between">
                            <div className="flex items-start mb-6">
                                <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                                <div className="ml-3">
                                    <p className="text-black font-bold mb-1">JD</p>
                                    <img src={data.stars5.publicURL} alt="User 5 Stars" />
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <Img fixed={data.google.childImageSharp.fixed} />
                            </div>
                        </div>  
                        <blockquote>
                            <q className="block mb-6 md:mb-0">Osmar provided quick and prompt service, I will be working with him on a business BOP next year.</q>
                        </blockquote>
                        <div className="block md:hidden">
                            <Img fixed={data.google.childImageSharp.fixed} />
                        </div>
                    </div> 
                    
                </Masonry>
            </div>
        </StyledReviews>
    );
}

export default ReviewCards;
