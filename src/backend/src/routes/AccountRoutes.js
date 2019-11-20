const express = require('express');
const routes = express.Router();
const UniversityController = require('../controllers/UniversityController');

routes.get("/", UniversityController.getAll);
routes.delete("/:id", UniversityController.remove);

module.exports = routes; 