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

exports.saveNewArticle = async (title, article, createBy) => {
  let noErr = true;

  const newArticle = new Style({
    title: title,
    article: article,
    createdBy: createBy
  });

  try {
    await newArticle.save((err) => {
      console.log('(CSS Model) Trying to save this ---> ', title,article);
      if (err) {
        console.log('(CSSModel saveNewArticle)ERROR TRYING TO SAVE NEW ARTICLE ---> ', err);
        noErr = err.message
      }
    })
    return noErr;
  } catch (e) {
    console.log('(Catch(e)) ---> ', e);
  }
};
