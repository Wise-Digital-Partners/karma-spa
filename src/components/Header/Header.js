import React, { useState, useEffect } from 'react'

import PromoBar from '../Header/PromoBar'
import UtilityNav from '../Header/UtilityNav'
import MainNav from '../Header/MainNav'

const Header = ({headerStyle, headerLinkColor, headerHasBorder}) => {
  
  // determine if page has scrolled
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const siteNavigation = document.querySelector('#site-navigation');
    const promoBar = document.querySelector('#promo-bar');
    const utilityNavigation = document.querySelector('#utlity-navigation');
    const mainNavigation = document.querySelector('#main-navigation');
    const mobileNavigation = document.querySelector('#mobile-menu');
    const bodyContent = document.querySelector('#body-content');
    
    const handleResize = () => {
      // recalculate mobile menu offset top on resize
      mobileNavigation.style.top = siteNavigation.offsetHeight + 'px';
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
        mobileNavigation.style.top = mainNavigation.offsetHeight + 'px';
        if (headerStyle === 'overlap') {
          bodyContent.style.marginTop = '0px';
        } else if (headerStyle === 'classic') {
          bodyContent.style.marginTop = mainNavigation.offsetHeight + 'px';
        }
      } else {
        setScrolled(false);
        if (headerStyle === 'overlap') {
          bodyContent.style.marginTop = '-' + mainNavigation.offsetHeight + 'px';
        } else if (headerStyle === 'classic') {
          bodyContent.style.marginTop = null;
        }
      }
    };

    // calculate mobile menu offset top
    mobileNavigation.style.top = siteNavigation.offsetHeight + 'px';

    if (headerStyle === 'overlap') {
      // calculate body content offset top
      bodyContent.style.marginTop = '-' + mainNavigation.offsetHeight + 'px';
    }    

    document.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  return (
    <div id="site-navigation" className="relative z-10">
      <PromoBar />
      <UtilityNav />
      <MainNav scrolled={scrolled} headerStyle={headerStyle} headerLinkColor={headerLinkColor} headerHasBorder={headerHasBorder} />
    </div>
  );
}
export default Header;