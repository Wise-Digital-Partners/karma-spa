import React from "react";

import Layout from "../components/Layout";
import ButtonSolid from "../components/Button/ButtonSolid";

const ErrorPage = () => {
   return (
      <Layout>
         <section className="md:mt-6 pt-24 pb-32 wrapper bg-gray-100">
            <div className="container">
               <header className="max-w-2xl">
                  <p className="heading-one">That page can’t be found.</p>
                  <p>
                     The page you were looking for appears to have been moved, deleted or does not exist. Please use the navigation above or return to
                     the home page.
                  </p>
                  <ButtonSolid href="/" text="Back To Homepage" />
               </header>
            </div>
         </section>
      </Layout>
   );
};

export default ErrorPage;
