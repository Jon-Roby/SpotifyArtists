const express = require('express');
const artistsRouter = express.Router();

const artists = require('../controllers/artists');

artistsRouter.get('/:id', artists.getArtist);
artistsRouter.get('/', artists.getArtists);

module.exports = artistsRouter;
