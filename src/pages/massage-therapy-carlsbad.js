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
        title="Carlsbad Massage Therapy Services"
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
        <h1>Massage Therapy</h1>
        <p className="mb-2 md:mb-0">
          Relax. Reduce pain and stress. Improve circulation and flexibility.
          Prevent injury and facilitate healing. Massage has many benefits, and
          we have many options. Your next indulgence awaits with our Carlsbad
          massage therapy services.
        </p>
        <p className="mb-2 md:mb-0 mt-6">
          Disclaimer: Please call us if you think you’ll arrive late for your
          appointment. We provide a 5-minute grace period, but anything beyond
          that will shorten your massage time. If you cancel within two hours of
          your scheduled time slot or do not show up, you will be charged a 50%
          cancellation fee.
        </p>
      </HeroSplit>

      <ScrollWrapper>
        <ScrollNavigation>
          <li>
            <AnchorLink
              to={url + "#section-1"}
              title="Deep Tissue Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-2"}
              title="Hot Oil Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-3"}
              title="Back & Shoulder Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-4"}
              title="Swedish Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-5"}
              title="Thai Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-6"}
              title="Hot Stone Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-7"}
              title="Sports Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-8"}
              title="Tuina Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-9"}
              title="Aromatherapy Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-10"}
              title="Acupressure"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-11"}
              title="Double Indulgence"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-12"}
              title="Foot & Body Fusion"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-13"}
              title="Prenatal Body Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-14"}
              title="CBD Oil Body Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-15"}
              title="Ashiatsu Massage"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              to={url + "#section-16"}
              title="Neck & Shoulder Relief"
              stripHash
            />
          </li>

          <li>
            <AnchorLink
              to={url + "#section-17"}
              title="Chair/Body Massage"
              stripHash
            />
          </li>

          <li>
            <AnchorLink
              to={url + "#section-18"}
              title="Foot Massage a-la-carte"
              stripHash
            />
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
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Firm pressure with amazing benefits!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Your massage therapist will use a combination of forearms, elbows
              and hands to provide our most firm full body massage. Not
              recommended for guests who are not familiar with strong pressure,
              as you may be slightly sore after the massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $90 (60 Minutes) • $125 (90 Minutes) • $155 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed side-by-side, your massage therapists will use a
              combination of forearms, elbows and hands to provide our most firm
              full body massage. Not recommended for guests who are not familiar
              with strong pressure, as you may be slightly sore after the
              massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $180 (60 Minutes) • $250 (90 Minutes) • $310 (2 Hours)
            </p>
          </div>

          <div id="section-2" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              02
            </span>
            <h3>Hot Oil Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Reduce tension and swelling in the muscles!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              All of our standard massages include hot oil, so this option is
              available to indicate a MEDIUM pressure, full body massage. If you
              are interested in light pressure, see Swedish; if you are
              interested in our most firm pressure, see Deep Tissue (+$5).
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $85 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              All of our standard massages include hot oil, so this option is
              available to indicate MEDIUM pressure, full body massages
              performed side-by-side. If either of you are interested in light
              pressure, see Swedish; if interested in our most firm pressure,
              see Deep Tissue (+$5). Each guest may choose a different pressure.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $170 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-3" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              03
            </span>
            <h3>Back & Shoulder Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Too much computer?
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This massage focuses on the back, shoulders and neck to help
              relieve tension in these often-overworked areas. You have the
              option to focus strictly on those areas, or get a full body
              massage with emphasis in those areas.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $85 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This massage focuses on the back, shoulders and neck to help
              relieve tension in these often-overworked areas. You each have the
              option to focus strictly on those areas, or get a full body
              massage with emphasis in those areas.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $170 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-4" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              04
            </span>
            <h3>Swedish Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Lighter pressure for easy relaxation!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Using light, slow movements, your therapist will provide our most
              relaxing full body massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $85 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Using light, slow movements, your therapists will provide our most
              relaxing full body massages side-by-side.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $170 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-5" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              05
            </span>
            <h3>Thai Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Yoga without the work!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Our Thai massage combines full-body stretching with full-body
              massage, for head-to-toe relief! Using a series of movements
              similar to yoga techniques, your therapist will use intentional,
              modest maneuvers to bend and pull your limbs to alleviate tension.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $90 (60 Minutes) • $125 (90 Minutes) • $155 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed side-by-side, our Thai massage combines full-body
              stretching with full-body massage, for head-to-toe relief! Using a
              series of movements similar to yoga techniques, your therapists
              will use intentional, modest maneuvers to bend and pull your limbs
              to alleviate tension.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $180 (60 Minutes) • $250 (90 Minutes) • $310 (2 Hours)
            </p>
          </div>

          <div id="section-6" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              06
            </span>
            <h3>Hot Stone Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Our most popular modality!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Your therapist will glide and place water-heated stones over the
              full body for total relaxation. The heat from the stones help to
              melt away tension and elevate your massage. Choice of Swedish,
              Medium, or Deep Tissue (+$5) massage pressure.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $95 (60 Minutes) • $130 (90 Minutes) • $160 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed side-by-side, your therapists will glide and place
              water-heated stones over the full body for total relaxation. The
              heat from the stones help to melt away tension and elevate your
              massage. Choice of Swedish, Medium, or Deep Tissue (+$5) massage
              pressures.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $190 (60 Minutes) • $260 (90 Minutes) • $320 (2 Hours)
            </p>
          </div>

          <div id="section-7" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              07
            </span>
            <h3>Sports Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Perfect for athletes!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This massage is great for athletes and guests with tight muscle
              groups. Your massage therapist will incorporate focused-area
              stretching within your full body massage to help alleviate
              tension. If you are interested in full-body stretching, see our
              Thai massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $90 (60 Minutes) • $125 (90 Minutes) • $155 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This massage is great for athletes and guests with tight muscle
              groups. Your massage therapists will incorporate focused-area
              stretching within your full body massages to help alleviate
              tension. If either of you are interested in full-body stretching,
              see our Thai massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $180 (60 Minutes) • $250 (90 Minutes) • $310 (2 Hours)
            </p>
          </div>

          <div id="section-8" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              08
            </span>
            <h3>Tuina Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Chinese massage without oil or lotion!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Without using oil or lotion, your massage therapist will provide a
              full body massage using rolling, kneading, and brushing
              techniques. Tuina massage focuses on muscular energy, attempting
              to open the body’s defensive chi. Not recommended for guests new
              to massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $85 (60 Minutes) • $120 (90 Minutes)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Without using oil or lotion, your massage therapists will provide
              full body massages using rolling, kneading, and brushing
              techniques. Tuina massage focuses on muscular energy, attempting
              to open the body’s defensive chi. Not recommended for guests new
              to massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $170 (60 Minutes) • $240 (90 Minutes)
            </p>
          </div>

          <div id="section-9" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              09
            </span>
            <h3>Aromatherapy Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Enhance your massage with essential oils!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              With a choice of any style massage, you will pick out an essential
              oil to be diffused in your room for the duration of your massage.
              We have many scent options to choose from at check-in. Deep
              Tissue, Prenatal, Thai and Sports massages are +$5.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $90 (60 Minutes) • $125 (90 Minutes) • $155 (2 Hours)
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $160 (60 Minutes) • $220 (90 Minutes) • $280 (2 Hours)
            </p>
          </div>

          <div id="section-10" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              10
            </span>
            <h3>Acupressure</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Acupuncture without the needles!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Acupressure is a full body massage that involves applying pressure
              to certain points on the body with fingertips and elbows. The goal
              of Acupressure is to keep energy flowing using a firmer touch, so
              it is not recommended for guests new to massage therapy.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue, +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $85 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Acupressure is a full body massage that involves applying pressure
              to certain points on the body with fingertips and elbows. The goal
              of Acupressure is to keep energy flowing using a firmer touch, so
              it is not recommended for guests new to massage therapy. Performed
              side-by side in the same room.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue, +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $170 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-11" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              11
            </span>
            <h3>Double Indulgence</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Two therapists, four hands!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              The top choice for ultimate pampering! Receive a full body massage
              from two therapists. Both therapists will work simultaneously to
              deliver ultimate relaxation and pain relief by mirroring each
              other’s movements.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $170 (1 Hour) • $240 (90 Minutes) • NO TWO HOURS
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              The top choice for ultimate pampering! Performed side-by-side,
              each guest receives a full body massage from two therapists, for a
              total of four therapists in your couple’s room. Each therapist
              will work simultaneously to deliver ultimate relaxation and pain
              relief by mirroring each other’s movements.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue +$5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $340 (60 Minutes) • $480 (90 Minutes) • NO TWO HOURS
            </p>
          </div>

          <div id="section-12" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              12
            </span>
            <h3>Foot & Body Fusion</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Relax from head to toe!
            </p>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed clothed, your feet will be placed in a warm water foot
              soak while your therapist massages away tension in your upper
              body. Then, they will switch to the feet and lower legs for the
              remainder of the massage. With our prenatal option, your therapist
              will provide a pillow for support and ensure you are not lying
              flat on your back.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $75 (60 Minutes) • $110 (90 Minutes) • NO TWO HOURS
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Prenatal: $80 (60 Minutes) • $115 (90 Minutes) • NO TWO HOURS
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed clothed and side-by-side, your feet will be placed in a
              warm water foot soak while your therapists massage away tension in
              your upper body. Then, they will switch to the feet and lower legs
              for the remainder of the massage. For pregnant guests, your
              therapist will provide a pillow for support and ensure you are not
              lying flat on your back (Prenatal +$5).
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $150 (60 Minutes) • $220 (90 Minutes) • NO TWO HOURS
            </p>
          </div>

          <div id="section-13" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              13
            </span>
            <h3>Prenatal Body Massage</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px]">
              Let us relieve some of your physical discomfort!
            </p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed side-lying with a pillow for support, this full body
              massage is just what mothers-to-be need to relieve stress and feel
              comforted. Choice of Swedish, medium, or Deep Tissue pressure.
              Consider adding on a 30-minute foot massage for only $35!
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Expected mothers must be at least 8 weeks to begin massage therapy
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $90 (1 Hour) • $125 (90 Minutes)
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              No two hour, unless adding on a 30-minute foot massage to
              90-minute body
            </p>
          </div>

          <div id="section-14" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              14
            </span>
            <h3>CBD Oil Body Massage</h3>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              CBD’s anti-inflammatory and pain-relieving properties make it a
              great addition to your full body massage. We use VitalBody 100%
              CBD massage oil to target sore muscles and inflamed, dry skin.
              Deep Tissue, Thai and Sports massages are +$5.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $100 (60 Minutes) • $135 (90 Minutes) • $165 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              CBD’s anti-inflammatory and pain-relieving properties make it a
              great addition to your full body massage. We use VitalBody 100%
              CBD massage oil to target sore muscles and inflamed, dry skin.
              Performed side-by-side in the same room. Deep Tissue, Thai and
              Sports massages are +$5.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $200 (60 Minutes) • $270 (90 Minutes) • $330 (2 Hours)
            </p>
          </div>

          <div id="section-15" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              15
            </span>
            <h3>Ashiatsu Massage</h3>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This stress-relieving massage combines walking along the back with
              a full body massage. Your therapist will use bars overhead to
              support themselves while they carefully apply pressure over the
              entire back. Not recommended for guests who do not like medium to
              firm pressure. Deep Tissue, Thai and Sports massages are +$5.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $85 (60 Minutes) • $120 (90 Minutes) • $150 (2 Hours)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Performed side-by-side, this stress-relieving massage combines
              walking along the back with a full body massage. Your therapist
              will use bars overhead to support themselves while they carefully
              apply pressure over the entire back. Not recommended for guests
              who do not like medium to firm pressure. Deep Tissue, Thai and
              Sports massages are +$5.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900 italic mb-1">
              Deep Tissue + $5
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $170 (60 Minutes) • $240 (90 Minutes) • $300 (2 Hours)
            </p>
          </div>

          <div id="section-16" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              16
            </span>
            <h3>Neck & Shoulder Relief</h3>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              So many people carry stress in their neck and shoulders, and this
              15-minute focused-area massage is quick enough to get during a
              lunch break but long enough to make an impact! You will be
              supported by the chair while your massage therapist works out
              tension in your upper back. Also available in a 30-minute option
              ($50).
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $30 (15 Minutes) • $50 (30 Minutes)
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $60 (15 Minutes)
            </p>
          </div>

          <div id="section-17" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              17
            </span>
            <h3>Chair/Body Massage</h3>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This is a focused-area massage as opposed to a full body, so you
              will confirm the area of focus at check in. Depending on the area,
              you have the choice of laying down or being in the chair while the
              therapist works on you.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $50 (30 Minutes)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              This is a focused-area massage as opposed to a full body, so you
              will each confirm the areas of focus at check in. Depending on the
              area, you have the choice of laying down in the same room or being
              in the chair while the therapists work on each of you.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $100 (30 Minutes)
            </p>
          </div>

          <div id="section-18" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              18
            </span>
            <h3>30 Minute Foot Massage a-la-carte</h3>
            <p className="font-semibold text-gray-900 mb-2">Single</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Need a pep in your step? Our therapists will ease aches and pains
              in your feet and lower legs while you relax. Interested in adding
              a foot massage onto your full body massage? Enjoy a discounted
              rate of $35 when added to a 60- or 90-minute massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              $50 (30 Minutes)
            </p>
            <p className="font-semibold text-gray-900 mb-2">Couples</p>
            <p className="font-heading text-2xl text-gray-800 leading-[30px] font-light">
              Need a pep in your step? While you relax side-by-side, our
              therapists will ease aches and pains in your feet and lower legs.
              Interested in adding a foot massage onto your couples full body
              massage? Enjoy a discounted rate of $35 per person when added to a
              60- or 90-minute massage.
            </p>
            <p className="text-small font-medium tracking-wide text-gray-900">
              Couples: $100 (30 Minutes)
            </p>
          </div>

          <div id="section-19" className="mb-20 lg:mb-40">
            <span className="text-xs text-gray-900 font-bold tracking-widest block mb-6 lg:mb-8">
              19
            </span>
            <h3>Add-ons</h3>
            <div className="text-small font-medium tracking-wide text-gray-900">
              <ul className="list-none">
                <li>-Prenatal +$5</li>
                <li>-Aromatherapy +$5</li>
                <li>-CBD Body Oil +$15</li>
                <li>-Hot Stone +$10</li>
                <li>-30 Minute Foot Massage +$35</li>
                <li>-30 Minute Couple’s Foot Massage +$70</li>
              </ul>
            </div>
            <div className="mt-20">
              <div className="mb-20">
                <h3>Sauna (No $5 off with cash)</h3>
                <p className="font-semibold text-gray-900 mb-2">Single</p>
                <p>
                  Our dry sauna is available by appointment only, since our
                  sauna does not stay on all day and will be prepared prior to
                  an appointment. The sauna is booked for one person or group at
                  a time, in 15- or 30-minute increment options. Contact spa for
                  availability!
                </p>
                <ul className="font-semibold text-sm text-gray-800 list-disc list-inside pl-2">
                  <li>15 Minute Sauna Session ($20)</li>
                  <li>15 Minute Couple’s Sauna Session ($40)</li>
                  <li>30 Minute Sauna Session ($35)</li>
                  <li>30 Minute Couple’s Sauna Session ($70)</li>
                </ul>
              </div>
              <div className="mb-20">
                <h3>Infrared Sauna</h3>
                <p className="text-small font-medium tracking-wide text-gray-900">
                  <a
                    href="https://youtu.be/vzAuORz99LM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about our infrared sauna here
                  </a>
                </p>
                <span className="font-semibold text-sm text-gray-800 italic">
                  **No $5 off with cash**
                </span>
                <ul className="font-semibold text-sm text-gray-800 list-disc list-inside pl-2">
                  <li>30 Minute Sauna Session ($35)</li>
                  <li>30 Minute Couple’s Sauna Session ($70)</li>
                </ul>
              </div>
              <div className="mb-20">
                <h3>Ionic Body Detox (No $5 off with cash)</h3>
                <p className="font-semibold text-gray-900 mb-2">Single</p>
                <p>
                  Our ionic body detox works by pulling toxins from the body
                  through the pores in your feet using an ionic machine in a
                  warm-water foot soak. Your therapist will prepare the soak and
                  after your time passes, the color of the water will change
                  depending on where the toxins were pulled from; a chart
                  describing those areas and colors will be shown to you once
                  you finish. Add on before or after any body massage, or come
                  in for the detox only.
                </p>
                <p className="font-semibold text-gray-900 mb-2">Couples</p>
                <p>
                  Performed side-by-side, our ionic body detox works by pulling
                  toxins from the body through the pores in your feet using an
                  ionic machine in a warm-water foot soak. Your therapist will
                  prepare the soak and after your time passes, the color of the
                  water will change depending on where the toxins were pulled
                  from; a chart describing those areas and colors will be shown
                  to you once you finish. Add on before or after any body
                  massage, or come in for the detox only.
                </p>
                <ul className="font-semibold text-sm text-gray-800 list-disc list-inside pl-2">
                  <li>15 Minute Ionic Body Detox ($20)</li>
                  <li>15 Minute Couple’s Ionic Body Detox ($40)</li>
                  <li>30 Minute Ionic Body Detox ($35)</li>
                  <li>30 Minute Couple’s Ionic Body Detox ($70)</li>
                </ul>
              </div>
            </div>
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
    heroDesktop: file(
      relativePath: { eq: "services/massage/Massage Services.jpg" }
    ) {
      childImageSharp {
        fixed(width: 1440, height: 1358, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: { eq: "services/massage/Massage Services.jpg" }
    ) {
      childImageSharp {
        fixed(width: 828, height: 956, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
