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

router.get('/signup', RootController.signUp);

// router.get('/create', function(req, res) {
//   res.render('roots/create', {
//     title: 'Create Article Page'
//   })
// });
router.get('/createarticle', RootController.createArticle);

router.get('/:subject', RootController.frontOrBack);

// POST handler

router.post('/createarticle', (req,res) => {
  res.send(req.body)
  // Here i need to create a Model Controller to handle and save the data recieved
})

module.exports = router;
