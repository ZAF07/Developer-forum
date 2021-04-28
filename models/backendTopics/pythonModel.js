const mongoose = require('mongoose');

// Define Schema
const pythonSchema = mongoose.Schema({
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

exports.Python = mongoose.model('python', pythonSchema);

// exports.showAllArticles = async () => {
//   let articles;
//   await Python.find({}, (err, article) => {
//     if (err) {
//       console.log('(PythonModel) ERROR FINDING ARTICLES ---> ', err);
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
//     await Python.find({_id:id}, (err, returnedArticle) => {
//       if (err) {
//         console.log('(PythonModel FindOne error) ---> ', err);
//         article = 'error haha';
//       } else {
//         article = returnedArticle;
//       }
//     })
//   } catch (err) {
//     console.log('(Catch Error PythonModel FindOne) ---> ', err);
//     article = 'Catch Error ---> ' + err;
//   }
//   return article;
//   })
