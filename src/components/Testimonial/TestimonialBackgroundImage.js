import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import styled from '@emotion/styled';
import tw from 'twin.macro'

import Carousel from "../Carousel/Carousel"

const StyledCarousel = styled.div`
    .slick-slide {
        ${tw`text-center`}
    }
    .slick-prev,
    .slick-next {
        ${tw`h-12 w-12 bg-transparent border border-solid border-gray-900 rounded-full transform top-0`}
    i {
        ${tw`text-gray-900 text-base`}
    }    
    &:hover{
        ${tw`bg-gray-900`}
        i {
            ${tw`text-white`}
        }
    }
    }
    .slick-prev {
        ${tw`left-0`}
    }
    .slick-next {
        ${tw`right-0`}
    }
    .slick-dots {
        ${tw`mt-8`}
        li {
            &.slick-active {
                button {
                    ${tw`bg-black`}
                }
            }
        }
        button {
            ${tw`bg-black bg-opacity-25`}
        }
    }        
    blockquote {
        ${tw`max-w-2xl mx-auto`}
    }  
    q {
        ${tw`text-lg leading-8 text-gray-900 mb-10 md:mb-16`}
    }
    footer {
        span {
            ${tw`block text-sm uppercase text-black opacity-50 mb-4`}
        }
    }
` 

const StyledTestimonial = styled(BackgroundImage)`
    ${tw`flex! items-center bg-fixed`}
    min-height: ${({minHeightMobile}) => { return minHeightMobile }};
    &:before {
        background-position: ${({backgroundPositionMobile}) => { return backgroundPositionMobile }} !important;
        background-size: ${({backgroundSizeMobile}) => { return backgroundSizeMobile }} !important;
    }
    @media (min-width: 768px) {
        min-height: ${({minHeightDesktop}) => { return minHeightDesktop }};
        &:before {
            background-position: ${({backgroundPositionDesktop}) => { return backgroundPositionDesktop }} !important;
            background-size: ${({backgroundSizeDesktop}) => { return backgroundSizeDesktop }} !important;
        }
    }
`

const Testimonial = (
  {
    className,
    backgroundPositionDesktop = '50% 100%',
    backgroundPositionMobile = '50% 100%',
    backgroundSizeDesktop = 'cover',
    backgroundSizeMobile = 'cover',
    minHeightDesktop = '585px',
    minHeightMobile = '560px'    
  }
) => {

    const data = useStaticQuery(graphql`
    {
        ctaBannerDesktop: file(relativePath: {eq: "repeating/testimonials-bg-desktop-parallax.jpg"}) {
            childImageSharp {
                fixed(width: 2880, height: 1908, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
        ctaBannerMobile: file(relativePath: {eq: "repeating/testimonials-bg-mobile.jpg"}) {
            childImageSharp {
                fixed(width: 828, height: 1230, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
        google: file(relativePath: {eq: "repeating/google.png"}) {
            childImageSharp {
                fixed(width: 57, quality: 100) {
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }         
    }
    `)
    
    const backgroundImages = [
        data.ctaBannerDesktop.childImageSharp.fixed,
        {
        ...data.ctaBannerMobile.childImageSharp.fixed,
        media: `(max-width: 767px)`,
        },
    ]    

    return (
        <StyledTestimonial
            className={`wrapper ${className}`} 
            fixed={backgroundImages} 
            minHeightDesktop={minHeightDesktop} 
            minHeightMobile={minHeightMobile} 
            backgroundSizeDesktop={backgroundSizeDesktop} 
            backgroundSizeMobile={backgroundSizeMobile}
            backgroundPositionDesktop={backgroundPositionDesktop}
            backgroundPositionMobile={backgroundPositionMobile}
        >
            <div className="container">
                <header className="text-center mb-12 md:mb-16">
                    <h2>Five-Star Relaxation Awaits.</h2>
                </header>

                <StyledCarousel>
                    <Carousel>
                        <div>
                            <blockquote>
                                <q>Such a comfortable and relaxing atmosphere. Everyone was very nice and the massage was amazing. If I could go everyday I would!</q>
                                <footer>
                                    <span>Cessili Mendez</span>
                                    <Img fixed={data.google.childImageSharp.fixed} alt="Google" />
                                </footer>
                            </blockquote>
                        </div>
            
                        <div>
                            <blockquote>
                                <q>The massage therapists are all very professional, respectful and extremely skilled. I have gotten some of the best massage treatments ever at Karma.</q>
                                <footer>
                                    <span>Gigi Vilicich</span>
                                    <Img fixed={data.google.childImageSharp.fixed} alt="Google" />
                                </footer>
                            </blockquote>
                        </div>
            
                        <div>
                            <blockquote>
                                <q>Karma was such an awesome experience. I would recommend Karma to anyone who needs some pampering. I had a 2 hr hot oil massage and it was like heaven.</q>
                                <footer>
                                    <span>Ruby Ferguson</span>
                                    <Img fixed={data.google.childImageSharp.fixed} alt="Google" />
                                </footer>
                            </blockquote>
                        </div>  
                    </Carousel>
                </StyledCarousel>
            </div>
        </StyledTestimonial>
    )
}

export default Testimonial;