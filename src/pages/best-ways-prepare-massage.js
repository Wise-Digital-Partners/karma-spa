import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogSinglePost from "../components/Blog/BlogSinglePost";

export const Post = ({data}) => {

  return (
    <Layout 
      headerStyle="classic"
      headerLinkColor="black"
      headerHasBorder={false}
    >
		<SEO
			title=""
			description=""
			// openGraphImage={data.openGraphImage.publicURL}
			// twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
		/>

        <BlogSinglePost 
            title="Best Ways to Prepare for a Massage"
            date="January 20, 2017"
            author="Karma"
            content="                        
                <p>Unlike most things in life, preparing for a massage isn’t something most people consider. You’re going to get a massage to take-in some extra relaxation time and hopefully loosen up some joints and muscles that have been bothering you lately, right? While both of those are good reasons to get a massage, there’s actually much more that you should be doing to prepare for your visit. Curious what you can do to make the most out of your massage experience? We have you covered.</p>

                <h2>5 Ways to Prepare for a Massage</h2>

                <p><b>Don’t Eat Before a Massage</b></p>
                <p>Eating lightly is suggested, but a full meal is probably best avoided. During your massage session, digestion is stimulated which means that if you eat a full meal, you may experience some discomfort. Hungry? No reason to starve yourself! Eat some fruit, some lightly grilled veggies or a protein bar—all good options!</p>

                <p><b>Drink Tons of Water</b></p>
                <p>Since your muscles are being worked on during a massage, hydration is key (much like exercise)! Throughout the course of your massage, your kidneys will begin to flush out the toxins released during your session to give your kidneys extra support. Because of this, water is a major component to post-massage health to avoid getting sick. Need more convincing? We have a whole blog post on why you should be drinking tons of water before and post massage, here.</p>

                <p><b>Take A Shower</b></p>
                <p>Warm water is preferred as this practice will also help your muscles loosen up. Not only will you thank yourself when your soreness is a 0-2 on the discomfort scale, but your massage therapist will certainly thank you for coming in clean! A win-win for both parties.</p>

                <p><b>Stretch</b></p>
                <p>Like the warm shower, stretching will also help loosen up your muscles and get them ready for prime massage time! The more loose your muscles are, the more deep tissue work your therapist will be able to get in there and do—and the better you’ll feel! Stretch afterwards too to really feel the best you can.</p>

                <p><b>Communicate With Your Massage Therapist</b></p>
                <p>Communication with your massage therapist is essential to a great massage experience. Tell them about any allergies to lotions or oils you may have and tell them if any major discomfort starts to happen. Tell them if the pressure they’re applying to your muscles is too light or too strong. You can even tell them if you’d like them to focus on an area in particular, if you don’t like the music, if you’d prefer to talk/not talk throughout, etc. Your massage therapists are here to make this as enjoyable for you as possible!</p>

                <p>Of course, once you’ve readied yourself for a good massage, we’ll take care of the rest. Come visit us at Karma Spa to experience relaxation and rejuvenation for your body and mind. Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />

    </Layout>
  );
}

export default Post;

export const query = graphql`
{
	featuredImage: file(relativePath: {eq: "blog/best-ways-to-prepare-for-a-massage.jpg"}) {
		childImageSharp {
			fluid(maxWidth: 1920, quality: 100) {
			...GatsbyImageSharpFluid_withWebp
			}
		}
	}
}
`