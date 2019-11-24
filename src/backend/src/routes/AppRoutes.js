const express = require('express');
const routes = express.Router();
const AppController = require('../controllers/AppController');

routes.get('/', AppController.root);
routes.post('/login', AppController.login);
routes.post('/logout', AppController.logout);

module.exports = routes; 