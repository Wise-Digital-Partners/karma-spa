import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const StyledModal = styled.div`
  .modal {
    &.is-open {
      ${tw`block`}
    }
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    .content-wrapper,
    .overlay {
      will-change: transform;
    }
  }
  @keyframes mmfadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mmfadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mmslideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes mmslideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const Modal = () => {
  const data = useStaticQuery(graphql`
    {
      desktopImage: file(relativePath: { eq: "modal/modal-promotion-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileImage: file(relativePath: { eq: "modal/modal-promotion-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  if (typeof window !== `undefined`) {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  // handle click
  const closeClickHandler = () => {
    MicroModal.close("modal-promotion");
  };

  return (
    <div>
      <StyledModal>
        <div className="modal relative hidden z-40" id="modal-promotion" aria-hidden="false">
          <div
            className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none"
            tabIndex="-1"
            // onClick={closeClickHandler}
            data-micromodal-close
          >
            <div
              className="content-wrapper bg-white w-full  overflow-auto mx-4 my-10 max-w-[1110px] lg:mx-auto "
              role="dialog"
              aria-modal="true"
            >
              <div
                className="flex flex-col-reverse lg:grid grid-cols-[384px_auto] "
                aria-modal="true"
              >
                <Img
                  fluid={data.desktopImage.childImageSharp.fluid}
                  priority={true}
                  className="hidden lg:flex  object-cover h-full lg:w-[384px]"
                />
                <Img
                  fluid={data.mobileImage.childImageSharp.fluid}
                  priority={true}
                  className="flex lg:hidden object-cover h-full lg:w-[384px]"
                />
                <div className="p-16 w-full text-[#666] font-heading ">
                  <div className="text-[36px] font-bold text-[#1A1A1A]">
                    Make Mother&apos;s Day Unforgettable
                  </div>
                  <div className="text-[30px] ">
                    <p className="text-[30px]">
                      Give the gift of pure bliss with one (or all three) of our new spa packages:
                    </p>
                    <p className="text-[30px]">
                      <span className="font-semibold ">Head-to-Glow:</span> A full-body 2-hour
                      refresh
                      <br />
                      <span className="font-semibold">Revive & Renew:</span> Nearly 3 hours of total
                      rejuvenation
                      <br />
                      <span className="font-semibold">Ultimate Karma:</span> 4 hours of
                      well-deserved luxury
                      <br />
                    </p>
                    <p className="text-[30px]">
                      Limited availability—book now to gift Mom a full day of pampering.
                    </p>
                  </div>
                  <ButtonSolid
                    href="/massage-packages-san-diego/"
                    text="View Spa Package"
                    className="w-full font-bold font-body text-base"
                  />
                </div>
              </div>

              <i
                className="close fal fa-times absolute top-0 right-0 mr-8 mt-8 md:mr-12 md:mt-12 text-2xl text-black hover:text-primary_400 focus:text-primary_400 active:text-primary_400 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
                onClick={closeClickHandler}
              ></i>
            </div>
          </div>
        </div>
      </StyledModal>
    </div>
  );
};

export default Modal;
