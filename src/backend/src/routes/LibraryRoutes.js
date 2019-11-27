const express = require('express');
const routes = express.Router();
const LibraryController = require('../controllers/LibraryController');

const auth = require('../middleware/auth');

routes.get('/medias/:id', auth, LibraryController.getById);
routes.get('/medias/user/:id', auth, LibraryController.getAllByUser);

module.exports = routes;