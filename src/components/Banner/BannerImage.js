import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledBanner = styled(BackgroundImage)`
    ${tw`flex!`}
    max-height: ${({minHeightMobile}) => { return minHeightMobile }};
    @media (min-width: 768px) {
        max-height: ${({minHeightDesktop}) => { return minHeightDesktop }};
    }    
`

const Banner = ({ images, children, className, backgroundPosition, minHeightDesktop, minHeightMobile }) => (
    <StyledBanner className={className} fixed={images} minHeightDesktop={minHeightDesktop} minHeightMobile={minHeightMobile} style={{backgroundPosition: backgroundPosition}}>
        <div className="container">
            {children}
        </div>
    </StyledBanner>
)

export default StyledBanner;
