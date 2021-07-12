const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');
const User = require('../models/user/user');


exports.topics = async (req, res) => {
  const topic = req.params.topic;
  const userExists = req.user;
res.render('topicTemplates/topic', { title: topic})
  
};

exports.specificArticle = (req, res) => {
  const topic = req.params.topic;
  const id = req.params.id;
  const userExists = req.user;
  console.log('TOPIC FROM SPECIFICARTICLE CONTROLLER --> ', topic);
  console.log('IDDEEEE ', id);
  res.render('topicTemplates/specificArticle', {
    title: 'Specific Article',
    topic,
    id,
    userExists: userExists,
  });
};

exports.saveThisArticle = (req, res) => {
  const user = req.user.username;
  console.log(`THIS IS THE REQUEST USER --> ${user}`);
  const topic = req.body.topic.toLowerCase();
  console.log(`this is lower case ${topic}`);

  // Variable to use to store new entries object
  let articleRecieved;
  let userRecieved;

  switch (topic) {
    case 'css':
      articleRecieved = new CSSModel.Style({
        title: req.body.title,
        article: req.body.content,
        topic: 'CSS'
      });
      userRecieved = new User 
      break;
    case 'html':
      articleRecieved = new HTMLModel.HtmlModel({
        title: req.body.title,
        article: req.body.content,
        topic: 'HTML',
        date: new Date()
      });
      break;
    case 'javascript':
      articleRecieved = new JsModel.Js({
        title: req.body.title,
        article: req.body.content,
        topic: 'Javascript'
      });
      break;
    case 'node':
      articleRecieved = new NodeModel.Node({
        title: req.body.title,
        article: req.body.content,
        topic: 'NodeJs'
      });
      break;
    case 'php':
      articleRecieved = new PhpModel.Php({
        title: req.body.title,
        article: req.body.content,
        topic: 'PHP'
      });
      break;
    case 'ruby':
      articleRecieved = new RubyModel.Ruby({
        title: req.body.title,
        article: req.body.content,
        topic: 'Ruby'
      });
      break;
    case 'python':
      articleRecieved = new PythonModel.Python({
        title: req.body.title,
        article: req.body.content,
        topic: 'Python',
        date: new Date()
      });

      userRecieved = new User({
        python_articles: articleRecieved,
      });
      break;

    default:
      break;
  }

    User.findOne({username: user}, (err, foundUser) => {
      console.log('FOUND USER ===> ', foundUser);
      foundUser.articles.push(articleRecieved)
      foundUser.save();
    })

  articleRecieved.save((err) => {
    if (!err) {
      res.status(200).redirect('/');
      return;
    }
    res.status(400).send('err.message');
    ha = err.message;
  });

};
