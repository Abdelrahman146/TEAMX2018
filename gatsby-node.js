// // const _ = require('lodash')
// // const Promise = require('bluebird')
// // const path = require('path')
// // const select = require('unist-util-select')
// // const fs = require('fs-extra')

// // exports.createPages = ({ graphql, boundActionCreators }) => {
// //   const { createPage } = boundActionCreators

// //   return new Promise((resolve, reject) => {
// //     const pages = []
// //     const blogPost = path.resolve('./src/templates/blog-post.js')
// //     resolve(
// //       graphql(
// //         `
// //           {
// //             allMarkdownRemark(limit: 1000) {
// //               edges {
// //                 node {
// //                   frontmatter {
// //                     path
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         `
// //       ).then(result => {
// //         if (result.errors) {
// //           console.log(result.errors)
// //           reject(result.errors)
// //         }

// //         // Create blog posts pages.
// //         _.each(result.data.allMarkdownRemark.edges, edge => {
// //           createPage({
// //             path: edge.node.frontmatter.path,
// //             component: blogPost,
// //             context: {
// //               path: edge.node.frontmatter.path,
// //             },
// //           })
// //         })
// //       })
// //     )
// //   })
// // }


// const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//   const { createNodeField } = boundActionCreators
//   if (node.internal.type === `MarkdownRemark`) {
//     if (node.frontmatter.type == `member`) {
//         //console.log('\n',createFilePath({ node, getNode, basePath: `team` }))
//         const slug = createFilePath({ node, getNode, basePath: `team` })
//         createNodeField({
//           node,
//           name: `slug`,
//           value: slug,
//         })
//     }
//     if (node.frontmatter.type == `service`) {
//         //console.log('\n',createFilePath({ node, getNode, basePath: `team` }))
//         const slug = createFilePath({ node, getNode, basePath: `services` })
//         createNodeField({
//           node,
//           name: `slug`,
//           value: slug,
//         })
//     }
//   }
// };


// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark(filter: {frontmatter: { type: { eq: "member"}}}) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve(`./src/templates/member.js`),
//           context: {
//             // Data passed to context is available in page queries as GraphQL variables.
//             slug: node.fields.slug,
//           },
//         })
//       })
//       resolve()
//     })

//     graphql(`
//       {
//         allMarkdownRemark(filter: {frontmatter: { type: { eq: "service"}}}) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve(`./src/templates/service.js`),
//           context: {
//             // Data passed to context is available in page queries as GraphQL variables.
//             slug: node.fields.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// };