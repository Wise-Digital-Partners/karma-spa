import React from 'react'
import { bool, func } from 'prop-types';
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledBurger = styled.button`
    ${tw`flex flex-col justify-between w-auto h-4 bg-transparent border-0 cursor-pointer`}
    &:focus {
        ${tw`outline-none`}
    }
    .line {
        ${({headerStyle}) => headerStyle === 'overlap' ? 
		    tw`bg-white` : tw`bg-black`
        };
        ${({scrolled, offcanvasOpen}) => scrolled || offcanvasOpen  ? 
		    tw`bg-black` : null
        };
        ${tw`relative w-8 h-px z-10 transition-all duration-300 ease-linear`}
        transform-origin: 1px;
        &:first-child {
            transform: ${({offcanvasOpen}) => offcanvasOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            opacity: ${({offcanvasOpen}) => offcanvasOpen ? '0' : '1'};
            transform: ${({offcanvasOpen}) => offcanvasOpen ? 'translateX(20px)' : 'translateX(0)'};
        }
        &:nth-child(3) {
            transform: ${({offcanvasOpen}) => offcanvasOpen ? 'translateY(6px) rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Burger = ({ offcanvasOpen, setOffcanvasOpen, headerStyle, scrolled, ...props }) => {
    const isExpanded = offcanvasOpen ? true : false;
    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} offcanvasOpen={offcanvasOpen} onClick={() => setOffcanvasOpen(!offcanvasOpen)} headerStyle={headerStyle} scrolled={scrolled} {...props}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </StyledBurger>
    );
}

Burger.propTypes = {
    open: bool.isRequired,
    setOffcanvasOpen: func.isRequired,
};

export default Burger;