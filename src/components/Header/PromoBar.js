import React from "react";
import PromoSlider from "../Slider/PromoSlider";
import TeamSlider from "../Slider/SliderTeamMembers";


const PromoBar = ({ scrolled }) => {
   return (
      <div id="promo-bar" className={`bg-secondary_400 py-2 text-center ${scrolled && "fixed top-0 left-0 w-full z-20"}`}>
         <div className="">
            <p className="text-white text-small md:text-base mb-0">Updated Hillcrest prices coming soon. Please call for up-to-date info!</p>

         </div>
      </div>
   );
};
export default PromoBar;
