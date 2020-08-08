const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/TopicController')

router.get('/:topic', TopicController.topics)

module.exports = router;
