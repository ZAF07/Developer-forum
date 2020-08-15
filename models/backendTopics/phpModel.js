const mongoose = require('mongoose');

// Define Schema
const phpSchema = mongoose.Schema({
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

const Php = mongoose.model('php', phpSchema);
let articles;
exports.showAllArticles = async () => {
  await Php.find({}, (err, article) => {
    if (err) {
      console.log('(PhpModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};
