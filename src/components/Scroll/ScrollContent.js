import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledScrollContent = styled.div`
    @media (min-width: 1024px){
        &:after {
            content: '';
            ${tw`absolute top-0 right-0 h-full w-full bg-gray-100 transform translate-x-full`}
        }
    }
` 

const ScrollContent = ({children}) => {
     
    return (
        <StyledScrollContent className="lg:col-end-13 lg:col-span-9 scroll-content relative bg-gray-100 px-0 lg:px-28 lg:pt-32 lg:pb-28">
            {children}
        </StyledScrollContent>
    );
}

export default ScrollContent;