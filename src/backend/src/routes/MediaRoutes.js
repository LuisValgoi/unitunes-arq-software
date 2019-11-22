const express = require('express');
const routes = express.Router();
const MediaController = require('../controllers/MediaController');

routes.get("/", MediaController.getAll);
routes.get("/user/:userId", MediaController.getAllByUser);
routes.get("/:id", MediaController.getById);
routes.post("/", MediaController.insert);
routes.put("/:id", MediaController.update);
routes.delete("/:id", MediaController.remove);
routes.get("/:id/content", MediaController.getContent);
routes.post("/:id/buy", MediaController.buy);

module.exports = routes;