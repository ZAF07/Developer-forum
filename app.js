const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/user/user');

const indexRouter = require('./routes/index');
const topicRouter = require('./routes/topics');
const databaseApi = require('./routes/api');

const app = express();

mongoose.connect('mongodb://localhost:27017/webdevforum', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log('this', __dirname);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/******* PASSPORT *******/
// Setting up Express-Session // !! IMPORTANT THAT SET-UP IS PLACED HERE !!
app.use(
  session({
    secret: 'littleSecretIsheredudee.',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy
passport.use(User.createStrategy());

// Reading and populate Cookies
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/database', databaseApi); // Only for REST

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, () =>
  console.log('Server running on port 5000 http://localhost:5000')
);

module.exports = app;
