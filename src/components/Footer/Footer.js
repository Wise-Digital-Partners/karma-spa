import React from "react";
import { useStaticQuery, graphql, Script, Link } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";
import ModalChooseLocation from "../Modal/ModalChooseLocation";
import ModalHillcrest from "../Modal/ModalHillcrest";
import ModalCarlsbad from "../Modal/ModalCarlsbad";
import ModalPromotion from "../Modal/ModalPromotion";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const data = useStaticQuery(graphql`
    {
      desktopLogo: file(relativePath: { eq: "global/logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 153, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mobileLogo: file(relativePath: { eq: "global/logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 117, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      nestLogo: file(relativePath: { eq: "global/nest-logo.png" }) {
        childImageSharp {
          fixed(width: 25, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  let logo = [
    data.mobileLogo.childImageSharp.fluid,
    {
      ...data.desktopLogo.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <div>
      <footer className="bg-gray-900 pb-8 text-center md:text-left">
        <div className="container">
          <div className="py-10 mx-auto  max-w-[950px] ">
            <p className="mb-0 pb-0 text-sm leading-6 text-center font-heading text-white text-opacity-80">
              <b className="text-opacity-1">Disclaimer:</b> Please call us if you think you’ll
              arrive late for your appointment. We provide a 5-minute grace period, but anything
              beyond that will shorten your massage time. If you cancel within two hours of your
              scheduled time slot or do not show up, you will be charged a 50% cancellation fee.
            </p>
          </div>
          <div className="md:flex md:justify-between mb-20 md:mb-28">
            <div className="md:flex md:flex-col md:justify-around mb-12 md:mb-0">
              <Img className="mb-10 md:mb-0 mx-auto md:mx-0" fluid={logo} alt="Karma Spa Logo" />

              <ul className="mt-4 mb-12 md:mb-0">
                <li className="text-xsmall font-bold uppercase mb-8 md:mb-0 md:mr-8">
                  <AniLink
                    className="text-white hover:text-white hover:text-opacity-50 no-underline"
                    fade
                    to="/faqs/"
                  >
                    FAQs
                  </AniLink>
                </li>
                <li className="text-xsmall font-bold uppercase mb-8 md:mb-0 md:mr-8">
                  <AniLink
                    className="text-white hover:text-white hover:text-opacity-50 no-underline"
                    fade
                    to="/join-our-team/"
                  >
                    Join Our Team
                  </AniLink>
                </li>
                <li className="text-xsmall font-bold uppercase">
                  <a
                    className="text-white hover:text-white hover:text-opacity-50 no-underline"
                    data-modal-open="modal-contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-12 lg:gap-x-32 md:mt-8">
              {/* <div>
                        <p className="text-xl md:text-2xl font-heading text-white font-bold mb-4 md:mb-5">Resources</p>
                        <ul className="">
                           <li className="navigation-itemm whitespace-nowrap">
                              <AniLink className="hover:text-white" fade to="/about/">
                                 About
                              </AniLink>
                           </li>
                           <li className="navigation-itemm whitespace-nowrap">
                              <AniLink className="hover:text-white" fade to="/gift-cards/">
                                 Gift Cards
                              </AniLink>
                           </li>
                           <li className="navigation-itemm whitespace-nowrap">
                              <AniLink className="hover:text-white" fade to="/massage-membership/">
                                 Membership
                              </AniLink>
                           </li>
                           <li className="navigation-itemm whitespace-nowrap">
                              <AniLink className="hover:text-white" fade to="/blog/">
                                 Blog
                              </AniLink>
                           </li>
                           <li className="navigation-itemm whitespace-nowrap">
                              <AniLink className="hover:text-white" fade to="/faqs/">
                                 FAQs
                              </AniLink>
                           </li>
                        </ul>
                     </div> */}
              <div>
                <p className="text-xl md:text-2xl font-heading text-white font-bold mb-4 md:mb-5">
                  San Diego (Hillcrest)
                </p>
                <address className="mb-3 not-italic">
                  <a
                    className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline"
                    href="https://goo.gl/maps/zSEfN99mNfyrmzbD7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    3969 1st Ave <br /> San Diego, CA 92103
                  </a>
                </address>
                <p className="mb-0">
                  <a
                    className="gtm-phone-number text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline"
                    href="tel:+1-619-299-9888"
                  >
                    Call: (619) 299-9888
                  </a>
                  <br />
                  <a
                    className="gtm-phone-number text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline"
                    href="sms:+1-619-916-1608"
                  >
                    Text: (619) 916-1608
                  </a>
                </p>
                <div className="flex items-center justify-center md:justify-start mt-4">
                  <a
                    href="https://www.instagram.com/karmaspahillcrest/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-white hover:text-white hover:text-opacity-50 text-xl mr-6 transition-all duration-300 ease-linear"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/karmarelaxationspa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-white hover:text-white hover:text-opacity-50 text-lg mr-6 transition-all duration-300 ease-linear"></i>
                  </a>
                  <a
                    href="https://twitter.com/karma3969?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter text-white hover:text-white hover:text-opacity-50 text-xl transition-all duration-300 ease-linear"></i>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-heading text-white font-bold mb-4 md:mb-5">
                  Carlsbad
                </p>
                <address className="mb-3 not-italic">
                  <a
                    className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline"
                    href="https://goo.gl/maps/aWKmP9w1CPpZvqcr5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2614 El Camino Real <br /> Carlsbad, CA 92008
                  </a>
                </address>
                <p className="mb-0">
                  <a
                    className="gtm-phone-number text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline"
                    href="tel:+1-760-729-9888"
                  >
                    Call: (760) 729-9888
                  </a>
                  <br />
                  <a
                    className="gtm-phone-number text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline"
                    href="sms:+1-760-729-9889"
                  >
                    Text: (760) 729-9889
                  </a>
                </p>
                <div className="flex items-center justify-center md:justify-start mt-4">
                  <a
                    href="https://www.instagram.com/karmaspacarlsbad/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-white hover:text-white hover:text-opacity-50 text-xl mr-6 transition-all duration-300 ease-linear"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/karmaspacarlsbad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-white hover:text-white hover:text-opacity-50 text-lg mr-6 transition-all duration-300 ease-linear"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-no-wrap flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex gap-x-4 lg:gap-x-2">
              <ul className="flex items-center flex-col md:flex-row mb-4 md:mb-0">
                <li className="text-small text-white opacity-75 mb-1 md:mb-0 md:mr-10">
                  © {getYear()} Karma Spa
                </li>
              </ul>
              <Link
                to="/privacy-policy"
                className="text-small text-white opacity-75 mb-1 md:mb-0 md:mr-10 hover:text-white hover:opacity-50"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex items-center text-small text-white text-opacity-75">
              Powered by{" "}
              <a
                className="text-white hover:text-white hover:text-opacity-50 text-opacity-100 font-bold flex items-center font-medium ml-1"
                href="https://www.wisedigitalpartners.com/affordable-web-design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEST{" "}
                <sup className="text-3xs" style={{ paddingLeft: "2px" }}>
                  TM
                </sup>{" "}
                <Img className="ml-1" fixed={data.nestLogo.childImageSharp.fixed} alt="nest Logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
      <ModalChooseLocation />
      <ModalPromotion />
      <ModalHillcrest />
      <ModalCarlsbad />
      <Script
        id="boulevard-overlay"
        dangerouslySetInnerHTML={{
          __html: `(function (a) {
                     var b = {
                     businessId: '07049247-5a21-4080-8101-abaa68be0edd',
                     };
                     var c = a.createElement('script');
                     var d = a.querySelector('script');
                     c.src = 'https://static.joinboulevard.com/injector.min.js';
                     c.async = true;
                     c.onload = function () {
                     blvd.init(b);
                     };
                     d.parentNode.insertBefore(c, d);
                     })(document);`,
        }}
      />
    </div>
  );
};

export default Footer;
