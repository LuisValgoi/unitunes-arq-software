const express = require('express');
const routes = express.Router();
const LibraryController = require('../controllers/LibraryController');

const auth = require('../middleware/auth');

routes.get('/:id', auth, LibraryController.getById);
routes.get('/', auth, LibraryController.getAllByUser);

module.exports = routes;