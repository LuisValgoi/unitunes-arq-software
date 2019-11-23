const express = require('express');
const routes = express.Router();
const UniversityController = require('../controllers/UniversityController');

routes.get('/', UniversityController.getAll);
routes.get('/:id', UniversityController.getById);
routes.post('/', UniversityController.insert);
routes.put('/:id', UniversityController.update);
routes.delete('/:id', UniversityController.remove);

module.exports = routes; 