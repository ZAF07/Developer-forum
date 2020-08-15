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

exports.showAllArticles = async () => {
  let articles;
  await Php.find({}, (err, article) => {
    if (err) {
      console.log('(PhpModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};

exports.saveNewArticle = async (title, article, createBy) => {
  let noErr = true;

  const newArticle = new Php({
    title: title,
    article: article,
    createdBy: createBy
  });

  try {
    await newArticle.save((err) => {
      console.log('(Php Model) Trying to save this ---> ', title,article);
      if (err) {
        console.log('(PhpModel saveNewArticle)ERROR TRYING TO SAVE NEW ARTICLE ---> ', err);
        noErr = err.message
      }
    })
    return noErr;
  } catch (e) {
    console.log('(Catch(e)) ---> ', e);
  }
};
