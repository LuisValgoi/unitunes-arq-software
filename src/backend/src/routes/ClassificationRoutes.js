const express = require('express');
const routes = express.Router();
const ClassificationController = require('../controllers/ClassificationController');

routes.get('/', ClassificationController.getAll);
routes.get('/:id', ClassificationController.getById);
routes.get('/media/:id', ClassificationController.getAllByMedia);
routes.get('/media/:id/score', ClassificationController.getScoreByMedia);
routes.post('/', ClassificationController.insert);
routes.delete('/:id', ClassificationController.remove);

module.exports = routes;