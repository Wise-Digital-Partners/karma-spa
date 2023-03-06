import React from "react";
// import PromoSlider from "../Slider/PromoSlider";
// import TeamSlider from "../Slider/SliderTeamMembers";


const PromoBar = ({ scrolled }) => {
   return (
       <div id="promo-bar-ph" className={`-top-[20px] bg-gray-100 py-2 text-center ${scrolled && " left-0 w-full z-20"}`}>
         <div className="">


         </div>
      </div>
   );
};
export default PromoBar;
