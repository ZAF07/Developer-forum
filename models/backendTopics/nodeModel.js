const mongoose = require('mongoose');

// Define Schema
const nodeSchema = mongoose.Schema({
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

const Node = mongoose.model('node', nodeSchema);
let articles;
exports.showAllArticles = async () => {
  await Node.find({}, (err, article) => {
    if (err) {
      console.log('(NodeModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};
