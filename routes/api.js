const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');

router.get('/:topic', ApiController.retrieveArticles);

module.exports = router;