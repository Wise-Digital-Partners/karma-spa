import React from "react";
const ScrollContent = ({ children }) => {
   return (
      <div className="lg:col-end-13 lg:col-span-9 scroll-content relative bg-gray-100 px-0 lg:px-28 lg:pt-32 lg:pb-28 after:absolute after:top-0 after:right-0 after:h-full after:w-full after:bg-gray-100 after:transform after:translate-x-full">
         {children}
      </div>
   );
};

export default ScrollContent;
