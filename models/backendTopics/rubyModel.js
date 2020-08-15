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

exports.saveNewArticle = async (title, article, createBy) => {
  let noErr = true;

  const newArticle = new Ruby({
    title: title,
    article: article,
    createdBy: createBy
  });

  try {
    await newArticle.save((err) => {
      console.log('(Ruby Model) Trying to save this ---> ', title,article);
      if (err) {
        console.log('(RubyModel saveNewArticle)ERROR TRYING TO SAVE NEW ARTICLE ---> ', err);
        noErr = err.message
      }
    })
    return noErr;
  } catch (e) {
    console.log('(Catch(e)) ---> ', e);
  }
};
