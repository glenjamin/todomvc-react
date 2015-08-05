var path = require('path');

var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/css/base.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'node_modules/todomvc-common/base.css'));
});
app.get('/css/index.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'node_modules/todomvc-app-css/index.css'));
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
