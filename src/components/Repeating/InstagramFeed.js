// import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
// import styled from '@emotion/styled';
// import tw from 'twin.macro'
// import Img from "gatsby-image"

// import ButtonGhost from '../Button/ButtonGhost'

// const InstagramFeed = () => {

//     const InstagramPost = styled.a`
//         ${tw`relative overflow-hidden cursor-pointer`}
//         &:hover {
//             .overlay {
//                 ${tw`opacity-100`}
//             }
//             .content {
//                 ${tw`opacity-100 translate-y-0`}
//             }
//         }
//         .overlay {
//             ${tw`absolute bg-black bg-opacity-75 z-10 left-0 top-0 right-0 bottom-0 opacity-0 transition-all duration-300 ease-linear`}
//         }
//         .content {
//             ${tw`absolute flex items-center justify-center z-20 left-0 top-0 right-0 bottom-0 text-white opacity-0 transform translate-y-12 transition-all duration-300 ease-linear`}
//         }
//         .post-details {
//             ${tw`text-xl mx-4`}
//         }
//     `

//     const data = useStaticQuery(graphql`
//         query {
//             instagram: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 4) {
//                 edges {
//                     node {
//                         id
//                         likes
//                         comments
//                         mediaType
//                         localFile {
//                             childImageSharp {
//                                 fluid(maxWidth: 400, quality: 100) {
//                                     ...GatsbyImageSharpFluid_withWebp
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     return (
//         <section className="mb-24">
//             <div className="container">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">

//                     {data.instagram.edges.map(({node}) => {
//                         const {
//                             id,
//                             likes,
//                             comments,
//                             localFile,
//                         } = node;
//                         return (
//                             <InstagramPost href={`https://www.instagram.com/p/${id}/`} target="_blank" rel="noopener noreferrer" key={id}>
//                                 <div className="overlay"></div>
//                                 <Img fluid={localFile.childImageSharp.fluid} />
//                                 <div className="content">
//                                     <span className="post-details">
//                                         <i className="fas fa-heart"></i> {likes == null ? 0 : likes }
//                                     </span>
//                                     <span className="post-details">
//                                         <i className="fas fa-comment"></i> {comments == null ? 0 : comments }
//                                     </span>
//                                 </div>
//                             </InstagramPost>
//                         )
//                     })}
//                 </div>
//                 <div className="text-center">
//                     <ButtonGhost href="https://www.instagram.com/glamifypermanentmakeup/" text="Follow Us On Instagram"/>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default InstagramFeed;
