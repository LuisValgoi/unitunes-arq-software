const express = require('express');
const routes = express.Router();
const auth = require('../middleware/auth');
const LibraryController = require('../controllers/LibraryController');

routes.get('/:id', auth, LibraryController.getById);
routes.get('/', auth, LibraryController.getAllByUser);

module.exports = routes;