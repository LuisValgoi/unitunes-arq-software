const express = require('express');
const routes = express.Router();
const LibraryController = require('../controllers/LibraryController');

routes.get('/:id', LibraryController.getById);
routes.get('/user/:id', LibraryController.getAllByUser);

module.exports = routes;