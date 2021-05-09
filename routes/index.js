const express = require('express');
const router = express.Router();
const axios = require('axios');
const RootController = require('../controllers/RootController');
const TopicController = require('../controllers/TopicController');
const RubyController = require('../models/backendTopics/rubyModel');

/* GET home page. */
// router.get('/',  async function(req, res, next) {
//
//   res.render('roots/home.ejs', {
//     title: 'Web Dev Forum',
//    });
// });

router.get('/', RootController.homePage);

// router.get('/sign', function(req,res) {
//   res.render('roots/sign', {
//     title: 'Sign Up Page'
//   })
// });

router.get('/signin', RootController.signIn);
router.get('/sign-up', RootController.signUp);
// router.get('/create', function(req, res) {
//   res.render('roots/create', {
//     title: 'Create Article Page'
//   })
// });
router.get('/createarticle', RootController.createArticle);
router.get('/profile', RootController.profilePage);

router.get('/:subject', RootController.frontOrBack);

// POST handler

// router.post('/createarticle', (req,res) => {
//   res.send(req.body)
//   // Here i need to create a Model Controller to handle and save the data recieved
//   // Then show a page telling that saved successfully or not
// })

router.post('/createarticle/:topic', TopicController.saveThisArticle);

router.post('/register', RootController.register);
router.post('/login', RootController.login);
router.post('/logout', RootController.logout);

// router.post('/createarticle/:topic', (req,res) => {
//     const here = req.params.topic;

//     if (here === 'angel') {
//         TopicController.saveThisArticleNode()
//     } else {
//         res.send('nope')
//     }

// })

module.exports = router;
