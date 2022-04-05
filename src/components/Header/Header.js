import React, { useState, useEffect } from "react";

import PromoBar from "../Header/PromoBar";
import UtilityNav from "../Header/UtilityNav";
import MainNav from "../Header/MainNav";

const Header = ({ headerStyle, headerLinkColor, headerHasBorder }) => {
   // determine if page has scrolled
   const [scrolled, setScrolled] = useState(false);

   // change state on scroll
   useEffect(() => {
      const // siteNavigation = document.querySelector("#site-navigation"),
         promoBar = document.querySelector("#promo-bar"),
         utilityNavigation = document.querySelector("#utlity-navigation"),
         mainNavigation = document.querySelector("#main-navigation"),
         offcanvasNavigation = document.querySelector("#offcanvas-navigation"),
         bodyContent = document.querySelector("#body-content");

      if (offcanvasNavigation) {
         if (utilityNavigation !== null && promoBar !== null) {
            offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight + "px";
         } else if (utilityNavigation && promoBar !== null) {
            offcanvasNavigation.style.top = mainNavigation.offsetHeight + utilityNavigation.offsetHeight + "px";
         } else if (utilityNavigation !== null && promoBar) {
            offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + "px";
         } else {
            offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";
         }
      }

      const handleLoad = () => {
         // calculate #offcanvas-navigation menu offset top
         if (offcanvasNavigation) {
            if (utilityNavigation !== null && promoBar !== null) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight + "px";
            } else if (utilityNavigation && promoBar !== null) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + utilityNavigation.offsetHeight + "px";
            } else if (utilityNavigation !== null && promoBar) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + "px";
            } else {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";
            }
         }
      };

      const handleResize = () => {
         // calculate #offcanvas-navigation offset top on resize
         if (offcanvasNavigation) {
            if (utilityNavigation !== null && promoBar !== null) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight + "px";
            } else if (utilityNavigation && promoBar !== null) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + utilityNavigation.offsetHeight + "px";
            } else if (utilityNavigation !== null && promoBar) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + "px";
            } else {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";
            }
         }
      };

      const handleScroll = () => {
         let isScrolled;

         if (utilityNavigation !== null && promoBar !== null) {
            isScrolled = window.scrollY > utilityNavigation.offsetHeight;
         } else if (promoBar !== null) {
            isScrolled = window.scrollY > promoBar.offsetHeight;
         } else if (utilityNavigation !== null) {
            isScrolled = window.scrollY > utilityNavigation.offsetHeight;
         } else {
            isScrolled = window.scrollY > 0;
         }

         if (isScrolled) {
            setScrolled(true);
            // recalculate #offcanvas-navigation offset top on scroll
            if (offcanvasNavigation) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + "px";

               // recalculate #body-content offset top on scroll
               if (headerStyle === "overlap") {
                  bodyContent.style.paddingTop = promoBar.offsetHeight + "px";
               } else {
                  bodyContent.style.paddingTop = mainNavigation.offsetHeight + promoBar.offsetHeight + "px";
               }
            }
         } else {
            setScrolled(false);

            // calculate #offcanvas-navigation menu offset top
            if (offcanvasNavigation) {
               offcanvasNavigation.style.top = mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight + "px";

               // recalculate #body-content offset top on scroll
               if (headerStyle === "overlap") {
                  bodyContent.style.paddingTop = "0px";
               } else {
                  bodyContent.style.paddingTop = null;
               }
            }
         }
      };

      document.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
      window.addEventListener("load", handleLoad, { passive: true });

      return () => {
         document.removeEventListener("scroll", handleScroll);
         window.removeEventListener("resize", handleResize);
         window.removeEventListener("load", handleLoad);
      };
   }, [scrolled, headerStyle]);

   return (
      <div id="site-navigation" className="relative z-10">
         <UtilityNav />
         <PromoBar scrolled={scrolled} />
         <MainNav scrolled={scrolled} headerStyle={headerStyle} headerLinkColor={headerLinkColor} headerHasBorder={headerHasBorder} />
      </div>
   );
};
export default Header;
