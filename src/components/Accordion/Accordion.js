import React, { useState, useRef } from "react";
import styled from '@emotion/styled';
import tw from 'twin.macro';

const StyledAccordion = styled.div`
    .accordion-content {
        p {
            &:last-child {
                ${tw`mb-0`}
            }
        }
    }
`

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setIcon, setIconState] = useState("far fa-chevron-down");
  
    const content = useRef(null);
  
    function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
      );
      setIconState(
        setActive === "active" ? "far fa-chevron-down" : "far fa-minus"
      );
    }
  
    return (
        <StyledAccordion className="flex flex-col bg-white rounded shadow-md mb-6 overflow-hidden">
            <button className={`flex items-center justify-between px-4 py-3 border-b border-solid border-gray-200 border-opacity-25 focus:outline-none cursor-pointer ${setActive}`} onClick={toggleAccordion}>
                <p className="font-heading md:text-lg text-gray-900 mb-0">{props.title}</p>
                <i className={`${setIcon} text-black`} />
            </button>
            <div ref={content} className="overflow-auto transition-all duration-300 ease-linear" style={{ maxHeight: `${setHeight}` }}>
                <div dangerouslySetInnerHTML={{ __html: props.content }} className="px-4 pt-6 pb-8 accordion-content"></div>
            </div>
        </StyledAccordion>
    );
  }
  
  export default Accordion;