const mongoose = require('mongoose');

// Define Schema
const cssSchema = mongoose.Schema({
  title: {
    type: String,
    required: [1, 'Title not given'],
  },
  article: {
    type: String,
    required: [1, 'Article cannot be empty'],
  },
  createdBy: String,
});

// Define Model
exports.Style = mongoose.model('cs', cssSchema);

// Finding all articles
// exports.showAllArticles = async () => {
//   let articles;
//   await Style.find({}, (err, article) => {
//     if (err) {
//       console.log('(CSSModel) ERROR FINDING DATA ---> ', err);
//       articles = false;
//     } else {
//       articles = article;
//     }
//   })
//   return articles;
// };

// // Get one Article
// exports.getOneArticle = (async (id) => {
//   let article;

//   try {
//     await Style.find({_id:id}, (err, returnedArticle) => {
//       if (err) {
//         console.log('(CssModel FindOne error) ---> ', err);
//         article = 'error haha';
//       } else {
//         article = returnedArticle;
//       }
//     })
//   } catch (err) {
//     console.log('(Catch Error CssModel FindOne) ---> ', err);
//     article = 'Catch Error ---> ' + err;
//   }
//   return article;
//   })
