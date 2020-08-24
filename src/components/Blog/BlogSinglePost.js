import React from "react";
import Img from "gatsby-image"
import styled from '@emotion/styled';
import tw from 'twin.macro'

import BlogRecentPosts from "../Blog/BlogRecentPosts"
import CTABackgroundColor from "../CTA/CTABackgroundColor"

const StyledBlogPost = styled.div`
    ${tw`max-w-3xl mx-auto`}
    h1, h2, h3, h4, h5, h6 {
        ${tw`mb-10`}
    }
    p, ol, ul {
        ${tw`text-lg mb-12`}
    }
    p > b {
        ${tw`block -mb-8`}
    }    
    @media (min-width: 768px) {
        p, ol, ul {
            ${tw`text-2xl mb-16`}
        }
        p > b {
            ${tw`block -mb-12`}
        }              
    }       
`

const Blog = ({featuredImage, ...props}) => {

    return (
        <div>
            <section className={`wrapper pt-8 md:pt-12`}>
                <div className="container">
                    <header className="mb-10 text-center">
                        <h1>{props.title}</h1>
                        <p className="text-xsmall text-gray-600 tracking-widest uppercase mb-0">{props.date} <span className="mx-1">|</span> by {props.author}</p>
                    </header>

                    <Img className="mb-12 md:mb-18" fluid={featuredImage} alt={props.title} />

                    <StyledBlogPost dangerouslySetInnerHTML={{ __html: props.content }} />
                </div>
            </section>

            <CTABackgroundColor className='bg-white' />

            <section className={`mb-14 md:mb-28`}>
                <div className="container">
                    <BlogRecentPosts />
                </div>
            </section>                    
        </div>

    );
}

export default Blog;