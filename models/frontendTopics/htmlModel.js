const mongoose = require('mongoose');

// Define Schema

const htmlSchema = mongoose.Schema({
  title: {
    type: String,
    required: [1, 'Title not given!']
  },
  article: {
    type: String,
    required: [1, 'Article body is required!']
  },
  createdBy: String
});

// Define a Model
const HtmlModel = mongoose.model('html', htmlSchema);

// Exports Model

// Show all articles

exports.showAllArticles = async () => {
  let articlesArr;
  try {
    await HtmlModel.find({}, (err,articles) => {
      articlesArr = articles;
      console.log('(CSS MODEL) THIS IS THE SEARCH RESULTS ---> ', articles);
    })
  } catch (e) {
    console.log('(HTML-MODEL) ERROR FINDING ALL POSTS-----> ', e);
  } finally {
    return articlesArr
  }
};


// Get one Article
exports.getOneArticle = (async (id) => {
  let article;
  
  try {
    await HtmlModel.find({_id:id}, (err, returnedArticle) => {
      if (err) {
        console.log('(HtmlModel FindOne error) ---> ', err);
        article = 'error haha';
      } else {
        article = returnedArticle;
      }
    })
  } catch (err) {
    console.log('(Catch Error HtmlModel FindOne) ---> ', err);
    article = 'Catch Error ---> ' + err;
  }
  return article;
  })