import React from 'react'
import MicroModal from 'micromodal'
import styled from '@emotion/styled';
import tw from 'twin.macro'

import Contact from '../Form/Contact'
import ButtonGhost from "../Button/ButtonGhost"

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
                animation: mmslideIn .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="true"] {
            .overlay {
                animation: mmfadeOut .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="true"] {
            .content-wrapper {
                animation: mmslideOut .5s cubic-bezier(0, 0, .2, 1);
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

    @keyframes mmslideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

    @keyframes mmslideOut {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }
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
     
    return (
        <div>
            <StyledModal>
                <div className="modal relative hidden z-50" id="modal-contact" aria-hidden="false"> 
                    <div className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none" tabIndex="-1" data-modal-close>
                        <div className="content-wrapper bg-white w-full h-screen overflow-auto max-w-3xl ml-auto py-20 px-6 md:px-20" role="dialog" aria-modal="true">
                            <header className="mb-8">
                                <p className="heading-three">Contact Karma Spa</p> 
                                <p className="mb-0">Do you have any questions or comments? Please reach out to us using the form below.</p>
                            </header>
                            <div className="flex flex-wrap md:flex-no-wrap md:grid-cols-2 row-gap-6 md:row-gap-0 col-gap-6 mb-10 md:mb-12">
                                <ButtonGhost className="gtm-phone-number w-full" href="tel:+1-619-299-9888" text="Hillcrest: (619) 299-9888"/>
                                <ButtonGhost className="gtm-phone-number w-full" href="tel:+1-760-729-9888" text="Carlsbad: (760) 729-9888"/>
                            </div>                            

                            <Contact />
                            <i className="close fal fa-times absolute top-0 right-0 mr-12 mt-12 text-2xl text-black hover:text-primary_400 focus:text-primary_400 active:text-primary_400 cursor-pointer transition-all duration-300 ease-linear" data-modal-close></i>
                        </div>
                    </div>
                </div>
            </StyledModal>
        </div>
    );
}
export default Modal;