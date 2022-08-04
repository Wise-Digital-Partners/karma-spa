import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

const HillcrestCTA = styled(BackgroundImage)`
   ${tw`flex!`}
   ${({ backgroundImageAlternative }) => (backgroundImageAlternative ? tw`bg-gray-100` : null)};
   min-height: ${({ minHeightMobile }) => {
      return minHeightMobile;
   }};
   &:before,
   &:after {
      background-position: ${({ backgroundPositionMobile }) => {
         return backgroundPositionMobile;
      }} !important;
      background-size: ${({ backgroundSizeMobile }) => {
         return backgroundSizeMobile;
      }} !important;
   }
   @media (min-width: 768px) {
      min-height: ${({ minHeightDesktop }) => {
         return minHeightDesktop;
      }};
      &:before,
      &:after {
         background-position: ${({ backgroundPositionDesktop }) => {
            return backgroundPositionDesktop;
         }} !important;
         background-size: ${({ backgroundSizeDesktop }) => {
            return backgroundSizeDesktop;
         }} !important;
      }
   }
`;

const CTA = ({
   className,
   backgroundImageAlternative,
   backgroundPositionDesktop = "50% 100%",
   backgroundPositionMobile = "50% 100%",
   backgroundSizeDesktop = "cover",
   backgroundSizeMobile = "contain",
   minHeightDesktop = "570px",
   minHeightMobile = "460px",
}) => {
   const data = useStaticQuery(graphql`
      {
         ctaBgImageDesktop: file(relativePath: { eq: "repeating/white-cta-bg-image-desktop.jpg" }) {
            childImageSharp {
               fixed(width: 2880, height: 1432, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
               }
            }
         }
         ctaBgImageAlternativeDesktop: file(relativePath: { eq: "repeating/beige-cta-bg-image-desktop.jpg" }) {
            childImageSharp {
               fixed(width: 2880, height: 1432, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
               }
            }
         }
         ctaBgImageMobile: file(relativePath: { eq: "repeating/white-cta-bg-image-mobile.jpg" }) {
            childImageSharp {
               fixed(width: 828, height: 298, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
               }
            }
         }
         ctaBgImageAlternativeMobile: file(relativePath: { eq: "repeating/beige-cta-bg-image-mobile.jpg" }) {
            childImageSharp {
               fixed(width: 828, height: 298, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
               }
            }
         }
      }
   `);

   let backgroundImages;

   if (backgroundImageAlternative) {
      backgroundImages = [
         data.ctaBgImageAlternativeDesktop.childImageSharp.fixed,
         {
            ...data.ctaBgImageAlternativeMobile.childImageSharp.fixed,
            media: `(max-width: 767px)`,
         },
      ];
   } else {
      backgroundImages = [
         data.ctaBgImageDesktop.childImageSharp.fixed,
         {
            ...data.ctaBgImageMobile.childImageSharp.fixed,
            media: `(max-width: 767px)`,
         },
      ];
   }

   return (
      <HillcrestCTA
         className={className}
         fixed={backgroundImages}
         backgroundImageAlternative={backgroundImageAlternative}
         minHeightDesktop={minHeightDesktop}
         minHeightMobile={minHeightMobile}
         backgroundSizeDesktop={backgroundSizeDesktop}
         backgroundSizeMobile={backgroundSizeMobile}
         backgroundPositionDesktop={backgroundPositionDesktop}
         backgroundPositionMobile={backgroundPositionMobile}
      >
         <div className="container">
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="heading-one mb-6">Affordable Indulgence Starts Here.</h2>
               <p className="font-heading text-xl md:text-2xl leading-8 text-gray-900 font-light max-w-xl mx-auto mb-12">
                  Your ticket to bliss is moments away. Book an appointment at our San Diego massage spa today!
               </p>
               <div className="grid grid-cols-1 gap-x-4 md:gap-x-8 max-w-sm mx-auto">
                  <ButtonSolid
                     href=" https://www.activelifestyleaesthetics.com/book-online"
                     target="_blank"
                     rel="noopener noreferrer"
                     text="Book Med Spa"
                  />
               </div>
            </div>
         </div>
      </HillcrestCTA>
   );
};

export default CTA;
