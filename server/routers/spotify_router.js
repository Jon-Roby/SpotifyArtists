const express = require('express');
const router = express.Router();

const spotify = require('../controllers/spotify');

router.get('/', spotify.spotifyAuth);

module.exports = router;
