import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledHero = styled(BackgroundImage)`
    ${tw`flex! items-end pb-32 md:pb-48`}
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

const Hero = (
	{
		children, 
		className, 
		backgroundImages,
		minHeightDesktop,
		minHeightMobile,
		backgroundPositionDesktop,
		backgroundPositionMobile,
		backgroundSizeDesktop,
		backgroundSizeMobile
	}
) => (
    <StyledHero 
        className={className} 
        fixed={backgroundImages} 
        minHeightDesktop={minHeightDesktop} 
        minHeightMobile={minHeightMobile} 
        backgroundSizeDesktop={backgroundSizeDesktop} 
        backgroundSizeMobile={backgroundSizeMobile}
        backgroundPositionDesktop={backgroundPositionDesktop}
        backgroundPositionMobile={backgroundPositionMobile}
    >
        <div className="container">
            {children}
        </div>
    </StyledHero>
)

export default Hero;
