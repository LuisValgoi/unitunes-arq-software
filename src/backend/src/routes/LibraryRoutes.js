const express = require('express');
const routes = express.Router();
const LibraryController = require('../controllers/LibraryController');

const auth = require('../middleware/auth');

routes.get('/medias/', auth, LibraryController.getAllByUser);
routes.get('/medias/:id', auth, LibraryController.getById);

module.exports = routes;