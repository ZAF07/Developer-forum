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

rubySchema.pre('save', () => {
  console.log('eee');
  next();
})

// Define Model
// Should just export this and make queries on the controllers instead
// exports.Ruby = mongoose.model('ruby', rubySchema);
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
// exports.saveArticle = async (title, article) => {
//   let saveResult;
//   const articleRecieved = new Ruby ({
//     title: title ,
//     article: article
//   });

  // ERROR WORKS BUT WHEN SAVED NOTHING RETURNED 


//    await articleRecieved.save((err,article) => {
//     if (!err) {
//       console.log('from ruby model save -> ', article);
//       saveResult = 'article';
//     } else {
//       console.log('fROM RUBY model not saved --> ', err);
      
//       saveResult = err ;
//      }
//   })
//   return saveResult;
// };

exports.saveArticle = async (req, res) => {
let ha;
  console.log(req.body);
  const articleRecieved = new Ruby ({
    title: req.body.title,
    article: req.body.content
  });

  await articleRecieved.save((err, article) => {
    if (!err) {
      res.redirect('/')
    } else {
      res.send(err.message)
      ha = err.message
    }
  })
}

// exports.saveArticle = async (title, article) => {

//   const articleRecieved = new Ruby ({
//         title,
//         article
//       });

//   await articleRecieved.save((err, book) => {
//     if (!err) {
//       return book
//     } else {
//       return err
//     }
//   });
  
// }

