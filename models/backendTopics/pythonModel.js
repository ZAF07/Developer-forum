const mongoose = require('mongoose');

// Define Schema
const pythonSchema = mongoose.Schema({
  title: {
    type: String,
    required: [1, 'Title not given']
  },
  article: {
    type: String,
    required: [1, 'Article cannot be empty']
  },
  createdBy: String
});

// Define Model

const Python = mongoose.model('python', pythonSchema);

exports.showAllArticles = async () => {
  let articles;
  await Python.find({}, (err, article) => {
    if (err) {
      console.log('(PythonModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};
