const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');

router.get('/:topic', ApiController.retrieveArticles);

// Route to get specific article from database
router.get('/:topic/:id', ApiController.getOneArticle);

module.exports = router;
