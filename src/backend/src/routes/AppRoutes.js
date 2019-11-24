const express = require('express');
const routes = express.Router();
const AppController = require('../controllers/AppController');

routes.get('/', AppController.root);
routes.post('/login', AppController.loginPost);
routes.get('/login', AppController.loginGet);
routes.post('/logout', AppController.logout);

module.exports = routes; 