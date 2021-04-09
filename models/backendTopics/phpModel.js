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
<<<<<<< HEAD
  let articles;
=======
>>>>>>> testhere
  await Php.find({}, (err, article) => {
    if (err) {
      console.log('(PhpModel) ERROR FINDING ARTICLES ---> ', err);
    } else {
      articles = article;
    }
  })
  return articles;
};

<<<<<<< HEAD
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
=======
// Get one Article
exports.getOneArticle = (async (id) => {
  let article;
  
  try {
    await Php.find({_id:id}, (err, returnedArticle) => {
      if (err) {
        console.log('(PhpModel FindOne error) ---> ', err);
        article = 'error haha';
      } else {
        article = returnedArticle;
      }
    })
  } catch (err) {
    console.log('(Catch Error PhpModel FindOne) ---> ', err);
    article = 'Catch Error ---> ' + err;
  }
  return article;
  })
>>>>>>> testhere
