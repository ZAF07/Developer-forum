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
      HTMLModel.HtmlModel.find({}, (err, retArticle) => {
        if (!err) {
          console.log('NO ERROR HERE ', retArticle);
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });
      // await HTMLModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController)HERE ARE THE ARTICLES for HTML',
      //     articles
      //   );
      //   // res.send(articles);
      //   res.render('topicTemplates/topic', {
      //     title: topic,
      //     articles: articles,
      //   });
      // });
      break;
    case 'CSS':
      CSSModel.Style.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });

      //          *******  THIS IS BEFORE THE FIX *******
      // await CSSModel.showAllArticles().then(articles => {
      //   console.log('(TopicController)HERE ARE THE ARTICLES for CSS', articles);
      //   // res.send(articles);
      //   res.render('topicTemplates/topic', {
      //     title: topic,
      //     articles: articles
      //   });
      // })
      break;
    case 'Javascript':
      await JsModel.showAllArticles().then((articles) => {
        console.log('(TopicController)HERE ARE THE ARTICLES for JS', articles);
        res.render('topicTemplates/topic', {
          title: topic,
          articles: articles,
        });
      });
      break;
    case 'Python':
      await PythonModel.showAllArticles().then((articles) => {
        console.log(
          '(TopicController) Here are the articles for PYTHON',
          articles
        );
        res.render('topicTemplates/topic', {
          title: topic,
          articles: articles,
        });
      });
      break;
    case 'PHP':
      await PhpModel.showAllArticles().then((articles) => {
        console.log(
          '(TopicController) Here are the articles for PHP',
          articles
        );
        res.render('topicTemplates/topic', {
          title: topic,
          articles: articles,
        });
      });
      break;
    case 'NodeJS':
      await NodeModel.showAllArticles().then((articles) => {
        console.log(
          '(TopicController) Here are the articles for NODE',
          articles
        );
        res.render('topicTemplates/topic', {
          title: topic,
          articles: articles,
        });
      });
      break;
    case 'Ruby':
      await RubyModel.showAllArticles().then((articles) => {
        console.log(
          '(TopicController) Here are the articles for RUBY',
          articles
        );
        res.render('topicTemplates/topic', {
          title: topic,
          articles: articles,
        });
      });
      break;
    default:
      res.redirect(404, 'http://localhost:5000');
  }
};

exports.specificArticle = (req, res) => {
  const topic = req.params.topic;
  const id = req.params.id;

  HTMLModel.HtmlModel.find({ _id: id }, (err, retArticle) => {
    if (!err) {
      const article = retArticle;
      res.render('topicTemplates/specificArticle', {
        title: 'Specific Article',
        topic,
        id,
        article,
        h: article.title,
      });
    }
  });
};

// So far it only saves into the ruby model
// Success message not showing , then redirect to home page or something
exports.saveThisArticle = (req, res) => {
  // res.send(req.params)
  RubyModel.saveArticle(req.body.title, req.body.content).then((response) => {
    console.log('Hello', response);
    if (response) {
      console.log('error', err);
    } else {
      console.log('Succeed');
    }
    res.redirect('/');
  });
};

// exports.saveThisArticleNode = NodeModel.saveArticle;
// exports.saveThisArticleRuby = RubyModel.saveArticle;

exports.savethisArticle;
