import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

const StyledCTA = styled.section`
   ${tw`flex!`}
`;

const CTA = ({ className }) => {
   return (
      <StyledCTA className={`wrapper ${className}`}>
         <div className="container">
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="heading-one mb-6">Affordable Indulgence Starts Here.</h2>
               <p className="font-heading text-xl md:text-2xl leading-8 text-gray-900 font-light max-w-xl mx-auto mb-12">
                  Your ticket to bliss is moments away. Book an appointment at our San Diego massage spa today!
               </p>
               <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 max-w-sm mx-auto">
                  <ButtonSolid
                     href="https://login.meevo.com/KarmaRelaxSpa/ob?locationId=203929"
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
            </div>
         </div>
      </StyledCTA>
   );
};

export default CTA;
