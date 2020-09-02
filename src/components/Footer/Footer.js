import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import ModalContact from '../Modal/ModalContact'
import ModalChooseLocation from '../Modal/ModalChooseLocation'
import ModalHillcrest from '../Modal/ModalHillcrest'
import ModalCarlsbad from '../Modal/ModalCarlsbad'

const Footer = () => {

  const getYear = () => {
    return new Date().getFullYear();
  }

  const data = useStaticQuery(graphql`
    {
      desktopLogo: file(relativePath: {eq: "global/logo-white.png"}) {
        childImageSharp {
          fixed(width: 153, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      mobileLogo: file(relativePath: {eq: "global/logo-white.png"}) {
        childImageSharp {
          fixed(width: 117, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      } 
      nestLogo: file(relativePath: {eq: "global/nest-logo.png"}) {
        childImageSharp {
          fixed(width: 25, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }      
    }
  `)
  
  let logo = [
    data.desktopLogo.childImageSharp.fixed,
    {
    ...data.mobileLogo.childImageSharp.fixed,
        media: `(max-width: 767px)`,
    },
]   

  return (
    <div>
      <footer className="bg-gray-900 pt-18 md:pt-32 pb-8 text-center md:text-left">
          <div className="container">

            <div className="md:flex md:justify-between mb-20 md:mb-28">
              <div className="md:flex md:flex-col md:justify-between mb-12 md:mb-0">

                <Img className="mb-10 md:mb-0" fixed={logo} alt="Karma Spa Logo" />

                <ul className="md:flex list-none mb-12 md:mb-0">
                  <li className="text-xsmall font-bold uppercase mb-8 md:mb-0 md:mr-8"><AniLink className="text-white hover:text-white hover:text-opacity-50 no-underline" fade to="/faqs/">FAQs</AniLink></li>
                  <li className="text-xsmall font-bold uppercase mb-8 md:mb-0 md:mr-8"><AniLink className="text-white hover:text-white hover:text-opacity-50 no-underline" fade to="/join-our-team/">Join Our Team</AniLink></li>
                  <li className="text-xsmall font-bold uppercase"><a className="text-white hover:text-white hover:text-opacity-50 no-underline" data-modal-open="modal-contact">Contact</a></li>
                </ul>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 row-gap-12 md:row-gap-0 md:col-gap-12 lg:col-gap-32 md:mt-8">
                <div>
                  <p className="text-xl md:text-2xl font-heading text-white font-bold mb-4 md:mb-5">San Diego</p>
                  <address className="mb-3 not-italic">
                    <a className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline" href="https://goo.gl/maps/zSEfN99mNfyrmzbD7" target="_blank" rel="noopener noreferrer">3969 1st Ave <br/> San Diego, CA 92103</a>
                  </address>
                  <p className="mb-0">
                    <a className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline" href="tel:+1-619-299-9888">Call: (619) 299-9888</a>
                    <br/>
                    <a className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline" href="tel:+1-619-359-8841">Text: (619) 359-8841</a>
                  </p>
                  <div className="flex items-center justify-center md:justify-start mt-4">
                    <a href="https://www.instagram.com/karmaspahillcrest/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram text-white hover:text-white hover:text-opacity-50 text-xl mr-6 base-animation-ease"></i>
                    </a>
                    <a href="https://www.facebook.com/karmarelaxationspa/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f text-white hover:text-white hover:text-opacity-50 text-lg mr-6 base-animation-ease"></i>
                    </a> 
                    <a href="https://twitter.com/karma3969?lang=en" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter text-white hover:text-white hover:text-opacity-50 text-xl base-animation-ease"></i>
                    </a>                     
                  </div> 
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-heading text-white font-bold mb-4 md:mb-5">Carlsbad</p>
                  <address className="mb-3 not-italic">
                    <a className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline" href="https://goo.gl/maps/aWKmP9w1CPpZvqcr5" target="_blank" rel="noopener noreferrer">2614 El Camino Real <br/> Carlsbad, CA 92008</a>
                  </address>
                  <p className="mb-0">
                    <a className=" text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline" href="tel:+1-760-729-9888">Call: (760) 729-9888</a>
                    <br/>
                    <a className="text-small text-white hover:text-white opacity-75 hover:opacity-100 no-underline" href="tel:+1-760-729-9889">Text: (760) 729-9889</a>
                  </p>
                  <div className="flex items-center justify-center md:justify-start mt-4">
                    <a href="https://www.instagram.com/karmaspacarlsbad/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram text-white hover:text-white hover:text-opacity-50 text-xl mr-6 base-animation-ease"></i>
                    </a>
                    <a href="https://www.facebook.com/karmaspacarlsbad" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f text-white hover:text-white hover:text-opacity-50 text-lg mr-6 base-animation-ease"></i>
                    </a>                     
                  </div>  
                </div>  

              </div>
            </div>             

            <div className="flex flex-wrap md:flex-no-wrap flex-col md:flex-row items-center justify-center md:justify-between">
              <ul className="flex items-center flex-col md:flex-row mb-4 md:mb-0">
                <li className="text-small text-white opacity-75 mb-1 md:mb-0 md:mr-10">© {getYear()} Karma Spa</li>
              </ul>
              <div className="flex items-center text-small text-white text-opacity-75">Powered by <a className="text-white hover:text-white hover:text-opacity-50 text-opacity-100 font-bold flex items-center font-medium ml-1" href="https://www.wisedigitalpartners.com/affordable-web-design/" target="_blank" rel="noopener noreferrer">nest <Img className="ml-1" fixed={data.nestLogo.childImageSharp.fixed} alt="nest Logo" /></a></div>
            </div>

          </div>
      </footer>

      <ModalContact />
      <ModalChooseLocation />
      <ModalHillcrest />
      <ModalCarlsbad />

    </div>
  );
}

export default Footer;