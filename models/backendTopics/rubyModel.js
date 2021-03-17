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

  // Save Article
exports.saveArticle = (async (title, article) => {
  let saveResult;
  const articleRecieved = new Ruby ({
    title: title ,
    article: article
  });

  // ERROR WORKS BUT WHEN SAVED NOTHING RETURNED 
  await articleRecieved.save((err) => {
    if (!err) {
      saveResult = 'yAHOO';
      console.log('RUBY MODEL SAVED');
      
    } else {
      console.log('RUBY MODEL. Save error --> ', err);
      saveResult = err.message;
    }
    
  })


  return saveResult;
});