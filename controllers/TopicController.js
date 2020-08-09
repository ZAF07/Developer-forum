exports.frontendTopics = (req, res) => {
  // res.render('front/front', {
  //   title: 'FrontEnd Stuff'
  // });
  res.send(req.params);
};

exports.topics = (req, res) => {
  const topic = req.params.topic;

  res.render('topicTemplates/topic', {
    title: req.params.topic
  });

};
