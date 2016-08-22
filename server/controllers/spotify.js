var request = require('request');

var isProduction = process.env.NODE_ENV === 'production';
var config;
if (!isProduction) {
  config = require('../config');
} else {
  config = {};
  config.client_id = process.env.client_id;
  config.client_secret = process.env.client_secret;
}

exports.spotifyAuth = function(req, res, next) {
  var client_id = config.client_id;
  var client_secret = config.client_secret;

  var authorization = new Buffer(client_id + ':' + client_secret).toString('base64');

  var options = {
    url: 'https://accounts.spotify.com/api/token',
    method: "POST",
    headers: {
      authorization: `Basic ${authorization}`
    },
    form: {
      grant_type: 'client_credentials'
    }
  }

  request(options, function(err, response, body) {
    if (err) return err;

    var spotifyData = JSON.parse(body);
    res.send(spotifyData);
  });
}
