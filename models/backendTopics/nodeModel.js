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

// Get all Article
exports.showAllArticles = async () => {
  let articles;
  await Node.find({}, (err, article) => {
    if (err) {
      console.log('(NodeModel) ERROR FINDING ARTICLES ---> ', err);
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
  await Node.find({_id:id}, (err, returnedArticle) => {
    if (err) {
      console.log('(NodeModel FindOne error) ---> ', err);
      article = 'error haha';
    } else {
      article = returnedArticle;
    }
  })
} catch (err) {
  console.log('(Catch Error NodeModel FindOne) ---> ', err);
  article = 'Catch Error ---> ' + err;
}
return article;
})

// Save Article
exports.saveArticle = async (req, res) => {

  console.log(req.body);
  const articleRecieved = new Node ({
    title: req.body.title,
    article: req.body.content
  });

  await articleRecieved.save((err, article) => {
    if (!err) {
      res.redirect('/')
    } else {
      res.send(err.message)
    }
  })
}