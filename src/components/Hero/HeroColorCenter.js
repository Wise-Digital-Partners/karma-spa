import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledHero = styled.section`
	${tw`flex! items-center justify-center text-center`}
    min-height: ${({minHeightMobile}) => { return minHeightMobile }};
	h1 {
		${tw`text-white m-0`}
	}	
    @media (min-width: 768px) {
        min-height: ${({minHeightDesktop}) => { return minHeightDesktop }};
    }

`

const Hero = (
	{
		children,
		className,
		minHeightDesktop,
		minHeightMobile
	}
) => (
  	<StyledHero 
		className={className} 
		minHeightDesktop={minHeightDesktop} 
		minHeightMobile={minHeightMobile}
	>
		<div className="container">
			{children}
		</div>
  	</StyledHero>
)

export default Hero;
