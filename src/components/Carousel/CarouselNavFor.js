import React, { Component } from 'react'
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image"
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
    ${tw`relative bottom-0 mt-6`}
    li {
      ${tw`w-auto h-auto mx-2`}
      &.slick-active {
        button {
          ${tw`bg-black`}
        }
      }
    }
    button {
      ${tw`w-2 h-2 bg-black bg-opacity-25 rounded-full`}
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

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
 
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
      <StyledCarousel className={`wrapper`}>
        <StaticQuery
          query = {graphql`
            {
              quotationMark: file(relativePath: {eq: "repeating/quotation-mark.svg"}) {
                publicURL
              }
              logo_1: file(relativePath: {eq: "repeating/flower.png"}) {
                childImageSharp {
                  fixed(width: 48, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              logo_2: file(relativePath: {eq: "repeating/flower.png"}) {
                childImageSharp {
                  fixed(width: 48, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              logo_3: file(relativePath: {eq: "repeating/flower.png"}) {
                childImageSharp {
                  fixed(width: 48, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }                  
            }
          `}

          render={data => (
            <div>
              <img className="mx-auto mb-12 md:mb-24" src={data.quotationMark.publicURL} alt="Quotation mark" />
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
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
              >
                <div>
                  <blockquote>
                    <q>I have been with Hoffman and Hanono for over 20 years and have always appreciated the professional service I receive from the entire staff.  They are always courteous and very professional.  I would highly recommend them to anyone who needs either personal or commercial insurance.</q>
                    <footer>Maty Adato | WL Investments</footer>
                  </blockquote>
                </div>
    
                <div>
                  <blockquote>
                    <q>Hoffman Hanono Insurance Services is so proactive and attentive to our insurance needs; always marketing our bids way ahead of policy expiration dates. The company provides professional, fantastic services! We couldn’t be happier!</q>
                    <footer>Chinh Do | Controller, IRE Development</footer>
                  </blockquote>
                </div>
    
                <div>
                  <blockquote>
                      <q>Osmar has been working on our account for a number of years. He has shown the ability to understand our insurance needs, and he’s been able to provide us with the best policies for our company given our financial resources. He’s always been very responsive when dealing with any issues. We’ve been extremely satisfied with the level of service from the entire Hoffman Hanono Insurance team.</q>
                      <footer>Mike Nobe | CFO At Kimble & Company Inc</footer>
                  </blockquote>
                </div>         
              </Slick>
  
              <Slick 
                className="slider-nav mt-10 md:mt-12"
                slidesToShow={3}
                arrows={false}
                dots={false}
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
              >
                <div>
                  <Img fixed={data.logo_1.childImageSharp.fixed} alt="WL Investments" />
                </div>          
                <div>
                  <Img fixed={data.logo_2.childImageSharp.fixed} alt="IRE Development" />
                </div>
                <div>
                  <Img fixed={data.logo_3.childImageSharp.fixed} alt="Kimble + Co" />
                </div>
              </Slick>
            </div>
          )}
        />
      </StyledCarousel>
    );
  }
}