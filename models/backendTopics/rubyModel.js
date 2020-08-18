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

exports.showAllArticles = async () => {
  let articles;
  await Ruby.find({}, (err, article) => {
    if (err) {
      console.log('(RubyModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};


// Get one Article
exports.getOneArticle = (async (id) => {
  let article;
  
  try {
    await Ruby.find({_id:id}, (err, returnedArticle) => {
      if (err) {
        console.log('(RubyModel FindOne error) ---> ', err);
        article = 'error haha';
      } else {
        article = returnedArticle;
      }
    })
  } catch (err) {
    console.log('(Catch Error RubyModel FindOne) ---> ', err);
    article = 'Catch Error ---> ' + err;
  }
  return article;
  })