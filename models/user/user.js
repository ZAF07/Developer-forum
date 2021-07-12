const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const python = require('../backendTopics/pythonModel');
const User = new Schema({
  articles: [python.pythonSchema],
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
