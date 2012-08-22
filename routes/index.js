
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Texas A&amp;M Division of Research', body_class: 'home' })
};

