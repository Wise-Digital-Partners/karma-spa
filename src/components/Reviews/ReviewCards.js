import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      google: file(
        relativePath: { eq: "repeating/Reputation Badges/Google.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 84)
        }
      }
      yelp: file(relativePath: { eq: "repeating/Reputation Badges/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 65)
        }
      }
      facebook: file(
        relativePath: { eq: "repeating/Reputation Badges/Facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 100)
        }
      }
      angiesList: file(
        relativePath: { eq: "repeating/Reputation Badges/Angies List.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 115)
        }
      }
      headshot: file(relativePath: { eq: "5.2 Review/headshot.png" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "Alvarez World132",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",

      quote:
        "My first time, Jack was amazing with deep tissue! Can’t wait to come back and try different massages and facial!",
    },
    {
      name: "Griselda A",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Jessica at the front desk was super sweet and got me in same day! Checked temperature at check-in and got me set up with aromatherapy. Amy did a phenomenal job and worked on the areas I needed. Facility is clean and following COVID guidelines. Highly recommend!",
    },
    {
      name: "Jared Melvin",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Had an amazing first experience—got the Vice President treatment, perfect package and exactly what I was looking for. Will definitely be returning soon.",
    },
    {
      name: "C Dorantes",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Just moved nearby, and finding a massage parlor to replace my previous one was important. This place was is it and then some—very clean and the customer support from the minute you walk into the front desk to the moment you're taken to the back of the facility was admirable. It's all about you here—your needs and exactly what you came here for. You'll definitely leave different and satisfied. I recommend you try the variable services here.",
    },
    {
      name: "Kelly Hard",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "We LOVED our massages at Karma Spa! We did a couples massage and it was AMAZING! The staff are super friendly and really want to make your experience amazing. We left feeling more relaxed than we ever have! Highly recommend!!",
    },
    {
      name: "Michael Martinez",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I got a great couple massage here. The staff was amazing!! From the front office to the masseuses, we were well taken care of and look forward to returning.",
    },
    {
      name: "Conrad & Jessica",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Great masseur's, beautiful and tranquil spa and warm, welcoming and friendly owner.",
    },
    {
      name: "Grace M",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I've been to this spa a couple of times before. Every time has been fantastic, but my last massage was above and beyond my expectations. Johnny gave me the best massage I've ever had in my entire life... and that's saying a lot because I've had back and neck problems for most of my life and have received lots of massages from lots of different people. I couldn't move my right arm above my shoulder before my session with Johnny, and the day after my massage was the first day in a long time where my mobility was re-established, and I was no longer in pain. For me, this massage was truly life-changing, and I will be back.",
    },
    {
      name: "Christie H",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I've been here a handful of times, and it took me a while to find Jack. He is hands down (no pun intended!) the BEST masseuse I've ever had. I only request him. I have a spinal cord stimulator implant in my chunks, and I've had him enough times that he knows where not to massage me on my lower back. He always gets my shoulders and neck much looser, and he knows his stuff! I literally leave feeling like a cloud every single time! I can't recommend this place enough! The staff up front is always kind, and the facility is clean. Thank you, Jack; I'll be back next month!!!! It is SUCH a treat to get the best massage ever just a few mins down the road from my house! I am so grateful for Karma! PS: Whatever you're paying Jack, double it. He is THAT good. I really hope Karma appreciates all the hard work he puts into his clients! I know being a masseuse is not an easy job, and I applaud his consistent work! You, as a company, should too. It's not every day you hire someone with such skills! ",
    },
    {
      name: "Caitlin C",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I've been going to Karma Spa for as long as I've been getting massages. About 6+ years. As a North County native, this is my go-to massage place!! I've gotten their foot and body fusion, their 60-minute hot oil massage, 90-minute deep tissue massage, and 60/90-minute couples massage, and those are basically my go-to's! The waiting room is very nice and spacious, the bathroom is always clean, and the massage rooms are always neat and tidy. There is an additional fee for electronic payments, so I always pay cash. There is an ATM machine on site. I've never used it, but I know it's there! Definitely check this place out! I know I'll be back to try new things too. ",
    },
    {
      name: "April L",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I had a one-hour prenatal massage with Lydia last week and could not say enough good things! Lydia was on time and very kind and caring. Once I was ready, and under the covers, she made sure my pillows were adjusted in the most comfortable way (which is tricky when you're 6 months pregnant) before she got started. Throughout the hour-long massage, she checked in to make sure I was happy with the pressure, which I was. Getting massages during pregnancy can be a challenge with all of the extra precautions that need to be taken, but Lydia made sure I felt pampered and relaxed. It was the most relaxing massage I've had in a long time, and I will be back!",
    },
    {
      name: "Chelly O",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Honestly, one of the best places to get a nice relaxing massage. I had a 60-minute massage with Bella yesterday, and she just gave me the perfect amount of pressure that made me leave like a brand new person. Highly recommend for anyone who just needs to relax after long/stressful days.",
    },
    {
      name: "Brooke S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        " I would give 10 stars if I could. Just had one of the best massages of my life and cannot wait to come back. It's very clean here, and I had a great experience. I can't remember my massage therapist's name, but he did a phenomenal job.",
    },
    {
      name: "Robin S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "My husband surprised me with a sixty-minute Deep Tissue massage today at Karma Spa. Nancy was my masseuse. She did an amazing job! I prefer a heavy touch because my back and neck are where I hold on to stress. A light touch doesn't get out the knots. She is very attuned to the body and knew just where the knots were, how long to work on them, and when to let up before it became too painful. I walked out a new person. The staff was very pleasant and professional. The place was very clean, and I'll definitely be back!",
    },
    {
      name: "Jess K",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "After having a long work day, this experience was just what I needed. From the moment I walked through the doors, everything was so fresh and clean, with a relaxing smell that took my stress away. My massage was wonderful, and I appreciated that she really listened to what I needed when I told her I had some lower back issues. I booked another appointment immediately! 10/10 would recommend.",
    },
    {
      name: "Stehpen L.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Was able to get in last minute for a sauna sesh. This place is perfect, so clean and relaxing with great vibes and aromas. Glad I found this place and will definitely be back!",
    },
    {
      name: "Stehpen L.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "There are so many lovely things to say about Karma Spa! My positive experience started straight away with my phone call to make an appointment. I was met with kindness and detailed answers to questions. THE BEST part about this spa is that the whole staff is fully vaccinated, and everyone wears a mask...properly (not the under the nose/chin BS).Given the huge surge of covid currently, my extreme hesitations were reassured with their practice of protecting patrons and their staff. All of the staff was kind and accommodating. My massage was one of the best I have had in an incredibly long time! An area on my back I had been struggling with for over a month was finally corrected after many attempts from other chiropractors and massage therapists. I was shocked, incredibly thankful and relieved!My facial was also lovely and the conversation was lively (I instigated convo-so no worries if you seek a quiet experience). I live 2 hours away and am honestly considering making the drive every few months, just so I can experience this exceptional care again!",
    },
    {
      name: "April S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Cici was a really good massage therapist!! I've had so many massages in my life, and I'd go back to her. She asked every now and then how it was, and she gives good deep tissue. She truly knows what she's doing. Unfortunately, I am only visiting, but the prices for massages and the other services they offer are at a very good rate! I'd love to come back and get one of the packages. Also, the front desk guy had amazing customer service!!",
    },
    {
      name: "Roxanne S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Clean, quiet, relaxing, and definitely a bargain price for a great massage. Hubby and I came last minute for a couples massage on a Friday afternoon. It was just what we needed! Staff is very friendly.",
    },
    {
      name: "Emily T",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I thought the price was too good to be true. I was visiting Carlsbad and needed a massage place. This place was so nice. Clean, friendly, and such an amazing front desk welcome, and the massage was the best. Thank you so much.",
    },
    {
      name: "Vera K",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I had a CBD massage yesterday, and my masseuse was Alice. Shoutout to her!! She was amazing! I highly recommend her. She was so sweet and kind. My shoulders get really tense and she focused on my shoulders and I feel so much better! She even asked me if I felt better afterward, which I appreciated. I'll be back soon, karma spa!",
    },
    {
      name: "Brittani S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I'm fairly hard to impress when it comes to massages. I walked in for my first-time appointment here expecting a middle-of-the-road experience, but my hubs was treating me, and my body was in need. As a nurse and competitive bodybuilder, I'm a tough case. The ambiance is great, and the staff was lovely, but Lisa... Lisa knows how to give a massage. Without any specific instructions, she delivered one hell of a massage with exceptional attention to detail. She knew exactly where to spend time and the pressure to apply, and she was attentive of some wounds in nursing too. Everything from working out the 5 knots in my back to a scalp-forehead-temple-ear massage that really iced the cake. 10/10 recommend from tippy tips of my toes to my blissed out temples.",
    },
    {
      name: "Jeana I",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "This is my third time and third masseuse at Karma. I have had many, many massages thru the years, and most were wonderful. But sometimes you need to keep searching to find the right masseuse for your personal preference, and today I was so happy with my massage from Alice. She knows what a Swedish massage is all about, and it was so very relaxing with just the right pressure. I recommend her, and I do recommend Karma. The staff are friendly and accommodating., and seem to want to know how your experience was with the masseuse.",
    },
    {
      name: "Amber L",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "My husband and I had a great couples massage. As people who rarely get massages, we really don't know what to ask for. Both massage therapists checked in on the pressure and made us feel comfortable. Great experience and a lovely location. It's huge inside, very clean, and decorated so nicely. Thank you."
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border-2 border-secondary-200 shadow-2xl rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-3.5">
                  <span className="text-secondary-800 font-heading font-semibold">
                    {review.name}
                  </span>
                </div>
                {/* <div className="absolute bg-primary_400 bottom-0 font-semibold inline-flex items-center justify-center mb-3  right-3 rounded-4xl text-white text-xs">
                  <span className="text-secondary-800 font-heading font-semibold px-2.5 py-1.5">
                    {review.location}
                  </span>
                </div> */}
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
