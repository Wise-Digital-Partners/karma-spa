import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledHero = styled.section`
   .text-wrapper {
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "1/4" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-3 lg:pl-20` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "1/4" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-3 lg:pr-20` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "1/3" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-4 lg:pl-24` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "1/3" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-4 lg:pr-24` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "2/5" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-5 lg:pl-24` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "2/5" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-5 lg:pr-24` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "1/2" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-6 lg:pl-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "1/2" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-6 lg:pr-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "3/5" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-7 lg:pl-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "3/5" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-7 lg:pr-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "2/3" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-8 lg:pl-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "2/3" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-8 lg:pr-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "3/4" && backgroundImageSide === "left" ? tw`lg:col-end-13 lg:col-span-9 lg:pl-32` : null};
      ${({ textWrapperWidth, backgroundImageSide }) =>
         textWrapperWidth === "3/4" && backgroundImageSide === "right" ? tw`lg:col-start-1 lg:col-span-9 lg:pr-32` : null};
      ${({ backgroundImageSide }) => (backgroundImageSide === "left" ? tw`order-2` : tw`order-2 lg:order-1`)};
   }
   .background-image-wrapper {
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "1/4" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-3` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "1/4" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-3` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "1/3" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-4` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "1/3" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-4` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "2/5" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-5` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "2/5" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-5` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "1/2" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-6` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "1/2" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-6` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "3/5" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-7` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "3/5" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-7` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "2/3" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-8` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "2/3" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-8` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "3/4" && backgroundImageSide === "left" ? tw`lg:col-start-1 lg:col-span-9` : null};
      ${({ backgroundImageWrapperWidth, backgroundImageSide }) =>
         backgroundImageWrapperWidth === "3/4" && backgroundImageSide === "right" ? tw`lg:col-end-13 lg:col-span-9` : null};
      ${({ backgroundImageSide }) => (backgroundImageSide === "left" ? tw`order-1` : tw`order-1 lg:order-2`)};
   }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
   min-height: ${({ minHeightMobile }) => {
      return minHeightMobile;
   }};
   &:before {
      background-position: ${({ backgroundPositionMobile }) => {
         return backgroundPositionMobile;
      }} !important;
      background-size: ${({ backgroundSizeMobile }) => {
         return backgroundSizeMobile;
      }} !important;
   }
   @media (min-width: 1024px) {
      min-height: ${({ minHeightDesktop }) => {
         return minHeightDesktop;
      }};
      &:before {
         background-position: ${({ backgroundPositionDesktop }) => {
            return backgroundPositionDesktop;
         }} !important;
         background-size: ${({ backgroundSizeDesktop }) => {
            return backgroundSizeDesktop;
         }} !important;
      }
   }
`;

const Hero = ({
   children,
   className,
   hasContainer,
   backgroundImageWrapperWidth,
   textWrapperWidth,
   backgroundImages,
   backgroundImageSide,
   minHeightDesktop,
   minHeightMobile,
   backgroundPositionDesktop,
   backgroundPositionMobile,
   backgroundSizeDesktop,
   backgroundSizeMobile,
}) => {
   return (
      <StyledHero
         className="wrapper"
         textWrapperWidth={textWrapperWidth}
         backgroundImageWrapperWidth={backgroundImageWrapperWidth}
         backgroundImageSide={backgroundImageSide}
      >
         <div className="container px-0 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 items-center">
               <div className="text-wrapper px-6 lg:px-0 lg:row-start-1">{children}</div>
               <div className="background-image-wrapper lg:row-start-1">
                  <StyledBackgroundImage
                     className={`transform w-100vw ${hasContainer ? "lg:w-full" : "lg:w-50vw"} ${
                        backgroundImageSide === "left" ? "lg:-translate-x-full lg:left-full" : "lg:translate-x-0"
                     } ${className}`}
                     hasContainer={hasContainer}
                     fixed={backgroundImages}
                     backgroundImageSide={backgroundImageSide}
                     minHeightDesktop={minHeightDesktop}
                     minHeightMobile={minHeightMobile}
                     backgroundSizeDesktop={backgroundSizeDesktop}
                     backgroundSizeMobile={backgroundSizeMobile}
                     backgroundPositionDesktop={backgroundPositionDesktop}
                     backgroundPositionMobile={backgroundPositionMobile}
                  />
               </div>
            </div>
         </div>
      </StyledHero>
   );
};

export default Hero;
