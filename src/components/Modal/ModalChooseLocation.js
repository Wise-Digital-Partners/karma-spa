import React from 'react'
import MicroModal from 'micromodal'
import styled from '@emotion/styled';
import tw from 'twin.macro'

import ButtonSolid from "../Button/ButtonSolid"

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
    
    // handle click
    const closeClickHandler = () => {
        MicroModal.close('modal-choose-location');
    };  

    return (
        <div>
            <StyledModal>
                <div className="modal relative hidden z-40" id="modal-choose-location" aria-hidden="false"> 
                    <div className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none" tabIndex="-1" data-modal-close>
                        <div className="content-wrapper bg-white w-full h-screen overflow-auto max-w-3xl ml-auto py-20 px-6 md:px-20" role="dialog" aria-modal="true">
                            <p className="heading-three">Choose Your Location</p> 
                            <div className="grid grid-cols-2 col-gap-4 md:col-gap-8 mt-12 max-w-sm">
                                <div className="w-full md:w-auto" onClick={closeClickHandler}>
                                    <ButtonSolid className="w-full md:w-auto" href="https://go.booker.com/location/karmaspa/service-menu"target="_blank" rel="noopener noreferrer" text="Hillcrest" />
                                </div>
                                <div className="w-full md:w-auto" onClick={closeClickHandler}>
                                    <ButtonSolid className="w-full md:w-auto" href="https://go.booker.com/location/karmarelaxationspa2/service-menu"target="_blank" rel="noopener noreferrer" text="Carlsbad" />
                                </div>
                            </div>
                            <i className="close fal fa-times absolute top-0 right-0 mr-8 mt-8 md:mr-12 md:mt-12 text-2xl text-black hover:text-primary_400 focus:text-primary_400 active:text-primary_400 cursor-pointer transition-all duration-300 ease-linear" data-modal-close></i>
                        </div>
                    </div>
                </div>
            </StyledModal>
        </div>                
    );
}

export default Modal;