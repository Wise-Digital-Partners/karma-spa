import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';
import tw from 'twin.macro';

const StyledDivider = styled.section`
    .divider-wrapper {
        ${tw`flex items-center justify-center`}
        &:before,
        &:after {
            content: '';
            ${tw` h-px w-full bg-gray-200 bg-opacity-50`}
        }
        &:before {
            ${tw`left-0 mr-6`}
        }
        &:after {
            ${tw`right-0 ml-6`}
        }
        .gatsby-image-wrapper {
            ${tw`px-6`}
        }
    }
` 

const Divider = ({ className }) => {
   
	const data = useStaticQuery(graphql`
		{
			flower: file(relativePath: {eq: "repeating/flower.png"}) {
				childImageSharp {
					fixed(width: 48, quality: 100) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}  
		}
	`)     
     
    return (
        <StyledDivider className={className}>
            <div className="container">
                <div className="divider-wrapper">
                    <Img fixed={data.flower.childImageSharp.fixed} alt="Karma Spa flower logo" />
                </div>
            </div>
        </StyledDivider>
    );
}

export default Divider;