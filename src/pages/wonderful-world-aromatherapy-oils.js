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
            title="The Wonderful World of Aromatherapy Oils"
            date="March 10, 2017"
            author="Karma"
            content="                        
                <p>Aromatherapy sounds like a wonderful sensory experience—and it is! But what are the actual benefits of your massage therapist including essential oils into your massage practice? Well, aromatherapy has been shown to reduce anxiety, ease pains, aid in sleep, cure headaches, and an assortment of other benefits as well. Curious as to what the advantages of specific kinds of essential oils are? We brought in our resident essential oil expert to fill you in.</p>

                <h2>The Benefits of Various Essential Oils:</h2>

                <p><b>Lavender</b></p>
                <p>Lavender is an essential oil often used to ease stress and relax the person partaking in it. It’s extremely versatile and has also been shown to reduce inflammation in the body.</p>

                <p><b>Bergamot</b></p>
                <p>Bergamot is a great essential oil that can help soothe those with skin ailments such as eczema or psoriasis. This oil has also been known to relieve stress and anxiety, and can be used to jumpstart the digestive tract in a healthy way.</p>

                <p><b>Peppermint</b></p>
                <p>Peppermint has been known to be a miracle worker for headache relief. Moreover, it has a cooling impact that results in increased mental awareness. This energy-boosting essential oil can also help lessen redness and cure congestion.</p>

                <p><b>Anise</b></p>
                <p>Anise is often utilized when the client has arthritis or recurring muscle spasms. This works effectively to ease the spasms, clear congestion, and lessen breathing difficulties.</p>

                <p><b>Cedarwood</b></p>
                <p>Cedarwood works wonders for acne and also can help with dermatitis, dandruff and stress. A win-win-win in our book!</p>

                <p><b>Frankincense</b></p>
                <p>Not nearly as Halloween-y as it sounds, frankincense can help comfort those with anxiety. Beyond that, it can relieve symptoms of asthma and reduce the signs of scars and stretch marks.</p>

                <p><b>Lemon</b></p>
                <p>We love a good lemon essential oil drop or three, and for good reason! Lemon essential oils help brighten dull skin and dry up oily skin. Also, they can help relieve stress and decrease perspiration.</p>

                <p><b>Patchouli</b></p>
                <p>Patchouli is wonderful because it helps assist in kicking acne to the curb, decreasing the appearance of cellulite and combatting dandruff.</p>

                <p><b>Basil</b></p>
                <p>Basil is for so much more than just putting on salads! This oil is often used as an antidepressant, an anti-inflammatory agent and a hormone influencer. Alright, alright, alright.</p>

                <p><b>Lemongrass</b></p>
                <p>Lemongrass has antiviral and antifungal properties that also work to stimulate the body and mind.</p>

                <p>Have you used essential oils before, or tried aromatherapy? In today’s stress-heavy world, now would be a great time to try. At Karma Spa, we know how to use essential oils to enhance your massage in appropriate ways. Contact us for more info below or to schedule your appointment!</p>
            "
            featuredImage={data.featuredImage.childImageSharp.fluid}
         />
      </Layout>
   );
};

export default Post;

export const query = graphql`
   {
      featuredImage: file(relativePath: { eq: "blog/the-wonderful-world-of-aromatherapy-oils.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
