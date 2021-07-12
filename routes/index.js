const express = require('express');
const router = express.Router();
const axios = require('axios');
const RootController = require('../controllers/RootController');
const TopicController = require('../controllers/TopicController');
const RubyController = require('../models/backendTopics/rubyModel');
const passport = require('passport');

router.get('/', RootController.homePage);
router.get('/sign-in', RootController.signIn);
router.get('/sign-up', RootController.signUp);

router.get('/createarticle', RootController.createArticle);
router.get('/profile', RootController.profilePage);

router.get('/:subject', RootController.frontOrBack);

router.post('/createarticle/:topic', TopicController.saveThisArticle);

router.post('/register', RootController.register);

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/sign-up' }),
  RootController.login
);

router.post('/logout', RootController.logout);

module.exports = router;
