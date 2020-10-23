import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children, headerStyle, headerLinkColor ,headerHasBorder }) => {
  return (
    <div>
      <Helmet>
        <meta name="google-site-verification" content="wzt0TStiRMy-L7CUp0Iz5NQsQ7FzxvA2oGqUpxYAgI4" />
      </Helmet>
      <Header headerStyle={headerStyle} headerLinkColor={headerLinkColor} headerHasBorder={headerHasBorder} />
      <main id="body-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;