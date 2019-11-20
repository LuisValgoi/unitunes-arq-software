const express = require('express');
const routes = express.Router();
const MovimentationController = require('../controllers/MovimentationController');

routes.get("/", MovimentationController.getAll);
routes.post("/", AcademicController.insert);
routes.get("/:id", AcademicController.getById);
routes.put("/:id", AcademicController.update);

module.exports = routes; 