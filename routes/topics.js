const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/TopicController')

router.get('/article/:topic/:id', TopicController.specificArticle);

router.get('/:topic', TopicController.topics);

module.exports = router;
