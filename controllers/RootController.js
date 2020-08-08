exports.homePage = (req, res) => {
  res.render('roots/home.ejs', {
    title: 'Web Dev Forum',
   });
};

exports.signUp = (req, res) => {
  res.render('roots/sign', {
    title: 'Sign Up Page'
  });
};

exports.createArticle = (req, res) => {
  res.render('roots/create', {
    title: 'Create Article Page'
  });
};
