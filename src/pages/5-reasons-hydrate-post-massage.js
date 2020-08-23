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
            title="5 Reasons to Hydrate Post-Massage"
            date="December 10, 2016"
            author="Karma"
            content="                        
                <p>If you’ve had a massage before, your masseuse has likely encouraged you to slam water like it’s your job right after. But why? During a massage, many toxins you’ve been harboring are released. Great! Right? While it’s wonderful that your body is purging harmful toxins, they have to be released somewhere—and it’s believed to be right into your bloodstream. It’s no reason to run and hide though (and never have a massage again—blasphemy!). Instead, it’s best to chug water post-massage to avoid falling ill.</p>

                <p>Need more reasoning or want to learn more? Karma Spa has you covered.</p>

                <h2>Here’s why you should hydrate post-massage:</h2>

                <b>It Aids in Detoxification</b>
                <p>Water helps purify your kidneys, and these organs help process key nutrients and toxins! The water flushes the free radicals released during a massage out and oxygenates your cells to help produce more of the good stuff. Drinking water post-massage = giving thanks to your immune system.</p>

                <b>It Kicks Dehydration to the Curb</b>
                <p>Massages are dehydrating, and our bodies are 60% water! The squeezing that the massage therapist does during your appointment releases fluids from your muscle tissues and into your vascular system. That means that you have to restock up on all of the water you lost during your massage. Best get to sippin’. Wondering how much to drink? One massage therapist recommends drinking half your body weight in ounces per day.</p>

                <b>Metabolic Waste</b>
                <p>It sounds fancy, but really metabolic waste is just particles in our body that are of no use to us— and during a massage, they’re released at a much quicker rate than what our bodies are used to. Getting a lymphatic massage done? Take special note of this article, as otherwise you’re much more likely to feel unwell after. Metabolic waste can constrict our muscles and lead to improper flow of toxin flushing. When you drink water, you give your muscles a chance to loosen-up and therefore release the tense muscles that hold waste. Cool!</p>

                <b>Drink Water Pre-Massage</b>
                <p>Yep. Pro tip! Drinking water before a massage can help just as much, if not more, than drinking post-massage! This will help your kidneys release the toxins as they work their way out of your muscles during your appointment, and move them out of your system in a healthy, productive manner. Nothing like electrolytes to aid in replenishing your immune system!</p>

                <b>Prevent Excess Soreness</b>
                <p>After a massage, it’s normal to feel a little sore in areas that the massage therapist focused on. Because of this, hydrating after a massage can help prevent excessive soreness. Do yourself a favor and add an extra glass or two to your normal post-massage amount if you’re still feeling super sluggish or ill</p>

                <p>Make no mistake—there’s still nothing like a great massage to get your body retuned for life. Make an appointment with us at Karma Spa to feel refreshed and recover health in your muscles, tissues, and throughout your body. Just don’t forget the water afterward!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />

    </Layout>
  );
}

export default Post;

export const query = graphql`
{
	featuredImage: file(relativePath: {eq: "blog/5-reasons-to-hydrate-post-massage.jpg"}) {
		childImageSharp {
			fluid(maxWidth: 1920, quality: 100) {
			...GatsbyImageSharpFluid_withWebp
			}
		}
	}
}
`