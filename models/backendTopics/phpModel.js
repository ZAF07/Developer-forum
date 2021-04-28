const mongoose = require('mongoose');

// Define Schema
const phpSchema = mongoose.Schema({
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

exports.Php = mongoose.model('php', phpSchema);
// let articles;
// exports.showAllArticles = async () => {
//   await Php.find({}, (err, article) => {
//     if (err) {
//       console.log('(PhpModel) ERROR FINDING ARTICLES ---> ', err);
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
//     await Php.find({_id:id}, (err, returnedArticle) => {
//       if (err) {
//         console.log('(PhpModel FindOne error) ---> ', err);
//         article = 'error haha';
//       } else {
//         article = returnedArticle;
//       }
//     })
//   } catch (err) {
//     console.log('(Catch Error PhpModel FindOne) ---> ', err);
//     article = 'Catch Error ---> ' + err;
//   }
//   return article;
//   })
