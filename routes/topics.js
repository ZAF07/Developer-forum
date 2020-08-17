const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/TopicController')

router.get('/:topic', TopicController.topics);

router.get('/:topic/article/:id', TopicController.specificArticle);

module.exports = router;
