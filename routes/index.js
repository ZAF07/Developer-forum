const express = require('express');
const router = express.Router();
const axios = require('axios');
const RootController = require('../controllers/RootController');

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

router.get('/sign', RootController.signUp);

// router.get('/create', function(req, res) {
//   res.render('roots/create', {
//     title: 'Create Article Page'
//   })
// });
router.get('/create', RootController.createArticle);

module.exports = router;
