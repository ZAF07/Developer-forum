const mongoose = require('mongoose');

// Define Schema
const javascriptSchema = mongoose.Schema({
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
exports.Js = mongoose.model('js', javascriptSchema);

// exports.showAllArticles = async () => {
//   let articles;
//   await Js.find({}, (err, article) => {
//     if (err) {
//       console.log('(JSModel) ERROR FINDING DATA ---> ', err);
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
//     await Js.find({_id:id}, (err, returnedArticle) => {
//       if (err) {
//         console.log('(JsModel FindOne error) ---> ', err);
//         article = 'error haha';
//       } else {
//         article = returnedArticle;
//       }
//     })
//   } catch (err) {
//     console.log('(Catch Error JsModel FindOne) ---> ', err);
//     article = 'Catch Error ---> ' + err;
//   }
//   return article;
//   })
