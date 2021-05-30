const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');
const User = require('../models/user/user')
// Find all articles in a specific topic
exports.retrieveArticles = async (req, res) => {
  const topic = req.params.topic;

  switch (topic) {
    case 'HTML':
      HTMLModel.HtmlModel.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });
      // await HTMLModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController)HERE ARE THE ARTICLES for HTML',
      //     articles
      //   );
      //   res.send(articles);
      // });
      break;
    case 'CSS':
      await CSSModel.Style.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });

      //      ******* Before Fix *******
      // await CSSModel.showAllArticles().then(articles => {
      //   console.log('(TopicController)HERE ARE THE ARTICLES for CSS', articles);
      //   res.send(articles);
      // })
      break;
    case 'Javascript':
      await JsModel.Js.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });
      // await JsModel.showAllArticles().then((articles) => {
      //   console.log('(TopicController)HERE ARE THE ARTICLES for JS', articles);
      //   res.send(articles);
      // });
      break;
    case 'Python':
      await PythonModel.Python.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });
      // await PythonModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for PYTHON',
      //     articles
      //   );
      //   res.send(articles);
      // });
      break;
    case 'PHP':
      await PhpModel.Php.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });
      // await PhpModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for PHP',
      //     articles
      //   );
      //   res.send(articles);
      // });
      break;
    case 'NodeJS':
      await NodeModel.Node.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });
      // await NodeModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for NODE',
      //     articles
      //   );
      //   res.send(articles);
      // });
      break;
    case 'Ruby':
      await RubyModel.Ruby.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.send(articles);
        }
      });
      // await RubyModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for RUBY',
      //     articles
      //   );
      //   res.send(articles);
      // });
      break;
    default:
      res.redirect(404, 'http://localhost:5000');
  }
};
// Find one article by its uid
exports.getOneArticle = async (req, res) => {
  const id = req.params.id;
  const topic = req.params.topic;
  console.log('THIS IS THE PARAMS FOR GET ONE ARTICLE --> ', id, topic);

  switch (topic) {
    case 'HTML':
      await HTMLModel.HtmlModel.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      // await HTMLModel.getOneArticle(id).then(article => {
      //     res.json(article);
      // })
      break;
    case 'CSS':
      await CSSModel.Style.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      //    ******* BEFORE FIX *******
      // await CSSModel.getOneArticle(id).then(article => {
      //     res.json(article);
      // })
      break;
    case 'Javascript':
      await JsModel.Js.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      // await JsModel.getOneArticle(id).then((article) => {
      //   res.json(article);
      // });
      break;
    case 'Python':
      await PythonModel.Python.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      // await PythonModel.getOneArticle(id).then((article) => {
      //   res.json(article);
      // });
      break;
    case 'PHP':
      await PhpModel.Php.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      // await PhpModel.getOneArticle(id).then((article) => {
      //   res.json(article);
      // });
      break;
    case 'NodeJS':
      await NodeModel.Node.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      // await NodeModel.getOneArticle(id).then((article) => {
      //   res.json(article);
      // });
      break;
    case 'Ruby':
      await RubyModel.Ruby.find({ _id: id }, (err, article) => {
        if (!err) {
          res.json(article);
        }
      });
      // await RubyModel.getOneArticle(id).then((article) => {
      //   res.json(article);
      // });
      break;
    default:
      res.redirect(404, 'http://localhost:5000');
  }
};

exports.getUserArticles = async (req,res) => {
  const thisUser = req.params.user;
        await User.find({username: thisUser}, (err, retArticle) => {
          if (!err) {
            const articles = retArticle;
            res.send(articles);
          }
        });
}