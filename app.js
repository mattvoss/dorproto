
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/water', function(req, res){
  res.render('water', { title: 'Water Desalination', body_class: 'water' })
});
app.get('/energy', function(req, res){
  res.render('energy', { title: 'Energy Article', body_class: 'energy' })
});
app.get('/light', function(req, res){
  res.render('light', { title: 'Light Article', body_class: 'light ' })
});
app.get('/tabs', function(req, res){
  res.render('tabs', { title: 'TABS Article', body_class: 'tabs' })
});
app.get('/obesity', function(req, res){
  res.render('obesity', { title: 'Slimming Down a Super Sized Nation', body_class: 'obesity' })
});
app.get('/styleguide', function(req, res){
  res.render('styleguide', { title: 'Style Guide', body_class: 'style guide' })
});
app.get('/funding', function(req, res){
  res.render('funding', { title: 'Funding', body_class: 'funding' })
});
app.get('/rovers', function(req, res){
  res.render('rovers', { title: 'Mars Rovers', body_class: 'rovers' })
});
app.get('/archive', function(req, res){
  res.render('archive', { title: 'Archive', body_class: 'archive' })
});
app.get('/search', function(req, res){
  res.render('search', { title: 'Search', body_class: 'search' })
});
app.get('/tag', function(req, res){
  res.render('tag', { title: 'Tag', body_class: 'tag' })
});
app.get('/hp3', function(req, res){
  res.render('hp3', { title: 'hp3', body_class: 'hp3 home' })
});
app.get('/hp2', function(req, res){
  res.render('hp2', { title: 'hp2', body_class: 'hp2 home' })
});
app.get('/hp1', function(req, res){
  res.render('hp1', { title: 'hp1', body_class: 'hp1 home' })
});
app.get('/news', function(req, res){
  res.render('news', { title: 'News', body_class: 'news' })
});
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
