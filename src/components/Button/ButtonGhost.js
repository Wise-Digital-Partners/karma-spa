import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const Button = styled.a`
    ${tw`
        inline-flex
        items-center
        justify-center
        text-center
        text-black hover:text-white focus:text-white active:text-white
        text-xs
        font-bold
        tracking-wider
        uppercase
        border
        border-solid
        border-black 
        bg-transparent hover:bg-black focus:bg-black active:bg-black
        px-8
        py-4
        no-underline
        cursor-pointer
        focus:outline-none
        transition-all
        duration-300
        ease-linear
    `}
    @media (min-width: 768px){
        min-width: 178px;
    }
    &.is-light {
        ${tw`
            text-white hover:text-primary_400 focus:text-primary_400 active:text-primary_400
            border-white hover:bg-white focus:bg-white active:bg-white
        `}
    }
`

export default props => <Button as={props.as} className={props.className} href={props.href} target={props.target} rel={props.rel} data-modal-open={props.data}>{props.text}</Button>;