import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogSinglePost from "../components/Blog/BlogSinglePost";

export const Post = ({ data }) => {
   return (
      <Layout headerLinkColor="black">
         <SearchEngineOptimization
            title=""
            description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <BlogSinglePost
            title="8 Types of Massage: What’s the Difference?"
            date="December 20, 2016"
            author="Karma"
            content="                        
                <p>Who doesn’t love a good massage? The room is serene and smells like heaven, you’re finally able to leave your current stressors behind you, and post-appointment your body feels ready to take on the world. But not every massage is created equal! That’s right—there is an endless amount of massage types, and with them come various positives and negatives. Not sure where to begin? We did a round-up of the most popular types to give you a brief intro.</p>

                <h2>Massage Types:</h2>

                <p><b>Swedish Massage</b></p>
                <p>A Swedish massage is one of the most popular types of massage in the United States, and is often recommended for a first-time visitor as it boasts particularly gentle movements. The masseuse uses circular strokes and kneading patterns to help relax the guest and create a feeling of serenity.</p>

                <p><b>Hot Stone Massage</b></p>
                <p>A more popular choice in the West in recent years, the hot stone massage is actually an age-old technique to help relax tense muscles throughout the body. The hot stones are usually heated between 130-145 degrees and placed strategically along different areas of your body—usually along the spine, hands and feet. The hot stone massage possesses not only the ability to relieve tension but also to lessen stress, kick the symptoms of autoimmune diseases to the curb, and boost immunity through its ability to lessen water retention.</p>

                <p><b>Deep Tissue Massage</b></p>
                <p>The deep tissue massage—just as it suggests—allows massage therapists to dig deep into your muscles to help flush out toxins and relieve specific points of chronic pain. If you have a particular area that’s been giving you grief, a deep tissue massage is highly recommended!</p>

                <p><b>Sports Massage</b></p>
                <p>Here’s a popular choice for both athletes and people looking to increase their range of motion alike. A sports massage is an excellent option for individuals wanting to up their physical performance. This massage works to bring the most beneficial nutrients to various muscles throughout the body to help make this goal a reality.</p>

                <p><b>Thai Massage</b></p>
                <p>A Thai massage is best compared to being guided through a comprehensive yoga session without having to move from your spot. It’s known to loosen up joints and stretch muscles into stress-free glory, and it can be a lifesaver to those living that cubicle life!</p>

                <p><b>Lymphatic Massage</b></p>
                <p>A lymphatic massage works to create the optimal environment for your lymph nodes to thrive through tender, intentional movements. If you have unexplained swelling, are feeling unusually lethargic, or just want to feel recharged, we can’t recommend this lymphatic experience enough.</p>
                           
                <p><b>Tuina Massage</b></p>
                <p>A popular choice for those interested in Chinese medicine, a tuina massage encourages the eight principles of TCM (traditional Chinese medicine) into balance. Unlike many other massage types, the Tuina massage typically does not include lotions or oils and instead uses brush techniques, kneading and calculated rubbing to relieve tension.</p>
                
                <p><b>Acupressure Massage</b></p>
                <p>If you’ve ever partaken in acupuncture, this massage type holds the same principles. If you haven’t tried out acupuncture (because, ah, needles!) this massage type could be a great choice for you as it helps promote the same relief solely using the masseuse’s pressure.</p>
                
             
                <p>Are you curious about a massage style you haven’t tried yet? Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />
      </Layout>
   );
};

export default Post;

export const query = graphql`
   {
      featuredImage: file(relativePath: { eq: "blog/8-types-of-massage-whats-the-difference.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
