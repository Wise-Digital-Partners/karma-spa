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
            title="5 Benefits to Infrared Light Therapy"
            date="March 20, 2017"
            author="Karma"
            content="                        
                <p>If you’ve been around Karma, it’s possible you’ve heard one of us gushing over infrared light therapy. And for good reason—it’s amazing. The light that infrared light therapy produces is high frequency and produces spikes in nitric oxide, allowing healing to happen on a cellular level. When your body creates nitric oxide, blood flow is increased—and this means treatment of many physical health ailments as well as promotion of positive cosmetic changes. But what are those physical and cosmetic benefits? We want to give you the scoop.</p>

                <h2>Benefits to Infrared Light Therapy:</h2>

                <p><b>Builds Collagen</b></p>
                <p>Infrared light therapy helps build collagen which reduces the appearance of fine lines and wrinkles. Higher collagen counts can help make a person appear more youthful through their decrease in crow’s feet and thin skin. As you’ve aged, you’ve most likely noticed a decrease in collagen production (this is how those wrinkles and fine lines start to appear after all), but this also affects the health of your hair and nails. Collagen also helps with loss of water in the body and overall moisture.</p>

                <p><b>Increases Blood Flow</b></p>
                <p>Of course, the increase of blood flow is a major draw to this therapy because increased blood flow does such incredible things for our body! Heightened blood flow increases the amount of oxygen being sent to your extremities—most notably your heart and arteries. This means a healthier circulatory system and more energy! Now that sounds like a “win” in our book. Back to cosmetics, your skin can also benefit from increased blood flow– after all, our epidermis is the largest organ we have! Infrared light therapy reduces redness, helps heal broken capillaries, and creates a more even flow of blood throughout your body—which results in a more even looking skin tone.</p>

                <p><b>Helps Heal Injuries</b></p>
                <p>If you’re an athlete or have recently had an injury that just won’t seem to heal, infrared light therapy can be life-changing for you! Because of the high wavelengths of energy being sent to your body at the time of your treatment, it helps deliver healing energy to cells at a rapid rate and relieves pain at a quicker-than-usual pace. It’s even FDA-approved as a common treatment for chronic pain! If you’ve found yourself let down on occasion by the world of modern medicine, we can’t recommend this treatment enough.</p>

                <p><b>Improved Range of Motion</b></p>
                <p>This therapy can also lead to an increased range of motion through its ability to rebuild cartilage, and is a common treatment for those struggling with arthritis. According to Dr. Axe, “Decreasing oxidative damage, which degenerates joints, and modulating inflammation are other ways that LLLT [low level laser therapy] benefits soft/connective tissue.”</p>

                <p><b>Reduces the Effects of Sun Damage</b></p>
                <p>Once again, because of the stellar job it does producing collagen and bringing more elasticity to your skin, infrared light therapy is a great treatment for those struggling with sun damage. If you’re looking to decrease the appearance of sunspots—or just want healthier skin in general— infrared light therapy could be the treatment for you.</p>

                <p>Do you have further questions about infrared light therapy, or want to give it a try? Karma Spa offers quality treatment that could bring you the health breakthrough you need! Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />
      </Layout>
   );
};

export default Post;

export const query = graphql`
   {
      featuredImage: file(relativePath: { eq: "blog/benefits-to-infrared-light-therapy.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
