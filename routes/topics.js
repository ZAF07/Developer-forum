const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/TopicController')

router.get('/topic/:topic/:id') // This should lead me to the specific article page

router.get('/:topic', TopicController.topics)

module.exports = router;
