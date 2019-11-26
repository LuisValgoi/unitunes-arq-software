const express = require('express');
const routes = express.Router();
const auth = require('../middleware/auth');
const ClassificationController = require('../controllers/ClassificationController');

routes.get('/', auth, ClassificationController.getAll);
routes.get('/:id', auth, ClassificationController.getById);
routes.get('/media/:id', auth, ClassificationController.getAllByMedia);
routes.get('/media/:id/score', auth, ClassificationController.getScoreByMedia);
routes.post('/', auth, ClassificationController.insert);
routes.delete('/:id', auth, ClassificationController.remove);

module.exports = routes;