import React from "react";

const PromoBar = ({ scrolled }) => {
   return (
      <div id="promo-bar" className={`bg-secondary_400 py-2 text-center ${scrolled && "fixed top-0 left-0 w-full z-20"}`}>
         <div className="container">
            <p className="text-white text-small md:text-base mb-0">$5 off per person on select services when you pay with cash!</p>
         </div>
      </div>
   );
};
export default PromoBar;
