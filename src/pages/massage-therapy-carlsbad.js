import React from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";
import CTABackgroundImage from "../components/CTA/CTABackgroundImage";

const Page = ({ data }) => {
  const heroImages = [
    data.heroDesktop.childImageSharp.fixed,
    {
      ...data.heroMobile.childImageSharp.fixed,
      media: `(max-width: 1023px)`,
    },
  ];

  const url = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Layout>
      <SearchEngineOptimization
        title="Carlsbad Massage Therapy Services | Karma Spa"
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
        <h1>Carlsbad Massage Therapy</h1>
        <p className="mb-2 md:mb-0">
          Relax. Reduce pain and stress. Improve circulation and flexibility. Prevent injury and
          facilitate healing. Massage has many benefits, and we have many options. Your next
          indulgence awaits with our Carlsbad massage therapy services.
        </p>
        <p className="mb-2 md:mb-0 mt-6">
          Disclaimer: Please call us if you think you’ll arrive late for your appointment. We
          provide a 5-minute grace period, but anything beyond that will shorten your massage time.
          If you cancel within two hours of your scheduled time slot or do not show up, you will be
          charged a 50% cancellation fee.
        </p>
      </HeroSplit>

      <ScrollWrapper>
        <ScrollNavigation>
          <li>
            <AnchorLink to={url + "#section-1"} title="Deep Tissue Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-2"} title="Hot Oil Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-3"} title="Back & Shoulder Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-4"} title="Swedish Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-5"} title="Thai Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-6"} title="Hot Stone Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-7"} title="Sports Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-8"} title="Tuina Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-9"} title="Aromatherapy Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-10"} title="Acupressure" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-11"} title="Double Indulgence" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-12"} title="Foot & Body Fusion" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-13"} title="Prenatal Body Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-14"} title="CBD Oil Body Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-15"} title="Ashiatsu Massage" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-16"} title="Neck & Shoulder Relief" stripHash />
          </li>

          <li>
            <AnchorLink to={url + "#section-17"} title="Chair/Body Massage" stripHash />
          </li>

          <li>
            <AnchorLink to={url + "#section-18"} title="Foot Massage a-la-carte" stripHash />
          </li>
          <li>
            <AnchorLink to={url + "#section-19"} title="Add-Ons" stripHash />
          </li>
        </ScrollNavigation>
        <ScrollContent>
          <div id="section-1" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              01
            </span>
            <h3>Deep Tissue Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Firm pressure with amazing benefits!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Slow, deep strokes reduce inflammation and tension in muscle or tissue. This massage
              is particularly helpful for chronic aches and pains. If you have a stiff neck and
              upper back, low back pain, leg muscle tightness, or sore shoulders—and you’re not a
              massage first-timer—this is for you.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $80 (60 Minutes) • $110 (90 Minutes) • $140 (2 Hours)<br></br>
              Couples: $160 (60 Minutes) •$220 (90 Minutes) •$280 (2 Hours)
            </p>
          </div>

          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              02
            </span>
            <h3>Hot Oil Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Reduce tension and swelling in the muscles!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Relieve stress and strain after a busy workday with a soothing and relaxing hot oil
              massage. Hot oil massage improves circulation and brings oxygenated blood to the
              roots. Choose from a Swedish or Deep Tissue massage, and we’ll take care of the rest.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              $75 (60 Minutes) • $105(90 Minutes) • $135 (2 Hours)<br></br>
              Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              03
            </span>
            <h3>Back & Shoulder Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Too much computer?
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Need to relieve stress or tension in your back, neck, and shoulders? This type of
              massage therapy is for you. Relax and ease tension in the areas where muscle problems
              most occur. Anyone with buildup due to stress, computer work, or everyday life will
              benefit from this massage. 
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $25 (15 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $45 (30 Minutes) */}
              <span className="italic block">Deep Tissue + $5 </span>
              $75 (60 Minutes) • $110 (90 Minutes) • $135 (2 Hours)<br></br>
              Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              04
            </span>
            <h3>Swedish Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Lighter pressure for easy relaxation!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              New to massage? With its lighter pressure and longer strokes, Swedish massage is the
              most common and best-known type of Western massage. It relaxes the entire body and
              reduces tension. If it’s your first time or you don’t get massages often, Swedish
              massage is perfect for you.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $75 (60 Minutes) • $105(90 Minutes) • $140 (2 Hours)<br></br>
              Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              05
            </span>
            <h3>Thai Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Yoga without the work!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Thai massage is like doing yoga but in massage form. Your massage therapist will use
              their hands, knees, legs, and feet to move you into a series of yoga-like stretches.
              Thai massage is more energizing and rigorous than more classic forms of massage, and
              your body will love you for it.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $80 (60 Minutes) • $110(90 Minutes) • $140 (2 Hours)<br></br>
              Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              06
            </span>
            <h3>Hot Stone Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Our most popular modality!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Our therapists use smooth, water-heated stones to warm up tight muscles to allow
              relaxation and to work deeper more quickly without the pain of firm pressure. We start
              with Swedish massage on your back and we gradually incorporate the hot stones for a
              customized massage throughout the entire body. It’s a unique, rejuvenating experience
              and something different than the standard full body massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              $90 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)<br></br>
              Couples: $180 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              07
            </span>
            <h3>Sports Massage</h3>

            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Perfect for athletes!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Sports massage was developed to help athletes prepare their bodies for optimal
              performance, recover after a big event, or function well during training. It
              emphasizes prevention and healing of injuries to the muscles and tendons. Our
              therapists generally incorporate stretching and concentrate on a specific problem area
              per your request.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              $80 (60 Minutes) • $110 (90 Minutes) • $140 (2 Hours)<br></br>
              Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-8" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              08
            </span>
            <h3>Tuina Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Chinese massage without oil or lotion!{" "}
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Our massage therapist, while avoiding oil or lotion, will brush, knead, roll/press,
              and rub the areas between each of the joints, to attempt to open the body’s defensive
              chi and get the energy moving in the muscles. This is recommended for our most
              experienced massage clients.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              $75 (60 Minutes) • $105 (90 Minutes) • $135 (2 Hours)<br></br>
              Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-9" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              09
            </span>
            <h3>Aromatherapy Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Enhance your massage with essential oils!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Choose from our relaxing Swedish or Deep Tissue Massage that incorporates scented
              essential oils from a diffuser for the purpose of altering one’s mood, cognitive,
              psychological, or physical well-being. Choose your essential oil aromatherapy upon
              check in.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $75 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $135 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $150 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $210 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $270 (2 Hours) */}
              <span className="italic block">Deep Tissue + $5 </span>
              $80 (60 Minutes) • $110 (90 Minutes) • $140 (2 Hours)<br></br>
              Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-10" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              10
            </span>
            <h3>Acupressure</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Acupuncture without the needles!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Acupressure (also called pressure acupuncture) has been used for thousands of years in
              China, but you can get all its benefits right here. Your massage therapist will gently
              apply pressure to special acupressure points throughout the body to promote total
              relaxation and wellness.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              $75 (60 Minutes) • $110 (90 Minutes) • $135 (2 Hours)<br></br>
              Couples: $150 (60 Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-11" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              11
            </span>
            <h3>Double Indulgence</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Two therapists, four hands!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Four-handed massage involves two therapists working on you at the same time, mirroring
              each other’s movements. This type of massage is a must for the most experienced client
              as well as those wanting to indulge in an unforgettable journey in massage. Give it a
              try and experience ultimate relaxation.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              $150 (1 Hour) • $210 (90 Minutes) NO TWO HOURS<br></br>
              Couples: $300 (60 Minutes) • $420 (90 Minutes) NO TWO HOURS
            </p>
          </div>

          <div id="section-12" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              12
            </span>
            <h3>Foot & Body Fusion</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Relax from head to toe!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Soothe your aching feet in a relaxing foot soak while your head, shoulders, back,
              hands, and feet are massaged to help you relax and relieve tension and stress. This
              massage is designed to pamper and purify, with special focus on the body areas that
              receive the hardest stress in daily life. Performed with clothes-on in a foot
              reflexology lounge chair.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $65 (1 Hour) • $95 (90 Minutes) NO TWO HOURS<br></br>
              Prenatal: $70 (1 Hour) • $100 (90 Minutes) NO TWO HOURS<br></br>
              Couples: $130 (60 Minutes) • $190 (90 Minutes) NO TWO HOURS
            </p>
          </div>

          <div id="section-13" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              13
            </span>
            <h3>Prenatal Body Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] ">
              Let us relieve some of your physical discomfort!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              The recommended side-lying position for expectant mothers helps minimize risk to the
              mother and offers maximum safety for both mother and baby. While lying on either the
              right or left side optimizes maternal cardiac function and oxygen delivery to the
              fetus. We provide a pregnancy pillow for extra support to mother and baby. Consider
              adding on a foot massage to the last 30 minutes of your massage. You won’t regret it.{" "}
            </p>
            <br></br>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <span className="italic block">Deep Tissue + $5 </span>
              <span className="block">
                *Expected mothers must be at least 8 weeks to begin massage therapy*
              </span>
              $80 (1 Hour) • $110 (90 Minutes)
              <br /> No two hour, unless adding on a 30-minute foot massage to 90-minute body
            </p>
          </div>

          <div id="section-14" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              14
            </span>
            <h3>CBD Oil Body Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              CBD massage oil contains hemp which conditions the skin making it supple and soft. Not
              only does this help you feel better and more relaxed during and after the massage, but
              it can also help with skin conditions such as eczema, acne, psoriasis or even just dry
              skin.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $75 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $105 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $135 (2 Hours)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $150 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $210 (90 Minutes)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $270 (2 Hours) */}
              <span className="italic block">Deep Tissue + $5 </span>
              $90 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours) <br></br>Couples: $180 (60
              Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-15" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              15
            </span>
            <h3>Ashiatsu Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Traditional Chinese Massage, using the bars attached to ceiling, they walk on your
              back.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              {/* $60 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $80 (90 Minutes)
                     <br />
                     <br className="block lg:hidden" />
                     Couples: <br className="block lg:hidden" />
                     $120 (1 Hour)
                     <br className="block lg:hidden" />
                     <span className="hidden lg:inline lg:mx-1">•</span>
                     $160 (90 Minutes) */}
              <span className="italic block">Deep Tissue + $5 </span>
              $75 (60 Minutes) • $110 (90 Minutes) • $135 (2 Hours)<br></br>Couples: $150 (60
              Minutes) • $210 (90 Minutes) • $270 (2 Hours)
            </p>
          </div>

          <div id="section-16" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              16
            </span>
            <h3>Neck & Shoulder Relief</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed clothes-on in the massage chair where therapist stands behind client while
              they are sitting upright in chair.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $30 (15 Minutes)<br></br>Couples: $60 (15 Minutes)
            </p>
          </div>

          <div id="section-17" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              17
            </span>
            <h3>Chair/Body Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              “Chair” is always clothes-on, and you have the option (ask at booking) to receive the
              massage in our foot massage room while lying face down or in the chair.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $50 (30 Minutes)<br></br>Couples: $100 (30 Minutes)
            </p>
          </div>

          <div id="section-18" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              18
            </span>
            <h3>30 Minute Foot Massage a-la-carte</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Foot massage improves circulation, stimulates muscles, reduces tension, and eases foot
              pain. Plus, it’s just plain ol’ relaxing. 
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $50 (30 Minutes)<br></br>Couples: $100 (30 Minutes)
            </p>
          </div>

          <div id="section-19" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              19
            </span>
            {/* <h3>Add-on to any 60 Minute or 90 Minute Body Massage</h3>
            <p className="text-small font-medium tracking-wide text-gray-900 md:mb-[120px]">
              $50 (30 Minutes)<br></br>Couples: $100 (30 Minutes)
            </p> */}
            <h3>Add-ons</h3>
            <p className="text-small font-medium tracking-wide text-gray-900">
              <ul>
                <li>-Prenatal +$5</li>
                <li>-Aromatherapy +$5</li>
                <li>-CBD Body Oil +$15</li>
                <li>-Hot Stone +$15</li>
                <li>-Foot Scrub +$15</li>
                <li>-30 Minute Foot Massage +$30</li>
                <li>-30 Minute Couple’s Foot Massage +$60</li>
              </ul>
            </p>
            <div className="mt-20">
              <div className="mb-20">
                <h3>Sauna</h3>
                <span className="font-semibold text-sm text-gray-800 italic">
                  **No $5 off with cash**
                </span>
                <ul className="font-semibold text-sm text-gray-800 list-disc list-inside pl-2">
                  <li>15 Minute Sauna Session ($20)</li>
                  <li>15 Minute Couple's Sauna Session ($40)</li>
                  <li>30 Minute Sauna Session ($35)</li>
                  <li>30 Minute Couple's Sauna Session ($70)</li>
                </ul>
              </div>
              {/* service sub section */}
              <div className="mb-20">
                <h3>Ionic Body Detox</h3>
                <span className="font-semibold text-sm text-gray-800 italic">
                  **No $5 off with cash**
                </span>
                <ul className="font-semibold text-sm text-gray-800 list-disc list-inside pl-2">
                  <li>15 Minute Ionic Body Detox ($20)</li>
                  <li>15 Minute Couple's Ionic Body Detox ($40)</li>
                  <li>30 Minute Ionic Body Detox ($35)</li>
                  <li>30 Minute Couple's Ionic Body Detox ($70)</li>
                </ul>
              </div>
            </div>
            {/*<div className="mb-12 lg:mb-24">
               <h3>Sauna</h3>
               <p>**No $5 off with cash**</p>
               <ul className=" text-small font-medium tracking-wide text-gray-900 mb-8">
                 <li>15 Minute Sauna Session $20</li>
                 <li>30 Minute Sauna Session $35</li>
                 <li>30 Minute Couple’s Sauna Session $40</li>
                 <li>30 Minute Couple’s Sauna Session $70</li>
               </ul>
             </div>

             <div className="mb-12 lg:mb-24">
               <h3>Ionic Body Detox</h3>
               <p>**No $5 off with cash**</p>
               <ul className="text-small font-medium tracking-wide text-gray-900 mb-8">
                 <li>15 Minute Detox $20</li>
                 <li>30 Minute Detox $35</li>
                 <li>30 Minute Couple’s Detox $40</li>
                 <li>30 Minute Couple’s Detox $70</li>
               </ul>
                    </div> */}
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
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/massage-services-facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/massage-services-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "services/massage/Massage Services.jpg" }) {
      childImageSharp {
        fixed(width: 1440, height: 1358, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(relativePath: { eq: "services/massage/Massage Services.jpg" }) {
      childImageSharp {
        fixed(width: 828, height: 956, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
