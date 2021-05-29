const passport = require('passport');
const User = require('../models/user/user');

exports.homePage = (req, res) => {
  const userExists = req.user;
  console.log(`homepage ${userExists}`);
  res.render('rootsTemplates/home.ejs', {
    title: 'Web Dev Forum',
    userExists: userExists,
  });
};

exports.signIn = (req, res) => {
  const userExists = req.user;
  console.log(`signup ${userExists}`);
  const d = new Date();
  const y = d.getFullYear();
  res.render('rootsTemplates/sign', {
    title: 'Sign In Page',
    year: y,
    userExists: userExists,
  });
};

exports.signUp = (req, res) => {
  const userExists = req.user;
  console.log(`signup ${userExists}`);
  const d = new Date();
  const y = d.getFullYear();
  res.render('rootsTemplates/sign-up', {
    title: 'Sign Up Here',
    year: y,
    userExists: userExists,
  });
};

exports.createArticle = (req, res) => {
  const userExists = req.user;
  console.log(` createArticle ${userExists}`);
  if (req.user) {
    res.render('rootsTemplates/create', {
      title: 'Create Article Page',
      userExists: userExists,
    });
    return;
  } else {
    res.redirect('/sign-in');
  }
};

exports.frontOrBack = (req, res, next) => {
  const userExists = req.user;
  console.log(`frontBack ${userExists}`);
  if (req.params.subject == 'frontend') {
    res.render('subjectTemplate/subjects', {
      title: 'FrontEnd Stuff',
      subject: 'FrontEnd',
      subjectLink: 'FRONT',
      topics: ['HTML', 'CSS', 'Javascript'],
      userExists: userExists,
    });
  } else if (req.params.subject == 'backend') {
    res.render('subjectTemplate/subjects', {
      title: 'BackEnd Stuff',
      subject: 'BackEnd',
      subjectLink: 'BACK',
      topics: ['Python', 'PHP', 'NodeJS', 'Ruby'],
      userExists: userExists,
    });
  } else {
    res.redirect('/');
  }
};

exports.profilePage = (req, res) => {
  const userExists = req.user;
  console.log(`profile ${userExists}`);
  res.render('rootsTemplates/profile', {
    title: 'Profile page',
    userExists: userExists,
  });
};

exports.login = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  res.render('rootsTemplates/profile', {
    user: user.username,
    title: user.username,
  });
  // passport.authenticate('local', (err, user, info) => {
  //   console.log('THIS IS USER_> ', user);
  //   if (!user) {
  //     return res.status(404).render('rootsTemplates/sign-up', {
  //       title: 'Sign Up Here',
  //       year: y,
  //       userExists: userExists,
  //       errMsg,
  //     });
  //   }
  //   res.redirect('/');
  // }),
  //   (req, res) => {};

  // // THIS ONE WORKS BUT STILL LEAVES COOKIE AND ALLOWS USERS TO CREATE ARTICLE
  // // Query DB to find if username exists
  // User.findOne({ username: req.body.username }, (err, found) => {
  //   // If user is found, go ahead and run login()and authenticate
  //   if (found) {
  //     console.log(` THIS IS FOUND ***** ---> ${found}`);
  //     req.login(found, (loginErr) => {
  //       // If loginError, redirect to login page
  //       console.log(`SOME LOGIN ERR ${loginErr}`);
  //       if (loginErr) {
  //         console.log('LOGIN ERROR --> ', loginErr);
  //         res.redirect('/login');
  //       } else {
  //         console.log('FOUNDDDDD');
  //         // Authenticate user and redirect to secrets page
  //         passport.authenticate('local', {
  //           failureRedirect: '/sign-up',
  //         })(req, res, () => {
  //           // if (authErr) {
  //           //   res.redirect('/');
  //           // }

  //           // on LogIn is where i set my session tokens and cookies
  //           console.log(`hahahaha ${err}`);
  //           // req.session.logged_in = user.username;
  //           // req.session.visited_times = 1;
  //           res.render('rootsTemplates/profile', {
  //             user: user.username,
  //             title: user.username,
  //           });
  //         });
  //       }
  //     });
  //   } else {
  //     console.log('nOOOOOOOO', err);
  //     // If no such user exists redirect to sign up page and prompt to register
  //     const errMsg = 'User not found. Please create a new account';
  //     const d = new Date();
  //     const y = d.getFullYear();
  //     const userExists = req.user;
  //     res.status(404).render('rootsTemplates/sign-up', {
  //       title: 'Sign Up Here',
  //       year: y,
  //       userExists: userExists,
  //       errMsg,
  //     });
  //   }
  // });
};

// exports.login = (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   req.login(user, (err) => {
//     // If error, redirect to login page
//     if (err) {
//       console.log('LOGIN ERROR --> ', err);
//       res.redirect('/login');
//     } else {
//       // Authenticate user and redirect to secrets page
//       passport.authenticate('local', {
//         successRedirect: '/profile',
//         failureRedirect: '/profile',
//       });
//     }
//   });
// };

exports.logout = (req, res) => {
  // Passport method to logout user
  // On log out is where i destroy all sessions and cookies
  // req.session.destroy(function (err) {
  //   // cannot access session here
  //   if (err) {
  //     console.log(`SESSION DESTRYO ERROR ${err}`);
  //     return;
  //   }
  // });
  // console.log(`USER -> ${req.user}`);
  // console.log(`SESSION -> ${req.session}`);
  res.clearCookie();
  req.logout();
  res.redirect('/');
};

exports.register = (req, res) => {
  const userExists = req.user;
  const d = new Date();
  const y = d.getFullYear();
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(`Passport error ${err}`);
        res.status(404).render('rootsTemplates/sign-up', {
          title: 'Sign Up Here',
          year: y,
          userExists: userExists,
          errMsg: err.message,
        });
      } else {
        console.log(`HERE IS PASSPORT ${req.user}`);
        passport.authenticate('local')(req, res, () => {
          res.redirect('/profile');
        });
      }
    }
  );
};
