const express = require('express');
const routes = express.Router();
const AcademicController = require('../controllers/AcademicController');

routes.get('/', AcademicController.getAll);
routes.get('/:id', AcademicController.getById);
routes.post('/', AcademicController.insert);
routes.put('/:id', AcademicController.update);
routes.delete('/:id', AcademicController.remove);

module.exports = routes; 