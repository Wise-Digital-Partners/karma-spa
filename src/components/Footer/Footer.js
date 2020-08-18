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
      logo: file(relativePath: {eq: "global/logo-white.png"}) {
        childImageSharp {
          fixed(width: 153, quality: 100) {
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

  return (
    <div>
      <footer className="bg-gray-900 pt-32 pb-6 text-center md:text-left">
          <div className="container">

            <div className="flex justify-between mb-24">
              <div className="mb-10 md:mb-0">
                {/* <img className="mb-24" src="https://via.placeholder.com/152x63?text=FPO" alt="Karma Spa Logo" /> */}
                <Img className="mb-3" fixed={data.logo.childImageSharp.fixed} alt="Karma Spa Logo" />
                <div className="flex items-center justify-center md:justify-start mt-10">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-white hover:text-primary_400 text-2xl mr-6 base-animation-ease"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f text-white hover:text-primary_400 text-xl base-animation-ease"></i>
                  </a>   
                  <ul className="flex list-none md:ml-12">
                    <li className="text-xsmall font-bold uppercase mb-1 md:mb-0 md:mr-8"><AniLink className="text-white no-underline" fade to="/faqs/">FAQs</AniLink></li>
                    <li className="text-xsmall font-bold uppercase mb-1 md:mb-0 md:mr-8"><AniLink className="text-white no-underline" fade to="/join-our-team/">Join Our Team</AniLink></li>
                    <li className="text-xsmall font-bold uppercase mb-1 md:mb-0"><a className="text-white no-underline" data-modal-open="modal-contact">Contact</a></li>
                  </ul>
                </div>                 
              </div>
              <div className="grid grid-cols-2 col-gap-32">
                <div>
                  <p className="text-2xl font-heading text-white font-bold mb-4 md:mb-5">San Diego</p>
                  <address className="mb-4 not-italic">
                    <a className="text-small text-white opacity-75 no-underline" href="https://goo.gl/maps/zSEfN99mNfyrmzbD7" target="_blank" rel="noopener noreferrer">3969 1st Ave <br/> San Diego, CA 92103</a>
                  </address>
                  <p className="mb-0">
                    <a className=" text-small text-white opacity-75 no-underline" href="tel:+1-619-299-9888">Call: (619) 299-9888</a>
                    <br/>
                    <a className="text-small text-white opacity-75 no-underline" href="tel:+1-619-359-8841">Text: (619) 359-8841</a>
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-heading text-white font-bold mb-4 md:mb-5">Carlsbad</p>
                  <address className="mb-4 not-italic">
                    <a className="text-small text-white opacity-75 no-underline" href="https://goo.gl/maps/aWKmP9w1CPpZvqcr5" target="_blank" rel="noopener noreferrer">2614 El Camino Real <br/> Carlsbad, CA 92008</a>
                  </address>
                  <p className="mb-0">
                    <a className=" text-small text-white opacity-75 no-underline" href="tel:+1-760-729-9888">Call: (760) 729-9888</a>
                    <br/>
                    <a className="text-small text-white opacity-75 no-underline" href="tel:+1-760-729-9889">Text: (760) 729-9889</a>
                  </p>
                </div>                
              </div>
            </div>             

            <div className="flex flex-wrap md:flex-no-wrap flex-col md:flex-row items-center justify-center md:justify-between">
              <ul className="flex items-center flex-col md:flex-row ">
                <li className="text-small text-white opacity-75 mb-1 md:mb-0 md:mr-10">© {getYear()} Karma Spa</li>
              </ul>
              <p className="flex items-center text-small text-white mb-0 powered-by-nest">Powered by <a className="flex items-center font-medium ml-1" href="https://www.wisedigitalpartners.com/affordable-web-design/" target="_blank" rel="noopener noreferrer">nest <Img className="ml-1" fixed={data.nestLogo.childImageSharp.fixed} alt="nest Logo" /></a></p>
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