const express = require('express');
const routes = express.Router();
const AcademicController = require('../controllers/AcademicController');
const AccountController = require('../controllers/AccountController');

routes.get("/", AcademicController.getAll);
routes.get("/:id", AcademicController.getById);
routes.get("/:id/account", AccountController.getByUserId);
routes.get("/:id/account/movimentations", AccountController.getMovimentationByUser);
routes.post("/", AcademicController.insert);
routes.put("/:id", AcademicController.update);
routes.put("/:id/account/update", AccountController.update);
routes.delete("/:id", AcademicController.remove);

module.exports = routes; 