var request = require('request-promise');

var isProduction = process.env.NODE_ENV === 'production';
var config;
if (!isProduction) {
  config = require('../config');
} else {
  config = {};
  config.client_id = process.env.client_id;
  config.client_secret = process.env.client_secret;
}

exports.getArtist = function(req, res, next) {
  var createRequest = (url, access_token) => {
    var options = {
      url: url,
      method: "GET",
      headers: {
        access_token: access_token
      }
    }

    return options;
  };

  var access_token = req.headers.authorization;
  var root_url = 'https://api.spotify.com/v1';
  var id = req.params.id;

  var p1 = request(createRequest(`${root_url}/artists/${id}`, access_token));
  var p2 = request(createRequest(`${root_url}/artists/${id}/top-tracks?country=US`, access_token));
  var p3 = request(createRequest(`${root_url}/artists/${id}/albums`, access_token));
  var p4 = request(createRequest(`${root_url}/artists/${id}/related-artists`, access_token));

  Promise.all([p1, p2, p3, p4])
    .then(results => {
      var parsedData = results.map(result => {
        return JSON.parse(result);
      });
      res.send(parsedData)
    })
    .catch(err => {
      res.send(err);
    });
}

exports.getArtists = function(req, res, next) {
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
