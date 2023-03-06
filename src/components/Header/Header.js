import React, { useState, useEffect } from "react";

import PromoBar from "../Header/PromoBarPh";
import UtilityNav from "../Header/UtilityNav";
import MainNav from "../Header/MainNav";

const Header = ({ headerStyle, headerLinkColor, headerHasBorder, setBodyOffset }) => {
   // determine if page has scrolled
   const [scrolled, setScrolled] = useState(false);

   // determine offcanvas offset
   const [offcanvasOffset, setOffcanvasOffset] = useState(0);

   // change state on scroll
   useEffect(() => {
      const promoBar = document.querySelector("#promo-bar-ph"),
         utilityNavigation = document.querySelector("#utlity-navigation"),
         mainNavigation = document.querySelector("#main-navigation");

      if (utilityNavigation !== null && promoBar !== null) {
         setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight);
      } else if (utilityNavigation && promoBar !== null) {
         setOffcanvasOffset(mainNavigation.offsetHeight + utilityNavigation.offsetHeight);
      } else if (utilityNavigation !== null && promoBar) {
         setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight);
      } else {
         setOffcanvasOffset(mainNavigation.offsetHeight);
      }

      const handleLoad = () => {
         // calculate #offcanvas-navigation menu offset top
         if (utilityNavigation !== null && promoBar !== null) {
            setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight);
         } else if (utilityNavigation && promoBar !== null) {
            setOffcanvasOffset(mainNavigation.offsetHeight + utilityNavigation.offsetHeight);
         } else if (utilityNavigation !== null && promoBar) {
            setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight);
         } else {
            setOffcanvasOffset(mainNavigation.offsetHeight);
         }
      };

      const handleResize = () => {
         // calculate #offcanvas-navigation offset top on resize
         if (utilityNavigation !== null && promoBar !== null) {
            setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight + utilityNavigation.offsetHeight);
         } else if (utilityNavigation && promoBar !== null) {
            setOffcanvasOffset(mainNavigation.offsetHeight + utilityNavigation.offsetHeight);
         } else if (utilityNavigation !== null && promoBar) {
            setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight);
         } else {
            setOffcanvasOffset(mainNavigation.offsetHeight);
         }
      };

      const handleScroll = () => {
         let isScrolled;

         if (utilityNavigation !== null && promoBar !== null) {
            isScrolled = window.scrollY > utilityNavigation.offsetHeight;
         } else if (promoBar !== null) {
            isScrolled = window.scrollY > 0;
         } else if (utilityNavigation !== null) {
            isScrolled = window.scrollY > utilityNavigation.offsetHeight;
         } else {
            isScrolled = window.scrollY > 0;
         }

         if (isScrolled) {
            setScrolled(true);
            // recalculate #offcanvas-navigation offset top on scroll
            setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight);

            // recalculate #body-content offset top on scroll
            if (headerStyle === "overlap") {
               setBodyOffset(0 + promoBar.offsetHeight);
            } else {
               setBodyOffset(mainNavigation.offsetHeight + promoBar.offsetHeight);
            }
         } else {
            setScrolled(false);

            // calculate #offcanvas-navigation menu offset top
            setOffcanvasOffset(mainNavigation.offsetHeight + promoBar.offsetHeight);

            // recalculate #body-content offset top on scroll
            if (headerStyle === "overlap") {
               setBodyOffset(0);
            } else {
               setBodyOffset(0);
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
   }, [scrolled, headerStyle, setBodyOffset]);

   return (
      <div id="site-navigation" className="relative z-10">
         <UtilityNav />
         <PromoBar scrolled={scrolled} />
         <MainNav
            scrolled={scrolled}
            offcanvasOffset={offcanvasOffset}
            headerStyle={headerStyle}
            headerLinkColor={headerLinkColor}
            headerHasBorder={headerHasBorder}
         />
      </div>
   );
};
export default Header;
