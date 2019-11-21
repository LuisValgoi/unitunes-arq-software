const express = require('express');
const routes = express.Router();
const AccountController = require('../controllers/AccountController');

routes.get("/", AccountController.getAll);
routes.get("/:id", AccountController.getById)
routes.post("/", AccountController.insert);
routes.delete("/:id", AccountController.remove);
routes.put("/:id", AccountController.update);

module.exports = routes;