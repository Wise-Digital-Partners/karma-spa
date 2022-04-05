import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Scrollspy from "react-scrollspy";

const StyledScrollNavigation = styled.div`
   @media (max-width: 1023px) {
      ${tw`relative sticky flex items-center justify-between bg-secondary_400 w-full h-12 px-6 cursor-pointer z-10 transform -translate-x-6 w-full`}
      top: 104px;
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
      ${tw`lg:sticky`}
      @media (min-width: 1024px) {
         top: 10rem;
      }
      .scrollspy {
         ${tw`lg:max-h-full!`}
      }
      ul {
         li {
            ${tw`text-sm text-gray-900 text-opacity-50 lg:text-opacity-50 flex items-center mt-6 lg:mt-0`}
            &.is-current {
               ${tw`lg:text-opacity-100`}
               &:before {
                  ${tw`lg:w-8 lg:mr-3`}
               }
            }
            &:before {
               content: "";
               ${tw`lg:h-px lg:w-0 lg:bg-primary_400 transition-all duration-300 ease-linear`}
            }
            &:not(:last-child) {
               ${tw`lg:mb-3`}
            }
            &:last-child {
               ${tw`mb-6 lg:mb-0`}
            }
            a {
               ${tw`block w-full px-6 lg:px-0 no-underline`}
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
               className="scrollspy absolute lg:relative top-0 left-0 p-0 m-0 w-full bg-white lg:bg-transparent shadow-lg lg:shadow-none list-none transform translate-y-12 lg:transform-none overflow-auto transition-all duration-300 ease-linear"
               style={{ maxHeight: `${setHeight}` }}
            >
               {children}
            </Scrollspy>
         </nav>
      </StyledScrollNavigation>
   );
};

export default ScrollNavigation;
