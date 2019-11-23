const express = require('express');
const routes = express.Router();
const LibraryController = require('../controllers/LibraryController');

routes.get('/user/:id', LibraryController.getAllByUser);

module.exports = routes;