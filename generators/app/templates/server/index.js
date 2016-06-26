'use strict'

var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const PORT = process.env.NODE_ENV !== 'production' ? 3000 : process.env.NODE_ENV
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});



app.listen(PORT, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", PORT);
});
