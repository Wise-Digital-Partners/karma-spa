import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MicroModal from 'micromodal'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledModal = styled.div`
    .modal {
        &.is-open {
            ${tw`block`}
        }
        &[aria-hidden="false"] {
            .overlay {
                animation: mmfadeIn .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="false"] {
            .content-wrapper {
                animation: mmpopUp .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="true"] {
            .overlay {
                animation: mmfadeOut .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="true"] {
            .content-wrapper {
                animation: mmpopOut .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        .content-wrapper,
        .overlay {
            will-change: transform;
        } 
    }
    @keyframes mmfadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes mmfadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    @keyframes mmpopUp {
        from { transform: scale(0); }
        to { transform: scale(1); }
    }

    @keyframes mmpopOut {
        from { transform: scale(1); }
        to { transform: scale(0); }
    }
`

const Modal = () => {

    if (typeof window !== `undefined`) {
        MicroModal.init({
            openTrigger: 'data-modal-open',
            closeTrigger: 'data-modal-close',
            disableFocus: true,
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true,
        })
    }

    const data = useStaticQuery(graphql`
        {
            desktopLogoDark: file(relativePath: {eq: "global/logo-color.png"}) {
                childImageSharp {
                    fixed(width: 153, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }    
            mobileLogoDark: file(relativePath: {eq: "global/logo-color.png"}) {
                childImageSharp {
                    fixed(width: 114, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }        
        }
    `)    
    
    return (
        <div>
            <StyledModal>
                <div className="modal relative hidden z-40" id="modal-hillcrest" aria-hidden="false"> 
                    <div className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none" tabIndex="-1" data-modal-close>
                        <div className="content-wrapper bg-gray-100 w-full h-screen overflow-auto" role="dialog" aria-modal="true">
                            <div className="bg-white py-2 px-6 md:pl-16 lg:pl-28 md:pr-10 flex items-center justify-between">
                                <div className="flex items-center pr-6 mr-6">
                                    <div className="hidden md:flex pr-6 mr-6 border-r border-solid border-gray-200 border-opacity-50">
                                        <Img  fixed={data.desktopLogoDark.childImageSharp.fixed} alt="Karma Spa Logo" />
                                    </div>
                                    <div className="flex md:hidden pr-3 mr-3 border-r border-solid border-gray-200 border-opacity-50">
                                        <Img fixed={data.mobileLogoDark.childImageSharp.fixed} alt="Karma Spa Logo" />
                                    </div>                                    
                                    <span className="text-gray-900 text-lg md:text-2xl font-bold">Hillcrest</span>
                                </div>
                                <i className="close fal fa-times text-2xl text-black hover:text-primary_400 focus:text-primary_400 active:text-primary_400 cursor-pointer transition-all duration-300 ease-linear" data-modal-close></i>
                            </div>
                            <div className="py-20 px-6 md:px-20">
                                <div className="max-w-2xl mx-auto shadow-lg">
                                    <iframe src="https://go.booker.com/location/karmaspa/service-menu" width="100%" height="535px" />
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </StyledModal>
        </div>                
    );
}

export default Modal;