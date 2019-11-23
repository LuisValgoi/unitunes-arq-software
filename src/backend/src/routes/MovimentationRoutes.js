const express = require('express');
const routes = express.Router();
const MovimentationController = require('../controllers/MovimentationController');

// TODO: This API should return all the movimentations of a particular account?
// TODO: Check because does not look good
routes.get('/account/:id', MovimentationController.getAllByAccount);
routes.post('/', MovimentationController.insert);
routes.get('/:id', MovimentationController.getById);
routes.put('/:id', MovimentationController.update);

module.exports = routes; 