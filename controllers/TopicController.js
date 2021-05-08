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
      JsModel.Js.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });
      //   await JsModel.showAllArticles().then((articles) => {
      //     console.log('(TopicController)HERE ARE THE ARTICLES for JS', articles);
      //     res.render('topicTemplates/topic', {
      //       title: topic,
      //       articles: articles,
      //     });
      //   });
      break;
    case 'Python':
      PythonModel.Python.find({}, (err, retArticle) => {
        if (!err) {
          console.log('TOPICCONTROLLER LINE 92 ', retArticle);
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });
      //   await PythonModel.showAllArticles().then((articles) => {
      //     console.log(
      //       '(TopicController) Here are the articles for PYTHON',
      //       articles
      //     );
      //     res.render('topicTemplates/topic', {
      //       title: topic,
      //       articles: articles,
      //     });
      //   });
      break;
    case 'PHP':
      PhpModel.Php.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });
      // await PhpModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for PHP',
      //     articles
      //   );
      //   res.render('topicTemplates/topic', {
      //     title: topic,
      //     articles: articles,
      //   });
      // });
      break;
    case 'NodeJS':
      NodeModel.Node.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });
      // await NodeModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for NODE',
      //     articles
      //   );
      //   res.render('topicTemplates/topic', {
      //     title: topic,
      //     articles: articles,
      //   });
      // });
      break;
    case 'Ruby':
      RubyModel.Ruby.find({}, (err, retArticle) => {
        if (!err) {
          const articles = retArticle;
          res.render('topicTemplates/topic', {
            title: topic,
            link: `http://localhost:5000/topic/${topic}/article/`,
            articles,
          });
        }
      });
      // await RubyModel.showAllArticles().then((articles) => {
      //   console.log(
      //     '(TopicController) Here are the articles for RUBY',
      //     articles
      //   );
      //   res.render('topicTemplates/topic', {
      //     title: topic,
      //     articles: articles,
      //   });
      // });
      break;
    default:
      res.redirect(404, 'http://localhost:5000');
  }
};

exports.specificArticle = (req, res) => {
  const topic = req.params.topic;
  const id = req.params.id;
  console.log('IDDEEEE ', id);

  switch (topic) {
    case 'HTML':
      HTMLModel.HtmlModel.findById(id, (err, retArticle) => {
        if (!err) {
          const article = retArticle;
          console.log(
            'THIS IS RETURNED ARTICLE FROM, TOPICCONTROLLER',
            retArticle
          );
          res.render('topicTemplates/specificArticle', {
            title: 'Specific Article',
            topic,
            id,
            article,
            h: article,
          });
        } else {
          console.log('Error -> ', err);
        }
      });
      break;
    case 'CSS':
      CSSModel.Style.findById(id, (err, retArticle) => {
        if (!err) {
          const article = retArticle;
          console.log(
            'THIS IS RETURNED ARTICLE FROM, TOPICCONTROLLER',
            retArticle
          );
          res.render('topicTemplates/specificArticle', {
            title: 'Specific Article',
            topic,
            id,
            article,
          });
        } else {
          console.log('Error -> ', err);
        }
      });
      break;
    case 'Javascript':
      JsModel.Js.findById(id, (err, retArticle) => {
        if (!err) {
          const article = retArticle;
          console.log(
            'THIS IS RETURNED ARTICLE FROM, TOPICCONTROLLER',
            retArticle
          );
          res.render('topicTemplates/specificArticle', {
            title: 'Specific Article',
            topic,
            id,
            article,
            h: article,
          });
        } else {
          console.log('Error -> ', err);
        }
      });
      break;
    case 'PHP':
      // await PhpModel.showAllArticles().then((articles) => {
      PhpModel.Php.findById(id, (err, retArticle) => {
        console.log(
          '(TopicController) Here are the articles for PHP',
          retArticle
        );
        const article = retArticle;
        res.render('topicTemplates/specificArticle', {
          title: 'Specific Article',
          topic,
          id,
          article,
          h: article,
        });
      });
      break;
    case 'NodeJS':
      // await NodeModel.showAllArticles().then((articles) => {
      NodeModel.Node.findById(id, (err, retArticle) => {
        console.log(
          '(TopicController) Here are the articles for NODE',
          retArticle
        );
        const article = retArticle;
        res.render('topicTemplates/specificArticle', {
          title: 'Specific Article',
          topic,
          id,
          article,
          h: article,
        });
      });
      break;
    case 'Ruby':
      // await RubyModel.showAllArticles().then((articles) => {
      RubyModel.Ruby.findById(id, (err, retArticle) => {
        console.log(
          '(TopicController) Here are the articles for RUBY',
          retArticle
        );
        const article = retArticle;
        res.render('topicTemplates/specificArticle', {
          title: 'Specific Article',
          topic,
          id,
          article,
          h: article,
        });
      });
      break;
    case 'Python':
      // await RubyModel.showAllArticles().then((articles) => {
      PythonModel.Python.findById(id, (err, retArticle) => {
        console.log(
          '(TopicController) Here are the articles for RUBY',
          retArticle
        );
        const article = retArticle;
        res.render('topicTemplates/specificArticle', {
          title: 'Specific Article',
          topic,
          id,
          article,
          h: article,
        });
      });
      break;
    default:
      break;
  }
};

// So far it only saves into the ruby model
// Success message not showing , then redirect to home page or something
exports.saveThisArticle = (req, res) => {
  const title = req.body.topic.toLowerCase();
  console.log(`this is lower case ${title}`);
  // console.log(res.send(req.params));
  // RubyModel.saveArticle(req.body.title, req.body.content).then((response) => {
  //   console.log('Hello', response);
  //   if (response) {
  //     console.log('error', err);
  //   } else {
  //     console.log('Succeed');
  //   }
  //   res.redirect('/');
  // });

  let articleRecieved;

  switch (title) {
    case 'css':
      articleRecieved = new CSSModel.Style({
        title: req.body.title,
        article: req.body.content,
      });
      break;
    case 'html':
      articleRecieved = new HTMLModel.HtmlModel({
        title: req.body.title,
        article: req.body.content,
      });
      break;
    case 'javascript':
      articleRecieved = new JsModel.Js({
        title: req.body.title,
        article: req.body.content,
      });
      break;
    case 'node':
      articleRecieved = new NodeModel.Node({
        title: req.body.title,
        article: req.body.content,
      });
      break;
    case 'php':
      articleRecieved = new PhpModel.Php({
        title: req.body.title,
        article: req.body.content,
      });
      break;
    case 'ruby':
      articleRecieved = new RubyModel.Ruby({
        title: req.body.title,
        article: req.body.content,
      });
      break;
    case 'python':
      articleRecieved = new PythonModel.Python({
        title: req.body.title,
        article: req.body.content,
      });
      break;

    default:
      break;
  }

  articleRecieved.save((err) => {
    if (!err) {
      res.status(200).redirect('/');
      return;
    }
    res.status(400).send('err.message');
    ha = err.message;
  });
};
