const mongoose = require('mongoose');

// Define Schema
const cssSchema = mongoose.Schema({
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
const Style = mongoose.model('cs', cssSchema);


exports.showAllArticles = async () => {
  let articles;
  await Style.find({}, (err, article) => {
    if (err) {
      console.log('(CSSModel) ERROR FINDING DATA ---> ', err);
      articles = false;
    } else {
      articles = article;
    }
  })
  return articles;
};
