import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
   return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const StyledForm = styled.div`
   form {
      ${tw`flex flex-wrap`}
   }
   .field {
      ${tw`mb-6 w-full`}
   }
   .label {
      ${tw`block text-sm font-bold text-gray-800 mb-2`}
   }
   input[type="text"],
  input[type="tel"],
  input[type="email"],
  /* select, */
  textarea {
      ${tw`w-full px-4 py-3 border border-solid border-gray-200 rounded-sm`}
      &:focus,
    &:active {
         ${tw`border-black outline-none`}
      }
   }
   /* select {
    ${tw`h-12 appearance-none cursor-pointer`}
  } */
   /* .select-wrapper {
    ${tw`relative`}
    &:after {
      content: "\f078";
      font-family: "Font Awesome 5 Pro";
      ${tw`absolute font-normal transform translate-y-3 -translate-x-10`}
    }
  }   */
`;

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.state = { isValidated: false };
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
         }),
      })
         .then(
            () =>
               (document.getElementById("contact-form-ajax-response").innerHTML =
                  "Thank you for contacting us! We will get in touch with you shortly."),
            form.remove(),
            (window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
               event: "contactFormSubmission",
            })
         )
         .catch((error) => alert(error));
   };

   render() {
      return (
         <StyledForm>
            <div id="contact-form-ajax-response"></div>
            <form name="Contact" method="post" action="" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
               {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
               <input type="hidden" name="form-name" value="Contact" />
               <div hidden>
                  <label>
                     Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                  </label>
               </div>

               <div className="field">
                  <label className="label" htmlFor="name">
                     Name
                  </label>
                  <input type="text" name="name" onChange={this.handleChange} id="name" required={true} />
               </div>

               {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full"> */}
               <div className="field">
                  <label className="label" htmlFor="email">
                     Email Address
                  </label>
                  <input type="email" name="email" onChange={this.handleChange} id="email" required={true} />
               </div>
               {/* <div className="field">
              <label className="label" htmlFor="phone">Phone Number</label>
              <input
                  type="tel"
                  name="phone"
                  onChange={this.handleChange}
                  id="phone"
                  required={true}
              />
          </div>  */}
               {/* </div> */}

               <div className="field">
                  <fieldset>
                     <legend className="label">Select a Location</legend>
                     <div className="inline-flex flex-col mt-2 mb-1">
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="radio" name="location" value="Hillcrest" onChange={this.handleChange} required={true} />
                           Hillcrest
                           <span className="radio-checkmark"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="radio" name="location" onChange={this.handleChange} value="Carlsbad" />
                           Carlsbad
                           <span className="radio-checkmark"></span>
                        </label>
                     </div>
                  </fieldset>
               </div>

               <div className="field">
                  <label className="label" htmlFor="message">
                     Message
                  </label>
                  <textarea className="textarea" name="message" onChange={this.handleChange} id="message" rows="4" required={true} />
               </div>
               {/* <div className="field">
               <label className="relative mb-2 cursor-pointer text-xs">
                  <input type="checkbox" className="checkbox" name="disclaimer1" required={true} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By providing a telephone number and submitting the form, you are consenting to be contacted by SMS text message from Karma Spa. Message frequency may vary. Message & data rates may apply. Reply STOP to opt out of further messaging. Reply HELP for more information.
                  </label>
               </div>
               <div className="field">
               <label className="relative mb-2 cursor-pointer text-xs">
                  <input type="checkbox" className="checkbox" name="disclaimer2"  required={true} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By entering your phone number, you are agreeing to receive text messages from us. Message rates may apply. You can reply STOP to opt out.
               </label>
               </div> */}


               
               <div className="mt-2">
                  <ButtonSolid as="button" type="submit" text="Submit" />
               </div>
            </form>
         </StyledForm>
      );
   }
}
