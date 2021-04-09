const HTMLModel = require('../models/frontendTopics/htmlModel');
const CSSModel = require('../models/frontendTopics/cssModel');
const JsModel = require('../models/frontendTopics/javascriptModel');
const PythonModel = require('../models/backendTopics/pythonModel');
const PhpModel = require('../models/backendTopics/phpModel');
const NodeModel = require('../models/backendTopics/nodeModel');
const RubyModel = require('../models/backendTopics/rubyModel');

exports.homePage = (req, res) => {
  res.render('rootsTemplates/home.ejs', {
    title: 'Web Dev Forum',
   });
};

exports.signUp = (req, res) => {
  const d = new Date();
  const y = d.getFullYear();
  res.render('rootsTemplates/sign', {
    title: 'Sign In Page',
    year: y
  });
};

exports.createArticle = (req, res) => {
  res.render('rootsTemplates/create', {
    title: 'Create Article Page'
  });
};

exports.frontOrBack = (req,res, next) => {
  if (req.params.subject == 'frontend') {
    res.render('subjectTemplate/subjects', {
      title: 'FrontEnd Stuff',
      subject: 'FrontEnd',
      subjectLink: 'FRONT',
      topics: ['HTML', 'CSS', 'Javascript']
    });
  } else if (req.params.subject == 'backend') {
    res.render('subjectTemplate/subjects', {
      title: 'BackEnd Stuff',
      subject: 'BackEnd',
      subjectLink: 'BACK',
      topics: ['Python', 'PHP', 'NodeJS', 'Ruby']
    })
  } else {
    res.redirect('/');
  }
};

exports.createNewArticle = async (req,res) => {
  const topic = req.body.topic;
  let success = 'No Errors! Go on!';
  let error;

  switch (topic) {
    case 'Node':
    await NodeModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
      console.log('This is the result from the save function ---> ', noErr);
      if (noErr != 'true') {
        error = noErr;
      }
    });
      break;
      case 'PHP':
      await PhpModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
        console.log('This is the result from the save function ---> ', noErr);
        if (noErr != 'true') {
          error = noErr;
        }
      });
      break;
      case 'Python':
      await PythonModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
        console.log('This is the result from the save function ---> ', noErr);
        if (noErr != 'true') {
          error = noErr;
        }
      });
      break;
      case 'Ruby':
      await RubyModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
        console.log('This is the result from the save function ---> ', noErr);
        if (noErr != 'true') {
          error = noErr;
        }
      });
      break;
      case 'HTML':
      await HTMLModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
        console.log('This is the result from the save function ---> ', noErr);
        if (noErr != 'true') {
          error = noErr;
        }
      });
      break;
      case 'CSS':
      await CSSModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
        console.log('This is the result from the save function ---> ', noErr);
        if (noErr != 'true') {
          error = noErr;
        }
      });
      break;
      case 'Javascript':
      await JsModel.saveNewArticle(req.body.title, req.body.content).then(noErr => {
        console.log('This is the result from the save function ---> ', noErr);
        if (noErr != 'true') {
          error = noErr;
        }
      });
      break;
    default:
    res.redirect('/')
  }


  console.log('THIS IS ERRORRRR VARIABLE ----------> ', error);
  if (error != true) {
    res.json(error)
  } else {
    res.json(success);
  }
};
