exports.frontendTopics = (req, res) => {
  // res.render('front/front', {
  //   title: 'FrontEnd Stuff'
  // });
  res.send(req.params);
};

exports.topics = (req, res) => {
  const topic = req.params.topic;

  if (topic == 'front') {
    
    res.render('topicTemplates/front', {
      title: 'FrontEnd Stuff'
    });

  } else if (topic == 'back') {
    

    res.render('topicTemplates/back', {
      title: 'BackEnd Stuff'
    });
  }

};
