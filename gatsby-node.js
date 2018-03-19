


// <<<<<<< HEAD
// const path = require('path')
// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const member_template = path.resolve(`src/templates/member.js`);

//     // Query for english member nodes to use in creating pages.
//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(filter: {
//               frontmatter: {
//                 type: { eq: "member"},
//                 langKey:{ eq: "en"}
//               },
//             }) {
//               edges {
//                 node {
//                   frontmatter {
//                     path
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors);
//         }
//         // Create pages for each markdown file.
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//           const path = node.frontmatter.path;
//           createPage({
//             path,
//             component: member_template,
//             // If you have a layout component at src/layouts/blog-layout.js
//             layout: `en`,
//             // In your blog post template's graphql query, you can use path
//             // as a GraphQL variable to query for data from the markdown file.
//             context: {
//               path,
//             },
//           });
//         });
//       })
//     );

//      // Query for Arabic member nodes to use in creating pages.
//      resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(filter: {
//               frontmatter: {
//                 type: { eq: "member"},
//                 langKey:{ eq: "ar"}
//               },
//             }) {
//               edges {
//                 node {
//                   frontmatter {
//                     path
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors);
//         }
//         // Create pages for each markdown file.
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//           const path = node.frontmatter.path;
//           createPage({
//             path,
//             component: member_template,
//             // If you have a layout component at src/layouts/blog-layout.js
//             layout: `ar`,
//             // In your blog post template's graphql query, you can use path
//             // as a GraphQL variable to query for data from the markdown file.
//             context: {
//               path,
//             },
//           });
//         });
//       })
//     );

    
//   });
// };







// // const _ = require('lodash')
// // const Promise = require('bluebird')
// // const path = require('path')
// // const select = require('unist-util-select')
// // const fs = require('fs-extra')

// // exports.createPages = ({ graphql, boundActionCreators }) => {
// //   const { createPage } = boundActionCreators

// //   return new Promise((resolve, reject) => {
// //     const pages = []
// //     const blogPost = path.resolve('./src/templates/member.en.js')
// =======
// // const path = require('path')
// // // Implement the Gatsby API “createPages”. This is called once the
// // // data layer is bootstrapped to let plugins create pages from data.
// // exports.createPages = ({ boundActionCreators, graphql }) => {
// //   const { createPage } = boundActionCreators;

// //   return new Promise((resolve, reject) => {
// //     const member_template = path.resolve(`src/templates/member.js`);

// //     // Query for english member nodes to use in creating pages.
// >>>>>>> migrated TEAMX2018 to this folder
// //     resolve(
// //       graphql(
// //         `
// //           {
// <<<<<<< HEAD
// //             allMarkdownRemark(
// //                 limit: 1000
// //                 filter: {
// //                 frontmatter: { type: { eq: "member" } },
// //                 frontmatter: { langKey: { eq: "en" } }
// //                 },
// //             ) {
// =======
// //             allMarkdownRemark(filter: {
// //               frontmatter: {
// //                 type: { eq: "member"},
// //                 langKey:{ eq: "en"}
// //               },
// //             }) {
// >>>>>>> migrated TEAMX2018 to this folder
// //               edges {
// //                 node {
// //                   frontmatter {
// //                     path
// <<<<<<< HEAD
// //                     langKey
// =======
// >>>>>>> migrated TEAMX2018 to this folder
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         `
// //       ).then(result => {
// //         if (result.errors) {
// <<<<<<< HEAD
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
// =======
// //           reject(result.errors);
// //         }
// //         // Create pages for each markdown file.
// //         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// //           const path = node.frontmatter.path;
// //           createPage({
// //             path,
// //             component: member_template,
// //             // If you have a layout component at src/layouts/blog-layout.js
// //             layout: `en`,
// //             // In your blog post template's graphql query, you can use path
// //             // as a GraphQL variable to query for data from the markdown file.
// //             context: {
// //               path,
// //             },
// //           });
// //         });
// //       })
// //     );

// //      // Query for Arabic member nodes to use in creating pages.
// //      resolve(
// //       graphql(
// //         `
// //           {
// //             allMarkdownRemark(filter: {
// //               frontmatter: {
// //                 type: { eq: "member"},
// //                 langKey:{ eq: "ar"}
// //               },
// //             }) {
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
// //           reject(result.errors);
// //         }
// //         // Create pages for each markdown file.
// //         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// //           const path = node.frontmatter.path;
// //           createPage({
// //             path,
// //             component: member_template,
// //             // If you have a layout component at src/layouts/blog-layout.js
// //             layout: `ar`,
// //             // In your blog post template's graphql query, you can use path
// //             // as a GraphQL variable to query for data from the markdown file.
// //             context: {
// //               path,
// //             },
// //           });
// //         });
// //       })
// //     );

    
// //   });
// // };







// // // const _ = require('lodash')
// // // const Promise = require('bluebird')
// // // const path = require('path')
// // // const select = require('unist-util-select')
// // // const fs = require('fs-extra')

// // // exports.createPages = ({ graphql, boundActionCreators }) => {
// // //   const { createPage } = boundActionCreators

// // //   return new Promise((resolve, reject) => {
// // //     const pages = []
// // //     const blogPost = path.resolve('./src/templates/member.en.js')
// // //     resolve(
// // //       graphql(
// // //         `
// // //           {
// // //             allMarkdownRemark(
// // //                 limit: 1000
// // //                 filter: {
// // //                 frontmatter: { type: { eq: "member" } },
// // //                 frontmatter: { langKey: { eq: "en" } }
// // //                 },
// // //             ) {
// // //               edges {
// // //                 node {
// // //                   frontmatter {
// // //                     path
// // //                     langKey
// // //                   }
// // //                 }
// // //               }
// // //             }
// // //           }
// // //         `
// // //       ).then(result => {
// // //         if (result.errors) {
// // //           console.log(result.errors)
// // //           reject(result.errors)
// // //         }

// // //         // Create blog posts pages.
// // //         _.each(result.data.allMarkdownRemark.edges, edge => {
// // //           createPage({
// // //             path: edge.node.frontmatter.path,
// // //             component: blogPost,
// // //             context: {
// // //               path: edge.node.frontmatter.path,
// // //             },
// // //           })
// // //         })
// // //       })
// // //     )
// // //   })
// // // }
// >>>>>>> migrated TEAMX2018 to this folder
