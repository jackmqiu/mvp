const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
const bodyParser = require('body-parser');
const users = require('./db');

const compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
app.use(express.static(__dirname + '/../www'));
// app.get('/', function(req, res){
//   res.status(200).sendFile('index');
// })
app.get('/home', function(req, res) {
  users.selectAll().then((data) => {
    res.status(200).json(data);
  }).catch(err => res.sendStatus(500));
});


const server = app.listen(3030, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
