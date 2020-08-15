const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');

// exports.frontendTopics = (req, res) => {
//   // res.render('front/front', {
//   //   title: 'FrontEnd Stuff'
//   // });
//   res.send(req.params);
// };

exports.topics = async (req, res) => {
  const topic = req.params.topic;
  let articles;



  switch (topic) {
    case 'HTML':
    await HTMLModel.showAllArticles().then(article => {
      console.log('(TopicController)HERE ARE THE ARTICLES for HTML', article);
      articles = article;
      // res.render('topicTemplates/topic', {
      //   title: topic,
      //   articles: articles
      // });
    })
      break;
    case 'CSS':
    await CSSModel.showAllArticles().then(article => {
      console.log('(TopicController)HERE ARE THE ARTICLES for CSS', article);
      articles = article;
      // res.send(articles);
      // res.render('topicTemplates/topic', {
      //   title: topic,
      //   articles: articles
      // });
    })
      break;
    case 'Javascript':
    await JsModel.showAllArticles().then(article => {
      console.log('(TopicController)HERE ARE THE ARTICLES for JS', article);
      articles = article;
      // res.render('topicTemplates/topic', {
      //   title: topic,
      //   articles: articles
      // });
    })
      break;
    case 'Python':
    await PythonModel.showAllArticles().then(article => {
      console.log('(TopicController) Here are the articles for PYTHON', article);
      articles = article;
      // res.render('topicTemplates/topic', {
      //   title: topic,
      //   articles: articles
      // });
    })
      break;
    case 'PHP':
    await PhpModel.showAllArticles().then(article => {
      console.log('(TopicController) Here are the articles for PHP', article);
      articles = article;
      // res.render('topicTemplates/topic', {
      //   title: topic,
      //   articles: articles
      // });
    })
      break;
      case 'NodeJS':
      await NodeModel.showAllArticles().then(article => {
        console.log('(TopicController) Here are the articles for NODE', article);
        articles = article;
        // res.render('topicTemplates/topic', {
        //   title: topic,
        //   articles: articles
        // });
      })
        break;
        case 'Ruby':
        await RubyModel.showAllArticles().then(article => {
          console.log('(TopicController) Here are the articles for RUBY', article);
          articles = article;
          // res.render('topicTemplates/topic', {
          //   title: topic,
          //   articles: articles
          // });
        })
          break;
    default:
    res.json({
      err: 404,
      msg: 'Create database for topic',
      topic
    })
  }
  res.render('topicTemplates/topic', {
    title: topic,
    articles: articles
  })
};
