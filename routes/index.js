
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Research at Texas A&amp;M University', body_class: 'home' })
};

