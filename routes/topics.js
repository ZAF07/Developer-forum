const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/TopicController')

// Handles routing for displaying all articles for a specific topic
router.get('/:topic', TopicController.topics);

// Handles routing for displaying a specific aritcle for a topic
router.get('/:topic/article/:id', TopicController.specificArticle);

module.exports = router;
