import React from "react";
import styled from "@emotion/styled";
// import tw from "twin.macro";

const Button = styled.a``;

export default (props) => (
   <Button
      as={props.as}
      type={props.type}
      className={`inline-flex 
      items-center
      text-black hover:text-primary_400 group-hover:text-primary_400
      font-normal
      text-md
      no-underline
      cursor-pointer 
      focus:outline-none 
      transition-all 
      duration-300 
      ease-in-out ${props.className}`}
      href={props.href}
      target={props.target}
      rel={props.rel}
      data-modal-open={props.data}
   >
      {props.text}
      <i class="fal fa-arrow-right ml-3"></i>
   </Button>
);
