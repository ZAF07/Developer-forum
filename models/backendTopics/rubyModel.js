const mongoose = require('mongoose');

// Define Schema
const rubySchema = mongoose.Schema({
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

const Ruby = mongoose.model('ruby', rubySchema);
let articles;
exports.showAllArticles = async () => {
  Ruby.find({}, (err, article) => {
    if (err) {
      console.log('(RubyModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};
