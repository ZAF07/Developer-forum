const mongoose = require('mongoose');

// Define Schema
const javascriptSchema = mongoose.Schema({
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
const Js = mongoose.model('js', javascriptSchema);


exports.showAllArticles = async () => {
  let articles;
  await Js.find({}, (err, article) => {
    if (err) {
      console.log('(JSModel) ERROR FINDING DATA ---> ', err);
      articles = false;
    } else {
      articles = article;
    }
  })
  return articles;
};
