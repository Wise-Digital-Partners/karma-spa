import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogSinglePost from "../components/Blog/BlogSinglePost";

const Post = ({ data }) => {
   return (
      <Layout headerLinkColor="black">
         <SearchEngineOptimization
            title="How Can Massage Help Fibromyalgia | Karma Spa"
            description="Looking for relief from the pain and fatigue of fibromyalgia? Discover how massage therapy can help your fibromyalgia by reducing pain & improve your sleep!"
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <BlogSinglePost
            title="How Massage Can Help Your Fibromyalgia"
            date="January 10, 2017"
            author="Karma"
            content="                        
                <p>Many people are affected by the side effects of fibromyalgia—a condition that leads to fatigue, pain, memory loss and other symptoms. Although it’s not life threatening, it sure is an unfortunate issue to have to deal with on a day-to-day basis! The good news is that frequent massages can help lessen the symptoms and act as a relief for the chronic soreness that fibromyalgia brings. How exactly can it help though? We have some answers.</p>

                <h2>How Massage Can Help Your Fibromyalgia:</h2>

                <p><b>Massages Reduce Pain</b></p>
                <p>When muscles are tense, not only can they cause immense pain, but they may also bring on other negative symptoms such as headaches and chronic pain. When you get a massage, your therapist will loosen these tense pain points, therefore decreasing your discomfort levels. It’s much needed for those dealing with fibromyalgia!</p>

                <p><b>They Improve Mental Clarity</b></p>
                <p>Cortisol, a hormone that can cause unneeded stress and anxiety, is lowered when getting a massage. The negative side of cortisol doesn’t stop there though: “Negative effects cortisol has include increased anxiety and depression, suppression of the immune system and a decrease in bone formation.” Decreasing cortisol means less stress, and that means more mental clarity and room for you to breathe again!</p>

                <p><b>You’ll Get More Sleep</b></p>
                <p>Lessened cortisol levels also mean more good quality sleep! Woohoo! Who doesn’t need a little (or a lot of extra) rest? A recent study sounded off on the sleep difference between those with and without massages: “The massage therapy group, as compared to the relaxation group, reported experiencing less pain, depression, anxiety and improved sleep. They also showed improved trunk and pain flexion performance, and their serotonin and dopamine levels were higher.” Better sleep can also help with stress levels and more relaxed joints as well. To learn more about how massages and stress levels are linked, you can check out this article.</p>

                <p>Fibromyalgia is just one of the health conditions that frequent massages can soothe. Give us a call at Karma Spa to find out how we can bring you relief from a host of other health issues. Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />
      </Layout>
   );
};

export default Post;

export const query = graphql`
   {
      featuredImage: file(relativePath: { eq: "blog/how-message-can-help-your-fibromyalgia.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
