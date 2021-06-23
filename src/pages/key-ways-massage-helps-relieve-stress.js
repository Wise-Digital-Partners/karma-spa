import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogSinglePost from "../components/Blog/BlogSinglePost";

export const Post = ({ data }) => {
   return (
      <Layout headerStyle="classic" headerLinkColor="black" headerHasBorder={false}>
         <SearchEngineOptimization
            title=""
            description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <BlogSinglePost
            title="Key Ways That Message Helps Relieve Stress"
            date="February 20, 2017"
            author="Karma"
            content="                        
                <p>Stress is prevalent in our everyday lives, whether it be the anxiety given to you because of a new task at work, the child tugging at your pant leg who just entered their terrible twos, or the house guest that didn’t remember to pack anything. That’s why we’re so thankful that we get to help relieve anxiety on your end—because for at least 60 minutes, you deserve some serenity.</p>

                <p>According to the American Psychological Association’s symptoms of stress, a massage can help relieve the following symptoms:</p>

                <ul>
                  <li>Headaches</li>
                  <li>Muscle Tension</li>
                  <li>Difficulty Sleeping</li>
                  <li>Irritability</li>
                  <li>Anxiety</li>
                </ul>

                <p>But what’s the science behind the stress slowly melting away during your massage appointment? We have you covered.</p>

                <h2>5 Ways Massages Help Relieve Stress</h2>

                <p><b>Muscle Relaxation</b></p>
                <p>When stress is released throughout your body, it’s an automatic response for your muscles to tense up and contract. Not only does this cause your muscles to stay sore if you’re stressed long-term, but it can also lead to other negative repercussions such as headaches and chronic pain. During a massage, your therapist can focus on your pain points and lessen the tension that has built up over time.</p>

                <p><b>Lowered Cortisol Levels</b></p>
                <p>In a recent clinical study it was found that participants that were massaged showed lowered cortisol levels. Cortisol is a hormone linked to stress, and when elevated it can lead to adrenal fatigue.  It was also noted that after a mere five minutes, massage also lowered the participants heart rate—and high heart rates are often linked to high stress.</p>

                <p><b>Can Help or Treat Injuries</b></p>
                <p>When participating in a sports massage, our therapists particularly focus on techniques that help prevent injuries and treat current ones. Athletes need an extra focus on muscles since theirs work more than the average individual on a daily basis, so don’t worry—we’re here to help.</p>

                <p><b>Increased Blood Flow</b></p>
                <p>Massages can lead to increased blood flow and circulation throughout the body, which leads to improved function in your brain and other organs. According to Vital Proteins, increased blood flow also has cosmetic benefits such as healthier skin and nails.</p>

                <p><b>Removes Toxins</b></p>
                <p>Massages help remove toxins from the body, which means less illness across the board. Woohoo! Just don’t forget to drink a lot of water in the days after and leading up to your massage. During your treatment, the toxins are then released into the bloodstream, and the more water to help flush them out through the kidneys, the better.</p>

                <p>Have more questions about the benefits of getting a massage? Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />
      </Layout>
   );
};

export default Post;

export const query = graphql`
   {
      featuredImage: file(relativePath: { eq: "blog/key-ways-that-message-helps-relieve-stress.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
