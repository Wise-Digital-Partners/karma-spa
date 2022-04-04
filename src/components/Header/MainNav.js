import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Burger from "../Burger/Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
   ${({ headerHasBorder }) => (headerHasBorder ? tw`border-b border-solid border-white border-opacity-25` : null)};
   @media (min-width: 1024px) {
      ${({ megaMenuHovering1 }) => (megaMenuHovering1 ? tw`bg-white` : null)};
      ${({ megaMenuHovering2 }) => (megaMenuHovering2 ? tw`bg-white` : null)};
   }
   @media (max-width: 1023px) {
      ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-100 border-gray-100` : null)};
      ${({ headerStyle }) => (headerStyle === "overlap" ? tw`border-b border-solid border-white border-opacity-25` : null)};
   }
   &[data-fixed="true"] {
      ${tw`fixed left-0 w-full bg-white shadow z-20`}
      @media (max-width: 1023px) {
         ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-100` : null)};
      }
      #navigation-desktop {
         > .navigation-item {
            > a {
               ${tw`text-gray-900`}
            }
         }
      }
      .logo-initial {
         ${tw`hidden`}
      }
      .logo-fixed {
         ${tw`block`}
      }
   }
   #navigation-desktop {
      > .navigation-item {
         &:not(:last-child) {
            ${tw`mr-10`}
         }
         > a {
            ${({ headerLinkColor }) => (headerLinkColor === "white" ? tw`text-white` : tw`text-gray-900`)};
            ${({ megaMenuHovering1 }) => (megaMenuHovering1 ? tw`text-gray-900` : null)};
            ${({ megaMenuHovering2 }) => (megaMenuHovering2 ? tw`text-gray-900` : null)};
            ${tw`relative text-xs font-bold no-underline uppercase tracking-widest pb-8`}
            &:after {
               content: "";
               ${tw`absolute left-0 bottom-0 h-px bg-primary_400 w-0 transform -translate-y-6 transition-all duration-300 ease-linear`}
            }
            &:hover {
               &:after {
                  ${tw`w-full`}
               }
            }
         }
         &.active {
            > a {
               &:after {
                  ${tw`w-full`}
               }
            }
         }
      }
      .is-submenu-parent {
         ${tw`relative`}
         .submenu {
            ${tw`absolute flex flex-col w-auto bg-white shadow-lg px-8 pt-6 pb-10 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
            .navigation-item {
               ${tw`whitespace-nowrap`}
               &:not(:last-child) {
                  ${tw`mb-4`}
               }
               a {
                  ${tw`text-gray-800 font-normal no-underline`}
                  &:hover {
                     ${tw`text-primary_400`}
                  }
               }
            }
         }
         &:hover {
            .submenu {
               ${tw`opacity-100 visible translate-y-7`}
            }
         }
      }
      .is-mega-menu-parent {
         ${tw`static`}
         .mega-menu {
            ${tw`absolute left-0 flex flex-col w-full bg-white shadow-lg pt-20 pb-12 opacity-0 invisible z-10 transform translate-y-12 transition-all duration-300 ease-linear`}
         }
         &:hover {
            .mega-menu {
               ${tw`opacity-100 visible translate-y-7`}
            }
         }
      }
   }

   #navigation-mobile {
      ${tw`w-full text-center`}
      > .navigation-item {
         ${tw`relative`}
         &:not(:last-child) {
            ${tw`mb-8`}
         }
         > a,
         button {
            ${tw`text-3xl font-heading text-gray-900 font-semibold no-underline focus:outline-none cursor-pointer transition-all duration-300 ease-linear`}
            &:hover {
               ${tw`text-primary_400`}
            }
         }
         &.is-submenu-parent {
            > a {
               /* ${tw`block`} */
               /* &:after {
                        content: '\f078';
                        font-family: 'Font Awesome 5 Pro';
                        ${tw`absolute top-0 right-0 font-normal text-black transition-all duration-300 ease-linear`}
                    }
                    &[aria-expanded="true"] {
                        &:after {
                            content: '\f068';
                        }
                    } */
            }
         }
      }
      .submenu {
         ${tw`overflow-hidden flex-col transition-all duration-300 ease-linear`}
         li {
            &:not(:last-child) {
               ${tw`mb-6`}
            }
            a {
               ${tw`text-sm font-semibold text-gray-700 uppercase`}
               &:hover {
                  ${tw`text-primary_400`}
               }
            }
         }
      }
   }
`;

// mobile submenu temporary height
// let submenuTempHeight1 = null,
//    submenuTempHeight2 = null,
//    submenuTempHeight3 = null,
//    submenuTempHeight4 = null;

const MainNav = ({ scrolled, headerStyle, headerLinkColor, headerHasBorder }) => {
   // determine if offcanvas is open
   const [offcanvasOpen, setOffcanvasOpen] = useState(false);

   // Hover on parent links
   const [megaMenuHovering1, setMegaMenuHovering1] = useState(false);
   const isHoveringMegaMenu1 = () => setMegaMenuHovering1(true);
   const notHoveringMegaMenu1 = () => setMegaMenuHovering1(false);

   const [megaMenuHovering2, setMegaMenuHovering2] = useState(false);
   const isHoveringMegaMenu2 = () => setMegaMenuHovering2(true);
   const notHoveringMegaMenu2 = () => setMegaMenuHovering2(false);

   const [subMenuHovering1, setSubMenuHovering1] = useState(false);
   const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
   const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

   const [subMenuHovering2, setSubMenuHovering2] = useState(false);
   const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
   const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

   // handle click of navigation items
   const clickHandler = () => {
      setOffcanvasOpen(!offcanvasOpen);
   };

   // close offcanvas onclick outside
   const node = useRef();
   useOnClickOutside(node, () => setOffcanvasOpen(false));

   const data = useStaticQuery(graphql`
      {
         desktopLogoDark: file(relativePath: { eq: "global/logo-color.png" }) {
            childImageSharp {
               fluid(maxWidth: 153, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         desktopLogoLight: file(relativePath: { eq: "global/logo-white-orange.png" }) {
            childImageSharp {
               fluid(maxWidth: 153, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         mobileLogoDark: file(relativePath: { eq: "global/logo-color.png" }) {
            childImageSharp {
               fluid(maxWidth: 114, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         mobileLogoLight: file(relativePath: { eq: "global/logo-white-orange.png" }) {
            childImageSharp {
               fluid(maxWidth: 114, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         massageServices: file(relativePath: { eq: "repeating/massage-services.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         specialPackages: file(relativePath: { eq: "repeating/special-packages.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         ivHydration: file(relativePath: { eq: "repeating/iv-hydration.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         skinCareServices: file(relativePath: { eq: "repeating/skin-care-services.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         massageServicesCarlsbad: file(relativePath: { eq: "repeating/Carlsbad Massage Services - Card.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         specialPackagesCarlsbad: file(relativePath: { eq: "repeating/Carlsbad Special Packages - Card.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         skinCareServicesCarlsbad: file(relativePath: { eq: "repeating/Carlsbad Skin Care - Card.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 504, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   // Define logos based on header style
   let initialLogo = null,
      stickyLogo = null,
      className = null;

   if (headerStyle === "overlap") {
      initialLogo = [
         data.mobileLogoLight.childImageSharp.fluid,
         {
            ...data.desktopLogoLight.childImageSharp.fluid,
            media: `(min-width: 768px)`,
         },
      ];
      stickyLogo = [
         data.mobileLogoDark.childImageSharp.fluid,
         {
            ...data.desktopLogoDark.childImageSharp.fluid,
            media: `(min-width: 768px)`,
         },
      ];
      className = "absolute";
   } else {
      initialLogo = [
         data.mobileLogoDark.childImageSharp.fluid,
         {
            ...data.desktopLogoDark.childImageSharp.fluid,
            media: `(min-width: 768px)`,
         },
      ];
      stickyLogo = [
         data.mobileLogoDark.childImageSharp.fluid,
         {
            ...data.desktopLogoDark.childImageSharp.fluid,
            media: `(min-width: 768px)`,
         },
      ];
   }

   // Change logo on mega menu reveal
   if (megaMenuHovering1 || megaMenuHovering2) {
      initialLogo = data.desktopLogoDark.childImageSharp.fluid;
   }

   if (offcanvasOpen) {
      initialLogo = [
         data.mobileLogoDark.childImageSharp.fluid,
         {
            ...data.desktopLogoDark.childImageSharp.fluid,
            media: `(min-width: 768px)`,
         },
      ];
      stickyLogo = [
         data.mobileLogoDark.childImageSharp.fluid,
         {
            ...data.desktopLogoDark.childImageSharp.fluid,
            media: `(min-width: 768px)`,
         },
      ];
   }

   return (
      <StyledMainNav
         id="main-navigation"
         className={`py-2 w-full h-16 md:h-auto transition-all duration-300 ease-linear ${className}`}
         role="navigation"
         aria-label="main-navigation"
         data-fixed={scrolled}
         headerStyle={headerStyle}
         headerHasBorder={headerHasBorder}
         headerLinkColor={headerLinkColor}
         megaMenuHovering1={megaMenuHovering1}
         megaMenuHovering2={megaMenuHovering2}
         offcanvasOpen={offcanvasOpen}
      >
         <div className="container flex items-center">
            <div className="flex-auto flex items-center">
               <div className="w-full">
                  <AniLink fade to="/">
                     <div className="logo-initial">
                        <Img fluid={initialLogo} alt="Karma Spa Logo" />
                     </div>
                     <div className="logo-fixed hidden">
                        <Img fluid={stickyLogo} alt="Karma Spa Logo" />
                     </div>
                  </AniLink>
               </div>
            </div>
            <div className="flex items-center justify-end flex-auto">
               <ul id="navigation-desktop" className="hidden lg:flex lg:items-center lg:justify-end mr-10">
                  <li
                     className={`is-mega-menu-parent navigation-item ${megaMenuHovering1 ? "active" : ""}`}
                     onMouseEnter={isHoveringMegaMenu1}
                     onMouseLeave={notHoveringMegaMenu1}
                  >
                     <AniLink fade to="#">
                        Hillcrest Services
                     </AniLink>
                     <div className="mega-menu">
                        <div className="container flex items-center">
                           <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:gap-x-10">
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.massageServices.childImageSharp.fluid} alt="Massage Services" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       Massage Services
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">No matter your indulgence, we have a massage for you.</p>
                                 <AniLink fade to="/massage-therapy-hillcrest/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.specialPackages.childImageSharp.fluid} alt="Special Packages" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       Special Packages
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">Our popular packages will pamper you with great value.</p>
                                 <AniLink fade to="/massage-packages-san-diego/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.skinCareServices.childImageSharp.fluid} alt="Skin Care Services" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       Skin Care Services
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
                                 <AniLink fade to="/skin-care-hillcrest/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.ivHydration.childImageSharp.fluid} alt="Aesthetic Treatments" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       IV Hydration
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">Get needed nutrients through IV infusions and injections.</p>
                                 <AniLink fade to="/iv-hydration-san-diego/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li
                     className={`is-mega-menu-parent navigation-item ${megaMenuHovering2 ? "active" : ""}`}
                     onMouseEnter={isHoveringMegaMenu2}
                     onMouseLeave={notHoveringMegaMenu2}
                  >
                     <AniLink fade to="#">
                        Carlsbad Services
                     </AniLink>
                     <div className="mega-menu">
                        <div className="container flex items-center">
                           <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:gap-x-10">
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.massageServicesCarlsbad.childImageSharp.fluid} alt="Massage Services" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       Massage Services
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">No matter your indulgence, we have a massage for you.</p>
                                 <AniLink fade to="/massage-therapy-carlsbad/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.specialPackagesCarlsbad.childImageSharp.fluid} alt="Special Packages" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       Special Packages
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">Our popular packages will pamper you with great value.</p>
                                 <AniLink fade to="/massage-packages-carlsbad/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                              <div className="group relative">
                                 <Img className="mb-6" fluid={data.skinCareServicesCarlsbad.childImageSharp.fluid} alt="Skin Care Services" />
                                 <div className="flex justify-between items-center">
                                    <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 transition-all duration-300 ease-linear">
                                       Skin Care Services
                                    </p>
                                    <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 transition-all duration-300 ease-linear"></i>
                                 </div>
                                 <p className="text-small mb-0">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
                                 <AniLink fade to="/skin-care-carlsbad/">
                                    <span className="link-overlay"></span>
                                 </AniLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li
                     className={`is-submenu-parent navigation-item ${subMenuHovering1 ? "active" : ""}`}
                     onMouseEnter={isHoveringSubMenu1}
                     onMouseLeave={notHoveringSubMenu1}
                  >
                     <AniLink fade to="#">
                        Locations
                     </AniLink>
                     <ul className="submenu">
                        <li className="navigation-item">
                           <AniLink fade to="/hillcrest-massage/">
                              Hillcrest
                           </AniLink>
                        </li>
                        <li className="navigation-item">
                           <AniLink fade to="/carlsbad-massage/">
                              Carlsbad
                           </AniLink>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`is-submenu-parent navigation-item ${subMenuHovering2 ? "active" : ""}`}
                     onMouseEnter={isHoveringSubMenu2}
                     onMouseLeave={notHoveringSubMenu2}
                  >
                     <AniLink fade to="/about/">
                        About
                     </AniLink>
                     <ul className="submenu">
                        <li className="navigation-item">
                           <AniLink fade to="/about/">
                              About
                           </AniLink>
                        </li>
                        <li className="navigation-item">
                           <AniLink fade to="/gift-cards/">
                              Gift Cards
                           </AniLink>
                        </li>
                        <li className="navigation-item">
                           <AniLink fade to="/massage-membership/">
                              Membership
                           </AniLink>
                        </li>
                        <li className="navigation-item">
                           <AniLink fade to="/blog/">
                              Blog
                           </AniLink>
                        </li>
                     </ul>
                  </li>
               </ul>
               <div className="hidden lg:inline-block inline-flex items-center">
                  <ButtonSolid data="modal-choose-location" text="Book Appointment" />
               </div>

               <div className="lg:hidden" ref={node}>
                  <Burger
                     offcanvasOpen={offcanvasOpen}
                     setOffcanvasOpen={setOffcanvasOpen}
                     headerStyle={headerStyle}
                     scrolled={scrolled}
                     aria-controls="offcanvas-navigation"
                  />
                  <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation" className="py-10">
                     <ul id="navigation-mobile" className="mb-16 inline-block">
                        <li className="flex justify-center navigation-item is-submenu-parent">
                           <Accordion title="Hillcrest Services">
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-therapy-hillcrest/">
                                    Massage
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-packages-san-diego/">
                                    Packages
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/iv-hydration-san-diego/">
                                    Treatments
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/skin-care-hillcrest/">
                                    Skin Care
                                 </AniLink>
                              </li>
                           </Accordion>
                        </li>
                        <li className="flex justify-center navigation-item is-submenu-parent">
                           <Accordion title="Carlsbad Services">
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-therapy-carlsbad/">
                                    Massage
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-packages-carlsbad/">
                                    Packages
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/skin-care-carlsbad/">
                                    Skin Care
                                 </AniLink>
                              </li>
                           </Accordion>
                        </li>
                        <li className="flex justify-center navigation-item is-submenu-parent">
                           <Accordion title="Locations">
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/hillcrest-massage/">
                                    Hillcrest
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/carlsbad-massage/">
                                    Carlsbad
                                 </AniLink>
                              </li>
                           </Accordion>
                        </li>
                        <li className="flex justify-center navigation-item is-submenu-parent">
                           <Accordion title="About">
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/about/">
                                    About
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/gift-cards/">
                                    Gift Cards
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-membership/">
                                    Membership
                                 </AniLink>
                              </li>
                              <li className="navigation-item">
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/blog/">
                                    Blog
                                 </AniLink>
                              </li>
                           </Accordion>
                        </li>
                     </ul>

                     <ul className="text-center mb-12">
                        <li className="font-heading font-medium mb-5">
                           <a className="gtm-phone-number text-gray-700 no-underline" href="tel:+1-619-299-9888">
                              Hillcrest: <span className="italic">(619) 299-9888</span>
                           </a>
                        </li>
                        <li className="font-heading font-medium">
                           <a className="gtm-phone-number text-gray-700 no-underline" href="tel:+1-760-729-9888">
                              Carlsbad: <span className="italic">(760) 729-9888</span>
                           </a>
                        </li>
                     </ul>
                     <div className="grid grid-col-1 gap-y-5">
                        <ButtonSolid
                           href="https://go.booker.com/location/karmaspa/service-menu"
                           target="_blank"
                           rel="noopener noreferrer"
                           text="Book San Diego"
                        />
                        <ButtonSolid
                           href="https://go.booker.com/location/karmarelaxationspa2/service-menu"
                           target="_blank"
                           rel="noopener noreferrer"
                           text="Book Carlsbad"
                        />
                     </div>
                  </OffCanvas>
               </div>
            </div>
         </div>
      </StyledMainNav>
   );
};
export default MainNav;
