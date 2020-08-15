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

exports.saveNewArticle = async (title, article, createBy) => {
  let noErr = true;

  const newArticle = new HtmlModel({
    title: title,
    article: article,
    createdBy: createBy
  });

  try {
    await newArticle.save((err) => {
      console.log('(HTML Model) Trying to save this ---> ', title,article);
      if (err) {
        console.log('(HTMLModel saveNewArticle)ERROR TRYING TO SAVE NEW ARTICLE ---> ', err);
        noErr = err.message
      }
    })
    return noErr;
  } catch (e) {
    console.log('(Catch(e)) ---> ', e);
  }
};
