const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');


exports.topics = async (req, res) => {
  const topic = req.params.topic;
  // let articles;
  //   RubyModel.Ruby.find({}, (err, article) => {
  //     if (!err) {
        
  //       res.render('topicTemplates/topic', {
  //         title: topic,
  //         articles: article
  //       })
  //     } else {
  //       res.status(404).send(err);
  //     }
  //   })
  switch (topic) {
    case 'HTML':
    await HTMLModel.showAllArticles().then(articles => {
      console.log('(TopicController)HERE ARE THE ARTICLES for HTML', articles);
      // res.send(articles);
      res.render('topicTemplates/topic', {
        title: topic,
        articles: articles
      });
    })
      break;
    case 'CSS':
    await CSSModel.showAllArticles().then(articles => {
      console.log('(TopicController)HERE ARE THE ARTICLES for CSS', articles);
      // res.send(articles);
      res.render('topicTemplates/topic', {
        title: topic,
        articles: articles
      });
    })
      break;
    case 'Javascript':
    await JsModel.showAllArticles().then(articles => {
      console.log('(TopicController)HERE ARE THE ARTICLES for JS', articles);
      res.render('topicTemplates/topic', {
        title: topic,
        articles: articles
      });
    })
      break;
    case 'Python':
    await PythonModel.showAllArticles().then(articles => {
      console.log('(TopicController) Here are the articles for PYTHON', articles);
      res.render('topicTemplates/topic', {
        title: topic,
        articles: articles
      })
        break;
      case 'CSS':
      await CSSModel.showAllArticles().then(article => {
        console.log('(TopicController)HERE ARE THE ARTICLES for CSS', article);
        articles = article;
      })
        break;
      case 'Javascript':
      await JsModel.showAllArticles().then(article => {
        console.log('(TopicController)HERE ARE THE ARTICLES for JS', article);
        articles = article;
      })
        break;
      case 'Python':
      await PythonModel.showAllArticles().then(article => {
        console.log('(TopicController) Here are the articles for PYTHON', article);
        articles = article;
      })
        break;
      case 'PHP':
      await PhpModel.showAllArticles().then(article => {
        console.log('(TopicController) Here are the articles for PHP', article);
        articles = article;
      })
        break;
        case 'NodeJS':
        await NodeModel.showAllArticles().then(article => {
          console.log('(TopicController) Here are the articles for NODE', article);
          articles = article;
        })
          break;
    default:
    res.redirect(404, 'http://localhost:5000')
  }

  await toRender().then(()=> {
    res.set('Content-Type', 'text/html');
    res.render('topicTemplates/topic', {
      title: topic,
      articles: articles
    })
  })
};

exports.specificArticle = (req, res) => {

  const topic = req.params.topic;
  const id = req.params.id;

  res.render('topicTemplates/specificArticle', {
    title: 'Specific Article',
    topic,
    id
  })
};

// So far it only saves into the ruby model 
// Success message not showing , then redirect to home page or something
exports.saveThisArticle = (req, res) => {

  // res.send(req.params)
  RubyModel.saveArticle(req.body.title, req.body.content).then(response => {
    console.log('Hello', response);
    if (response) {
      console.log('error', err);
    } else {
      console.log('Succeed');
    }
    res.redirect('/')
  });

};

// exports.saveThisArticleNode = NodeModel.saveArticle;
// exports.saveThisArticleRuby = RubyModel.saveArticle;

exports.savethisArticle

