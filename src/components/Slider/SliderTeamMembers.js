import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
   .slick-dots {
      ${tw`mt-6`}
   }
   .slick-list {
      @media (min-width: 768px) {
         ${tw`overflow-visible relative`}
         &:before {
            content: "";
            ${tw`absolute left-0 h-full w-full bg-gray-100 transform -translate-x-full z-10`}
         }
      }
   }
   .slick-track {
      @media (min-width: 768px) {
         ${tw`flex items-center`}
      }
   }
   .slick-slide {
      ${tw`p-0`}
      div {
         ${tw`outline-none`}
      }
   }
   .slick-prev,
   .slick-next {
      ${tw`top-auto bottom-0 transform translate-y-24 w-12 h-12 border border-solid border-gray-900 rounded-full transition-all duration-300 ease-linear`}
      &:before {
         ${tw`hidden`}
      }
      i {
         ${tw`text-gray-900 text-sm transition-all duration-300 ease-linear`}
      }
      &:hover {
         ${tw`bg-gray-900 border-gray-900`}
         i {
            ${tw`text-white`}
         }
      }
      @media (max-width: 767px) {
         ${tw`translate-y-24`}
      }
   }
   .slick-prev {
      ${tw`left-auto right-0 mr-20`}
   }
   .slick-next {
      ${tw`right-0`}
   }
`;
const Slider = ({ slideIndex }) => {
   const slider = useRef();

   useEffect(() => {
      slider.current.slickGoTo(slideIndex);
   }, [slideIndex]);

   const sliderSettings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
   };

   // Previous Arrow
   function PrevArrow(props) {
      const { onClick } = props;
      return (
         <button onClick={onClick} className="slick-prev" aria-label="Previous Slide">
            <i className="fas fa-chevron-left"></i>
         </button>
      );
   }

   // Next Arrow
   function NextArrow(props) {
      const { onClick } = props;
      return (
         <button onClick={onClick} className="slick-next" aria-label="Next Slide">
            <i className="fas fa-chevron-right"></i>
         </button>
      );
   }

   const data = useStaticQuery(graphql`
      {
         michaelDesktop: file(relativePath: { eq: "services/aesthetic-treatments/botox-fillers/michael-deskop.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 592, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         michaelMobile: file(relativePath: { eq: "services/aesthetic-treatments/botox-fillers/michael-mobile.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 732, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         stephanieDesktop: file(relativePath: { eq: "services/aesthetic-treatments/botox-fillers/stephanie-desktop.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 592, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         stephanieMobile: file(relativePath: { eq: "services/aesthetic-treatments/botox-fillers/stephanie-mobile.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 732, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         arianaDesktop: file(relativePath: { eq: "services/aesthetic-treatments/botox-fillers/ariana-desktop.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 592, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         arianaMobile: file(relativePath: { eq: "services/aesthetic-treatments/botox-fillers/ariana-mobile.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 732, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   const michaelImages = [
      data.michaelDesktop.childImageSharp.fluid,
      {
         ...data.michaelMobile.childImageSharp.fluid,
         media: `(max-width: 767px)`,
      },
   ];

   const stephanieImages = [
      data.stephanieDesktop.childImageSharp.fluid,
      {
         ...data.stephanieMobile.childImageSharp.fluid,
         media: `(max-width: 767px)`,
      },
   ];

   const arianaImages = [
      data.arianaDesktop.childImageSharp.fluid,
      {
         ...data.arianaMobile.childImageSharp.fluid,
         media: `(max-width: 767px)`,
      },
   ];

   return (
      <StyledSlider>
         <div className="container p-0">
            <Slick {...sliderSettings} ref={slider}>
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-12 items-center">
                     <div className="md:col-start-1 md:col-span-4">
                        <Img fluid={arianaImages} alt="Ariana Dillman" />
                     </div>
                     <div className="md:col-end-13 md:col-span-8 md:pr-24">
                        <header className="mb-6 md:mb-8">
                           <p className="heading-three mb-2">Ariana Dillman</p>
                           <p className="font-heading text-gray-900 text-large md:text-xl mb-0">MD, FACP</p>
                        </header>
                        <p className="mb-0">
                           Dr. Ariana has curated a team of top professionals in aesthetic medicine to bring premier cosmetic treatments to Karma
                           Massage at the Hillcrest and Carlsbad locations. She has extensive training in aesthetic medicine and a passion for helping
                           her patients enhance their natural beauty. Ariana is a board certified Emergency Medicine physician trained at UC Berkeley,
                           UC Davis, and UCLA and has provided exceptional medical service to the San Diego region for over 10 years.
                        </p>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-12 items-center">
                     <div className="md:col-start-1 md:col-span-4">
                        <Img fluid={stephanieImages} alt="Stephanie Garbaczewski" />
                     </div>
                     <div className="md:col-end-13 md:col-span-8 md:pr-24">
                        <header className="mb-6 md:mb-8">
                           <p className="heading-three mb-2">Stephanie Garbaczewski</p>
                           <p className="font-heading text-gray-900 text-large md:text-xl mb-0">PA-C, MMS</p>
                        </header>
                        <p className="mb-0">
                           Stephanie understands the gentle precision touch required to provide minimally invasive procedures that realize each
                           individual’s aesthetic goals. She has an enduring commitment to personalizing care for clients and is passionate about
                           providing high-quality anti-aging and aesthetic medicine to North County.
                        </p>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-12 items-center">
                     <div className="md:col-start-1 md:col-span-4">
                        <Img fluid={michaelImages} alt="Michael Castellanos" />
                     </div>
                     <div className="md:col-end-13 md:col-span-8 md:pr-24">
                        <header className="mb-6 md:mb-8">
                           <p className="heading-three mb-2">Michael Castellanos</p>
                           <p className="font-heading text-gray-900 text-large md:text-xl mb-0">CANS, BSN</p>
                        </header>
                        <p className="mb-0">
                           Michael has a deep appreciation for the unique aesthetic needs of his clients. He developed his expertise in
                           neuromodulators, fillers and laser treatments working alongside world-recognized leaders in dermatology before establishing
                           in Hillcrest.
                        </p>
                     </div>
                  </div>
               </div>
            </Slick>
         </div>
         <div className="slider-count"></div>
      </StyledSlider>
   );
};

export default Slider;
