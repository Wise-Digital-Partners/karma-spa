import React, { Component } from 'react'
import Slick from "react-slick";
import styled from '@emotion/styled';
import tw from 'twin.macro'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCarousel = styled.div`
  .slick-slide {
    div {
      ${tw`outline-none`}
    }
  }
  .slick-prev,
  .slick-next {
    ${tw`transition-all duration-300 ease-linear z-10`}
    &:before {
      ${tw`hidden`}
    }
    i {
      ${tw`transition-all duration-300 ease-linear`}
    }    
    @media (max-width: 767px){
      ${tw`hidden`}
    }
  }
  .slick-dots {
    ${tw`relative bottom-0`}
    li {
      ${tw`w-auto h-auto mx-2`}
    }
    button {
      ${tw`w-2 h-2 rounded-full`}
      &:before {
        ${tw`hidden`}
      }
    }
  }
  q {
    ${tw`block`}
  }  
` 
export default class Carousel extends Component {
 
  render() {

    function PrevArrow(props) {
      const {onClick} = props;
      return (
        <button onClick={onClick} className="slick-prev" aria-label="Previous Slide"><i className="far fa-chevron-left"></i></button>
      );  
    }

    function NextArrow(props) {
      const {onClick} = props;
      return (
        <button onClick={onClick} className="slick-next" aria-label="Next Slide"><i className="far fa-chevron-right"></i></button>
      );  
    }

    return (
      <StyledCarousel>
        <Slick
            dots={true}
            arrows={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            speed={750}
            autoplay={true}
            autoplaySpeed={7500}
            slidesToShow={1}
            slidesToScroll={1}
            fade={true}
            >
            {this.props.children}
        </Slick>
      </StyledCarousel>
    );
  }
}