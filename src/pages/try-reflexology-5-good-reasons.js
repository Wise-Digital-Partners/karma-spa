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
            title="Why Try Reflexology? 5 Good Reasons"
            date="February 10, 2017"
            author="Karma"
            content="                        
                <p>If you’ve never tried reflexology, you’re missing out on a fabulous opportunity to relieve the body and mind. The process basically works by stimulating the pressure points on your feet and hands. In doing so, reflexologists believe that they’re stimulating your parasympathetic nervous system, and therefore rebalancing your chi (your vital energy).</p>

                <p>But why try reflexology and what exactly can it do for you? Let’s dive in.</p>

                <h2>Reasons to Try Reflexology</h2>

                <b>It Improves Circulation</b>
                <p>The increase of circulation of blood flow is a key reason to try reflexology! Improved circulation helps increase the amount of oxygen being sent to your extremities, especially your heart and arteries. This means a healthier circulatory system and more energy (AKA chi!) A totally valid reason to try the therapy.</p>

                <b>It Fights Stress</b>
                <p>When you’re stressed, your muscles tend to tense-up and ache. During a reflexology session, your therapist can focus on specific points of pain and help lessen the tension that has built up over time in your contracted muscles. When your muscles feel better, you feel better.</p>

                <b>It Leads to Better Sleep</b>
                <p>As stated above, reflexology leads to improved circulation…which therefore leads to better sleep! Why? Because blood flow is increased, more oxygen is sent to your brain! There’s also a specific area on the foot that is often massaged for a minimum of one minute because it’s linked to better sleep rates in clients.</p>

                <b>It Detoxes Your Body</b>
                <p>Much like a traditional massage, reflexology definitely helps detox your body. During your session, the toxins your muscles are carrying are released into your bloodstream and flushed out through your kidneys, so drinking plenty of water before and after your treatment is key! This also leads to a heightened immune system—not only because of the toxin removal process, but also because it sends self-healing energy to your cells. Cool, right?</p>

                <b>Reduces the Effects of</b>
                <p>According to the results of a 2013 study, “Reflexology could be as effective as painkillers as a method of pain relief. Researchers at the University of Portsmouth found that people who were undergoing reflexology felt about 40 percent less pain, and were able to stand pain for about 45 percent longer.” Dr. Carol Samuel explained, “It is likely that reflexology works in a similar manner to acupuncture by causing the brain to release chemicals that lessen pain signals.” Clearly, this is something that’s easy to get behind, and something that we recommend to all of our athletes and chronic pain sufferers.</p>

                <p>Make sure to check out our reflexology sessions at both our Hillcrest and Carlsbad locations, and see what all the fuss is about! Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />

    </Layout>
  );
}

export default Post;

export const query = graphql`
{
	featuredImage: file(relativePath: {eq: "blog/why-try-reflexology-5-good-reasons.jpg"}) {
		childImageSharp {
			fluid(maxWidth: 1920, quality: 100) {
			...GatsbyImageSharpFluid_withWebp
			}
		}
	}
}
`