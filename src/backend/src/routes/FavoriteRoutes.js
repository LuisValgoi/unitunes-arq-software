const express = require('express');
const routes = express.Router();
const auth = require('../middleware/auth');
const FavoriteController = require('../controllers/FavoriteController');

routes.get('/', auth, FavoriteController.getAll);
routes.get('/user/:id', auth, FavoriteController.getAllByUser);
routes.get('/:id', auth, FavoriteController.getById);
routes.post('/', auth, FavoriteController.insert);
routes.put('/:id', auth, FavoriteController.update);
routes.delete('/:id', auth, FavoriteController.remove);

module.exports = routes;