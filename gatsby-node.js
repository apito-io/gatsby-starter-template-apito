// const path = require('path');

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   // Define a template for blog post
//   // const articleCard = path.resolve('./src/components/article-card.js');

//   const result = await graphql(`
    
//       posts {
//         id
//       }
    
//   `);

//   console.log('data', data);

//   // if (result.errors) {
//   //   reporter.panicOnBuild(
//   //     `There was an error loading your apito articles`,
//   //     result.errors
//   //   );

//   //   return;
//   // }

//   // const articles = result.data.posts;

//   // if (articles.length > 0) {
//   //   articles.forEach((article) => {
//   //     createPage({
//   //       path: `/article/${article.slug}`,
//   //       component: articleCard,
//   //       context: {
//   //         slug: article.slug,
//   //       },
//   //     });
//   //   });
//   // }
// };
