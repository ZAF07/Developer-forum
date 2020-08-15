const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');


exports.topics = async (req, res) => {
  const topic = req.params.topic;
  let articles;

  const toRender = async () => {
    switch (topic) {
      case 'HTML':
      await HTMLModel.showAllArticles().then(article => {
        console.log('(TopicController)HERE ARE THE ARTICLES for HTML', article);
        articles = article;
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
          case 'Ruby':
          await RubyModel.showAllArticles().then(article => {
            console.log('(TopicController) Here are the articles for RUBY', article);
            articles = article;
          })
            break;
      default:
      res.json({
        err: 404,
        msg: 'Create database for topic',
        topic
      })
    }
  }

  await toRender().then(()=> {
    res.render('topicTemplates/topic', {
      title: topic,
      articles: articles
    })
  })
};
