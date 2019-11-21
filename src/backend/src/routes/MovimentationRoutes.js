const express = require('express');
const routes = express.Router();
const MovimentationController = require('../controllers/MovimentationController');

routes.get("/account/:id", MovimentationController.getAll);
routes.post("/", MovimentationController.insert);
routes.get("/:id", MovimentationController.getById);
routes.put("/:id", MovimentationController.update);

module.exports = routes; 