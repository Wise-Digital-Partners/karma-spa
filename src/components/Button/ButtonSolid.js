import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Button = styled.a`
    ${tw`
        inline-flex 
        items-center 
        justify-center 
        text-center 
        bg-primary_400 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800
        text-white hover:text-white focus:text-white active:text-white
        text-xs
        font-bold
        tracking-wider
        uppercase
        px-6
        py-4
        no-underline
        cursor-pointer 
        focus:outline-none 
        transition-all
        duration-300 
        ease-in-out
    `}
    @media (min-width: 768px){
        min-width: 186px;
    }    
    &.is-light {
        ${tw`
            bg-white hover:bg-white focus:bg-white active:bg-white
            bg-opacity-25 hover:bg-opacity-100 focus:bg-opacity-100 active:bg-opacity-100
            text-white hover:text-primary_400 focus:text-primary_400 active:text-primary_400
        `} 
    }
`

export default props => <Button as={props.as} type={props.type} className={props.className} href={props.href} target={props.target} rel={props.rel} data-modal-open={props.data}>{props.text}</Button>;