var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var fallback = require('express-history-api-fallback');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var compression = require('compression');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var cacheTime = 86400000*7; // 7 days
var publicPath = path.resolve(__dirname, 'public');

var spotifyRouter = require('./server/routers/spotify_router');
var artistsRouter = require('./server/routers/artists_router');

if (isProduction) {
  app.use(compression());
  app.use(express.static(publicPath, { maxAge: cacheTime }));
}

app.use(cors());
app.use(bodyParser.json());

app.use('/api/spotify', spotifyRouter);
app.use('/api/artists', artistsRouter);

app.use(fallback('index.html', { root: publicPath }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
