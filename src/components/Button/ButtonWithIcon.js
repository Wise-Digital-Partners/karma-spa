import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'


const Button = styled.a`
    ${tw`
        inline-flex 
        items-center 
        justify-center 
        text-center
        bg-primary_400 hover:bg-primary_400 focus:bg-primary_400 active:bg-primary_400
        text-primary_400 hover:text-white focus:text-white active:text-white
        font-normal
        text-xs
        tracking-widest
        uppercase
        rounded-sm 
        px-5
        py-2
        no-underline
        cursor-pointer 
        focus:outline-none 
        transition-all 
        duration-300 
        ease-in-out
    `}
    i {
        ${tw`text-lg font-light`}
    }
`

export default props => <Button as={props.as} type={props.type} className={props.className} href={props.href} target={props.target} rel={props.rel} data-modal-open={props.data}>{props.text}</Button>;