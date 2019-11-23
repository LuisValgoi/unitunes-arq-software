const express = require('express');
const routes = express.Router();
const FavoriteController = require('../controllers/FavoriteController');

routes.get('/user/:userId', FavoriteController.getAllByUser);
routes.get('/:id', FavoriteController.getById);
routes.post('/', FavoriteController.insert);
routes.put('/:id', FavoriteController.update);
routes.delete('/:id', FavoriteController.remove);

module.exports = routes;