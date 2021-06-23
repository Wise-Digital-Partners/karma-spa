import React from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";
import ButtonGhost from "../components/Button/ButtonGhost";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

export const Page = ({ data }) => {
   const heroImages = [
      data.heroDesktop.childImageSharp.fixed,
      {
         ...data.heroMobile.childImageSharp.fixed,
         media: `(max-width: 1023px)`,
      },
   ];

   return (
      <Layout headerStyle="overlap" headerLinkColor="black" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Massage Services in San Diego & Carlsbad | Karma Spa"
            description="Ready for top massage services in San Diego? Karma Spa offers a wide variety of massages at its Hillcrest & Carlsbad locations. Book today!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroSplit
            hasContainer={false}
            backgroundImageWrapperWidth="1/2"
            textWrapperWidth="1/2"
            backgroundImages={heroImages}
            backgroundImageSide="left"
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            minHeightDesktop="680px"
            minHeightMobile="480px"
         >
            <h1>Massage Services</h1>
            <p className="mb-2 md:mb-0">
               Relax. Reduce pain and stress. Improve circulation and flexibility. Prevent injury and facilitate healing. Massage has many benefits,
               and we have many options. Your next indulgence awaits with our Hillcrest and Carlsbad massage services.
            </p>
         </HeroSplit>

         <ScrollWrapper>
            <ScrollNavigation>
               <li>
                  <AnchorLink to="/massage-services/#section-1" title="Deep Tissue Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-2" title="Couples Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-3" title="Hot Oil Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-4" title="Back/Shoulder Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-5" title="Swedish Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-6" title="Thai Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-7" title="Hot Stone Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-8" title="Sports Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-9" title="Tuina Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-10" title="Aromatherapy" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-11" title="Acupressure" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-12" title="Double Indulgence" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-13" title="Foot Massage (Hillcrest only)" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-14" title="Foot & Body Fusion (Carlsbad only)" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-15" title="Prenatal Body Massage" stripHash />
               </li>
               <li>
                  <AnchorLink to="/massage-services/#section-16" title="Add-Ons" stripHash />
               </li>
            </ScrollNavigation>
            <ScrollContent>
               <div id="section-1" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">01</span>
                  <h3 className="mb-1">Deep Tissue Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Firm pressure with amazing benefits!</p>
                  <p>
                     Slow, deep strokes reduce inflammation and tension in muscle or tissue. This massage is particularly helpful for chronic aches
                     and pains. If you have a stiff neck and upper back, low back pain, leg muscle tightness, or sore shoulders—and you’re not a
                     massage first-timer—this is for you.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $90 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $120 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                  </p>
                  <ButtonGhost href="/deep-tissue-massage/" text="Learn More" />
               </div>

               <div id="section-2" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">02</span>
                  <h3 className="mb-1">Couples Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Share your day of pampering</p>
                  <p>
                     Two people are massaged in the same room at the same time by two different massage therapists. Great for dates or for catching up
                     with a friend. Share a relaxing Swedish massage or deep tissue experience side-by-side. Many of our services can be done in our
                     couples room—prices may vary.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Four Hands: <br className="block lg:hidden" />
                     $240 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $360 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $480 (2 Hours)
                  </p>
               </div>

               <div id="section-3" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">03</span>
                  <h3 className="mb-1">Hot Oil Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Reduce tension and swelling in the muscles!</p>
                  <p>
                     Relieve stress and strain after a busy workday with a soothing and relaxing hot oil massage. Hot oil massage improves circulation
                     in both the head and neck, relaxes the body, and brings oxygenated blood to the roots. Choose from a Swedish or deep tissue
                     massage, and we’ll take care of the rest.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $90 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $120 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                  </p>
               </div>

               <div id="section-4" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">04</span>
                  <h3 className="mb-1">Back/Shoulder Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Too much computer?</p>
                  <p>
                     Need to relieve stress or complaints in your back, neck, and shoulder areas? This type of massage therapy is for you. Relax and
                     ease tension in the areas where muscle problems most occur. Anyone with buildup due to stress, computer work, or everyday life
                     will benefit from this massage.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $90 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $120 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                  </p>
               </div>

               <div id="section-5" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">05</span>
                  <h3 className="mb-1">Swedish Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Lighter pressure for easy relaxation!</p>
                  <p>
                     New to massage? Start here! With its lighter pressure and longer strokes, Swedish massage is the most common and best-known type
                     of Western massage. It relaxes the entire body and reduces tension. If it’s your first time or you don’t get massages often,
                     Swedish massage is perfect for you.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $90 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $120 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                  </p>
               </div>

               <div id="section-6" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">06</span>
                  <h3 className="mb-1">Thai Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Yoga without the work!</p>
                  <p>
                     Thai massage is like doing yoga but in massage form. Your massage therapist will use their hands, knees, legs, and feet to move
                     you into a series of yoga-like stretches. Thai massage is more energizing and rigorous than more classic forms of massage, and
                     your body will love you for it.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $65 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $95 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $125 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $130 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $190 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $250 (2 Hours)
                  </p>
               </div>

               <div id="section-7" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">07</span>
                  <h3 className="mb-1">Hot Stone Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Our most popular modality!</p>
                  <p>
                     Our therapists use smooth, water-heated stones to warm up tight muscles to allow relaxation and to work deeper more quickly
                     without the pain of firm pressure. We start with Swedish massage on your back and we gradually incorporate the hot stones for a
                     customized massage throughout the entire body. It’s a unique, rejuvenating experience and something different than the standard
                     full body massage.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $75 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $135 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $150 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $210 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $270 (2 Hours)
                  </p>
               </div>

               <div id="section-8" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">08</span>
                  <h3 className="mb-1">Sports Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Perfect for athletes</p>
                  <p>
                     Sports massage was developed to help athletes prepare their bodies for optimal performance, recover after a big event, or
                     function well during training. It emphasizes prevention and healing of injuries to the muscles and tendons. Our therapist will
                     generally incorporate stretching and concentrate on a specific problem area per your request.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $65 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $95 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $125 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $130 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $190 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $250 (2 Hours)
                  </p>
               </div>

               <div id="section-9" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">09</span>
                  <h3 className="mb-1">Tuina Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Chinese massage without oil or lotion!</p>
                  <p>
                     Our Massage Therapist, while avoiding oil or lotion, will brush, knead, roll/press, and rub the areas between each of the joints,
                     to attempt to open the body’s defensive chi and get the energy moving in the muscles. This is recommended for our most
                     experienced massage clients.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $90 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $120 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                  </p>
               </div>

               <div id="section-10" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">10</span>
                  <h3 className="mb-1">Aromatherapy Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Enhance your massage with essential oils!</p>
                  <p>
                     Choose from our relaxing Swedish or Deep Tissue Massage that incorporates scented essential oils from a diffuser for the purpose
                     of altering one’s mood, cognitive, psychological or physical well-being. Choose your essential oil aromatherapy upon check in.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $65 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $95 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $125 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $130 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $190 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $250 (2 Hours)
                  </p>
               </div>

               <div id="section-11" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">11</span>
                  <h3 className="mb-1">Acupressure</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Acupuncture without the needles!</p>
                  <p>
                     Acupressure (also called pressure acupuncture) has been used for thousands of years in China, but you can get all its benefits
                     right here. Your massage therapist will gently apply pressure to special acupressure points throughout the body to promote total
                     relaxation and wellness.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $60 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $90 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $120 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $240 (2 Hours)
                  </p>
               </div>

               <div id="section-12" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">12</span>
                  <h3 className="mb-1">Double Indulgence</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Two therapists, four hands</p>
                  <p>
                     Four-handed massage involves two therapists working on you at the same time, mirroring each other’s movements. This type of
                     massage is a must for the most experienced client as well as those wanting to indulge in an unforgettable journey in massage.
                     Give it a try and experience ultimate relaxation.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $120 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $180 (90 Minutes)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $240 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $360 (90 Minutes)
                  </p>
               </div>

               <div id="section-13" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">13</span>
                  <h3 className="mb-1">Foot Massage (Hillcrest only)</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Boost your circulation!</p>
                  <p>
                     Foot massage improves circulation, stimulates muscles, reduces tension, and eases foot pain. Plus, it’s just plain ol’ relaxing.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $45 (30 Minutes) a la carte
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $30 (30 Minutes) when added to any 60 Minute or 90 Minute Body Massage
                  </p>
               </div>

               <div id="section-14" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">14</span>
                  <h3 className="mb-1">Foot & Body Fusion (Carlsbad only)</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Relax from head to toe!</p>
                  <p>
                     Soothe your aching feet in a relaxing foot soak while your head, shoulders, back, hands, and feet are massaged to help you relax
                     and relieve tension and stress. This massage is designed to pamper and purify with special focus on the body areas that receive
                     the hardest stress in daily life. Performed with clothes-on in a foot reflexology lounge chair.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $50 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $80 (90 Minutes) <br className="block lg:hidden" />
                     <br />
                     <br className="block lg:hidden" />
                     Prenatal: <br className="block lg:hidden" />
                     $55 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $85 (90 Minutes)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $100 (60 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $160 (90 Minutes)
                  </p>
               </div>

               <div id="section-15" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">15</span>
                  <h3 className="mb-1">Prenatal Body Massage</h3>
                  <p className="font-heading text-2xlarge font-light text-gray-900 mb-8">Let us relieve some of your physical discomfort!</p>
                  <p>
                     The recommended side-lying position for expectant mothers helps minimize risk to the mother and offers maximum safety for both
                     mother and baby. While lying on either the right or left side optimizes maternal cardiac function and oxygen delivery to the
                     fetus. We provide a pregnancy pillow for extra support to mother and baby. Consider adding on a foot massage to the last 30
                     minutes of your massage. You won’t regret it.
                  </p>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     $65 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $95 (90 Minutes)
                  </p>
               </div>

               <div id="section-16" className="mb-20 lg:mb-40">
                  <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">16</span>
                  <h3 className="mb-1">Add-Ons</h3>
                  <p className="text-small font-medium tracking-wide text-gray-900">
                     Prenatal Add-on +$5
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> Aromatherapy Add-on +$5
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> CBD Body Oil Add-on +$15
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> Hot Stone Add-on +$15
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> Foot Scrub +$10
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> 30 Minute Foot Massage +$30
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> 30 Minute Couple’s Foot Massage +$60
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> 15 Minute Sauna Session +$10
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> 15 Minute Couple’s Sauna Session +$20
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> 30 Minute Sauna Session +$20
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span> 30 Minute Couple’s Sauna Session +$40 $95 (90 Minutes)
                  </p>
               </div>
            </ScrollContent>
         </ScrollWrapper>

         <CTABackgroundImage />
      </Layout>
   );
};

export default Page;

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/massage-services-facebook.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/massage-services-twitter.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "services/massage/massage-services-hero-desktop.jpg" }) {
         childImageSharp {
            fixed(width: 1440, height: 1358, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
      heroMobile: file(relativePath: { eq: "services/massage/massage-services-hero-mobile.jpg" }) {
         childImageSharp {
            fixed(width: 828, height: 956, quality: 100) {
               ...GatsbyImageSharpFixed_withWebp
            }
         }
      }
   }
`;
