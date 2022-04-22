import React from "react";
// import { graphql } from 'gatsby';
import styled from "@emotion/styled";
import tw from "twin.macro";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Accordion from "../components/Accordion/Accordion";

const Page = () => {
   return (
      <Layout headerLinkColor="black">
         <SearchEngineOptimization
            title="FAQs | Karma Spa | San Diego & Carlsbad Massage"
            description="Why is Karma Spa a top massage spa in San Diego County? Get answers to this and more questions on our FAQs page. Book an appointment today!"
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <section className="pt-10 md:pt-8 pb-12 md:pb-0 bg-gray-100 md:bg-transparent">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 ">
                  <div className="md:col-start-1 md:col-span-3 md:mr-4 md:mt-24">
                     <h1 className="mb-0">FAQs</h1>
                  </div>
                  <div className="md:col-end-13 md:col-span-9 relative bg-gray-100 md:p-24 md:after:absolute md:after:top-0 md:after:right-0 md:after:h-full md:after:w-full md:after:bg-gray-100 md:after:transform md:after:translate-x-full">
                     <Accordion
                        title="Why should I choose Karma Spa over another massage spa?"
                        content="<p>We specialize in Affordable Indulgence. Karma Spa brings you the best services from the worlds of massage, skin care, and aesthetic treatments to bring you the ultimate relaxation experience. We have many five-star reviews and two convenient locations to choose from.</p>"
                     />
                     <Accordion
                        title="Do you have any specials for first-time visitors?"
                        content="<p>Please reach out for our monthly specials!</p>"
                     />
                     <Accordion
                        title="What are the benefits of massage?"
                        content="<p>Massages come with multiple benefits such as stress & tension relief, pain relief, inflammation reduction, and relaxation.</p>"
                     />
                     <Accordion
                        title="I’m new to massage. What should I choose?"
                        content="<p>We recommend the <a href='#'>Swedish massage</a> to first timers.</p>"
                     />
                     <Accordion
                        title="Are there add-ons available for massage services?"
                        content="<p>Yes! Add-ons include Hot Stone, Aromatherapy, CBD Oil, Facial, and Masks. We have options depending on your needs.</p>"
                     />
                     <Accordion
                        title="What are your packages?"
                        content="<p>We have a wide variety of packages depending on your needs! Packages vary in length and type of services. Learn more about our packages <a href='/massage-packages/'>here</a>.</p>"
                     />
                     <Accordion
                        title="Tell me about your IV hydration therapy services."
                        content="<p>Our IV hydration therapy delivers essential nutrients into your body. Benefits include increased energy, boosted immune system, improved alertness, quick hydration, and reduced stress. These IV infusions and injections are available at our Hillcrest and Carlsbad locations. Learn more <a href='/iv-hydration-therapy/'>here</a>!</p>"
                     />
                     <Accordion
                        title="Tell me more about your skin care services."
                        content="<p>We offer facials, waxing, scrubs, and sauna or steam room sessions as part of our skin care services. Learn more about each service <a href='/skin-care-services/'>here</a>.</p>"
                     />
                     <Accordion title="How much should I tip for a massage?" content="<p>We recommend 15%-20% of the service price.</p>" />
                     <Accordion
                        title="Will I be charged a credit card processing fee?"
                        content="<p>Yes. The processing fee is 3.95% but if you pay cash, this is discounted or waived.</p>"
                     />
                     <Accordion
                        title="What is the best way to book an appointment?"
                        content="<p>You can book through our <a data-modal-open='modal-choose-location'>online booking system</a> or by contacting our locations:</p>
						<p><span class='underline'>San Diego</span><br/>
						Call: <a href='tel:+1-619-299-9888'>619-299-9888</a><br/>
						Text: <a href='sms:+1-619-916-1608'>619-916-1608</a><br/>
						Email: <a href='mailto:relax@karmamassagespa.com'>relax@karmamassagespa.com</a></p>

						<p><span class='underline'>Carlsbad</span><br/>
						Call: <a href='tel:+1-760-729-9888'>760-729-9888</a><br/>
						Text: <a href='sms:+1-760-729-9889'>760-729-9889</a><br/>
						Email: <a href='mailto:carlsbad@karmamassagespa.com'>carlsbad@karmamassagespa.com</a></p>"
                     />
                     <Accordion title="Can I request a specific therapist? " content="<p>Yes.</p>" />
                     <Accordion
                        title="What if I have to cancel my appointment?"
                        content="<p>Oh no! We understand that life happens. To cancel your appointment or to reschedule, please reach out to the location you booked with. </p>
                        <p>All no shows will be charged 50% of spa service regardless of no show reason. YOUR CREDIT CARD WILL NOT BE CHARGED UNTIL TIME OF VISIT. Please do not consider your service paid until you have signed a receipt with one of our front desk staff. We ask that if you need to cancel or make any modifications to your appointment that you give us a courtesy call/text directly at 760-729-9889 -OR- 760-729-9888 NO LATER THAN 3 HOURS PRIOR TO START TIME OF APPOINTMENT so that we can open up the appointment time to another interested patron. If failed to do so, you will be charged 50% of spa service regardless of cancellation reason. Select services, receive $5 off when you pay cash. Gratuity not included but encouraged.</p>"
                     />
                     <Accordion title="Do you have parking at both locations?" content="<p>Yes, parking is available.</p>" />
                     <Accordion
                        title="Do you offer memberships?"
                        content="<p>We offer two membership plans to bring you free massages and monthly specials for members only. As a member you can also earn points for each $1 spent. Basic membership is $25/year and comes with member-only monthly specials. VIP membership is $45/month and comes with a free basic body massage.</p>"
                     />
                     <Accordion title="Do you sell gift cards?" content="<p>Yes! Gift cards are available online and in-store.</p>" />
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Page;

// export const query = graphql`
// {
//   openGraphImage: file(relativePath: {eq: "open-graph/facebook/about-facebook.jpg"}) {
//     publicURL
//   }
//   twitterOpenGraphImage: file(relativePath: {eq: "open-graph/twitter/about-twitter.jpg"}) {
//     publicURL
//   }
// }
// `
