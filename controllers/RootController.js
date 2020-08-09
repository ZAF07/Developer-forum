exports.homePage = (req, res) => {
  res.render('rootsTemplates/home.ejs', {
    title: 'Web Dev Forum',
   });
};

exports.signUp = (req, res) => {
  res.render('rootsTemplates/sign', {
    title: 'Sign Up Page'
  });
};

exports.createArticle = (req, res) => {
  res.render('rootsTemplates/create', {
    title: 'Create Article Page'
  });
};

exports.frontOrBack = (req,res, next) => {
  if (req.params.subject == 'frontend') {
    res.render('subjectTemplate/subjects', {
      title: 'FrontEnd Stuff',
      subject: 'FrontEnd',
      subjectLink: 'FRONT',
      topics: ['HTML', 'CSS', 'Javascript']
    });
  } else if (req.params.subject == 'backend') {
    res.render('subjectTemplate/subjects', {
      title: 'BackEnd Stuff',
      subject: 'BackEnd',
      subjectLink: 'BACK',
      topics: ['Python', 'PHP', 'NodeJS', 'Ruby']
    })
  } else {
    res.redirect('/');
  }
};
