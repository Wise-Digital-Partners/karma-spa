import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Scrollspy from "react-scrollspy";

const StyledScrollNavigation = styled.div`
   @media (max-width: 1023px) {
      ${tw`relative sticky flex items-center justify-between bg-secondary_400 w-full h-12 px-6 cursor-pointer z-10 transform -translate-x-6`}
      top: 64px;
      width: calc(100% + 3rem);
      &:after {
         content: "\f078";
         font-family: "Font Awesome 5 Pro";
         ${tw`text-white text-base font-normal transition-all duration-300 ease-linear`}
      }
      &.active {
         &:after {
            ${tw`transform rotate-180`}
         }
      }
   }
   .scroll-navigation {
      ${tw`md:sticky`}
      @media (min-width: 1024px) {
         top: 7rem;
      }
      .scrollspy {
         ${tw`md:max-h-full!`}
      }
      ul {
         li {
            ${tw`text-sm text-gray-900 text-opacity-50 md:text-opacity-50 flex items-center mt-6 md:mt-0`}
            &.is-current {
               ${tw`md:text-opacity-100`}
               &:before {
                  ${tw`md:w-8 md:mr-3`}
               }
            }
            &:before {
               content: "";
               ${tw`md:h-px md:w-0 md:bg-primary_400 transition-all duration-300 ease-linear`}
            }
            &:not(:last-child) {
               ${tw`md:mb-3`}
            }
            &:last-child {
               ${tw`mb-6 md:mb-0`}
            }
            a {
               ${tw`block w-full px-6 md:px-0 no-underline`}
               &:hover {
                  ${tw`text-primary_400`}
               }
            }
         }
      }
   }
`;

const ScrollNavigation = ({ children }) => {
   // Toggle Dropdown
   const [setActive, setActiveState] = useState("");
   const [setHeight, setHeightState] = useState("0px");
   const scrollNavigationList = useRef(null);

   const clickHandler = () => {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(setActive === "active" ? "0px" : "420px");
   };

   return (
      <StyledScrollNavigation
         className={`scroll-navigation-wrapper lg:col-start-1 lg:col-span-3 lg:mr-4 ${setActive}`}
         onKeyDown={clickHandler}
         onClick={clickHandler}
      >
         <span className="inline text-white lg:hidden">Services Menu</span>
         <nav className="scroll-navigation lg:mt-20">
            <Scrollspy
               items={[
                  "section-1",
                  "section-2",
                  "section-3",
                  "section-4",
                  "section-5",
                  "section-6",
                  "section-7",
                  "section-8",
                  "section-9",
                  "section-10",
                  "section-11",
                  "section-12",
                  "section-13",
                  "section-14",
                  "section-15",
                  "section-16",
                  "section-17",
                  "section-18",
                  "section-19",
                  "section-20",
               ]}
               offset={-100}
               currentClassName="is-current"
               ref={scrollNavigationList}
               className="scrollspy absolute md:relative top-0 left-0 p-0 m-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none list-none transform translate-y-12 md:transform-none overflow-auto transition-all duration-300 ease-linear"
               style={{ maxHeight: `${setHeight}` }}
            >
               {children}
            </Scrollspy>
         </nav>
      </StyledScrollNavigation>
   );
};

export default ScrollNavigation;
