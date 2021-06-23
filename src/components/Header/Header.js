import React, { useState, useEffect } from "react";

import PromoBar from "../Header/PromoBar";
import UtilityNav from "../Header/UtilityNav";
import MainNav from "../Header/MainNav";

const Header = ({ headerStyle, headerLinkColor, headerHasBorder }) => {
   // determine if page has scrolled
   const [scrolled, setScrolled] = useState(false);

   // change state on scroll
   useEffect(() => {
      const siteNavigation = document.querySelector("#site-navigation");
      const promoBar = document.querySelector("#promo-bar");
      const utilityNavigation = document.querySelector("#utlity-navigation");
      const mainNavigation = document.querySelector("#main-navigation");
      const offcanvasNavigation = document.querySelector("#offcanvas-navigation");
      const bodyContent = document.querySelector("#body-content");

      // if (headerStyle === "overlap") {
      //    // calculate #body-content offset top
      //    bodyContent.style.marginTop = "-" + siteNavigation.offsetHeight + "px";
      // }

      const handleLoad = () => {
         // calculate #offcanvas-navigation menu offset top
         offcanvasNavigation.style.top = siteNavigation.offsetHeight + mainNavigation.offsetHeight + "px";
      };

      const handleResize = () => {
         // recalculate #offcanvas-navigation offset top on resize
         offcanvasNavigation.style.top = siteNavigation.offsetHeight + mainNavigation.offsetHeight + "px";
      };

      const handleScroll = () => {
         let isScrolled;

         if (utilityNavigation !== null && promoBar !== null) {
            isScrolled = window.scrollY > utilityNavigation.offsetHeight + promoBar.offsetHeight;
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
            offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";

            // recalculate #body-content offset top on scroll
            if (headerStyle === "overlap") {
               bodyContent.style.marginTop = "0px";
               bodyContent.style.paddingTop = null;
            } else {
               bodyContent.style.paddingTop = mainNavigation.offsetHeight + "px";
               bodyContent.style.marginTop = null;
            }
         } else {
            setScrolled(false);

            // calculate #offcanvas-navigation menu offset top
            offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";

            // recalculate #body-content offset top on scroll
            if (headerStyle === "overlap") {
               // bodyContent.style.marginTop = "-" + mainNavigation.offsetHeight + "px";
               bodyContent.style.paddingTop = null;
            } else {
               bodyContent.style.paddingTop = null;
               bodyContent.style.marginTop = null;
            }
         }
      };

      document.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });

      if (document.readyState === "complete") {
         handleLoad();
      } else {
         window.addEventListener("load", handleLoad, { passive: true });
      }

      return () => {
         document.removeEventListener("scroll", handleScroll);
         window.removeEventListener("resize", handleResize);
         window.removeEventListener("load", handleLoad);
      };
   }, [scrolled]);

   return (
      <div id="site-navigation" className="relative z-10">
         <PromoBar />
         <UtilityNav />
         <MainNav scrolled={scrolled} headerStyle={headerStyle} headerLinkColor={headerLinkColor} headerHasBorder={headerHasBorder} />
      </div>
   );
};
export default Header;
