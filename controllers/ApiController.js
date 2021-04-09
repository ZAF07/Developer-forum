const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');

exports.retrieveArticles = async (req,res) => {
    const topic = req.params.topic;

    switch (topic) {
        case 'HTML':
        await HTMLModel.showAllArticles().then(articles => {
          console.log('(TopicController)HERE ARE THE ARTICLES for HTML', articles);
          res.send(articles);
        })
          break;
        case 'CSS':
        await CSSModel.showAllArticles().then(articles => {
          console.log('(TopicController)HERE ARE THE ARTICLES for CSS', articles);
          res.send(articles);
        })
          break;
        case 'Javascript':
        await JsModel.showAllArticles().then(articles => {
          console.log('(TopicController)HERE ARE THE ARTICLES for JS', articles);
          res.send(articles);
        })
          break;
        case 'Python':
        await PythonModel.showAllArticles().then(articles => {
          console.log('(TopicController) Here are the articles for PYTHON', articles);
          res.send(articles);
        })
          break;
        case 'PHP':
        await PhpModel.showAllArticles().then(articles => {
          console.log('(TopicController) Here are the articles for PHP', articles);
          res.send(articles);
        })
          break;
          case 'NodeJS':
          await NodeModel.showAllArticles().then(articles => {
            console.log('(TopicController) Here are the articles for NODE', articles);
            res.send(articles);
          })
            break;
            case 'Ruby':
            await RubyModel.showAllArticles().then(articles => {
              console.log('(TopicController) Here are the articles for RUBY', articles);
              res.send(articles);
            })
              break;
        default:
        res.redirect(404, 'http://localhost:5000')
      }
}

exports.getOneArticle = async (req, res) => {
    const id = req.params.id;
    const topic = req.params.topic;
    console.log('THIS IS THE PARAMS FOR GET ONE ARTICLE --> ', id, topic);


            switch (topic) {
                case 'HTML':
                    await HTMLModel.getOneArticle(id).then(article => {
                        res.json(article);
                    })
                  break;
                case 'CSS':
                    await CSSModel.getOneArticle(id).then(article => {
                        res.json(article);
                    })
                  break;
                case 'Javascript':
                    await JsModel.getOneArticle(id).then(article => {
                        res.json(article);
                    })
                  break;
                case 'Python':
                    await PythonModel.getOneArticle(id).then(article => {
                        res.json(article);
                    })
                  break;
                case 'PHP':
                    await PhpModel.getOneArticle(id).then(article => {
                        res.json(article);
                    })
                  break;
                  case 'NodeJS':
                    await NodeModel.getOneArticle(id).then(article => {
                        res.json(article);
                    })
                    break;
                    case 'Ruby':
                        await RubyModel.getOneArticle(id).then(article => {
                            res.json(article);
                        })
                      break;
                default:
                res.redirect(404, 'http://localhost:5000')
              }
};