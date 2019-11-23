const express = require('express');
const routes = express.Router();
const AccountController = require('../controllers/AccountController');

routes.get("/", AccountController.getAll);
routes.get("/:id", AccountController.getById)
routes.post("/", AccountController.insert);
routes.delete("/:id", AccountController.remove);
routes.get("/:id/credit", AccountController.viewCredit);
routes.put("/:id/credit", AccountController.addCredit);

module.exports = routes;