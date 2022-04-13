import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, headerStyle, headerLinkColor, headerHasBorder }) => {
   const [bodyOffset, setBodyOffset] = useState(0);

   return (
      <div>
         <Helmet>
            <meta name="google-site-verification" content="t2EFN3kQsk9CfHxTvwgktMYhNmiYQatcMUXWrO8rCOE" />
         </Helmet>
         <Header headerStyle={headerStyle} headerLinkColor={headerLinkColor} headerHasBorder={headerHasBorder} setBodyOffset={setBodyOffset} />
         <main id="body-content" style={{ paddingTop: bodyOffset + "px" }}>
            {children}
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
