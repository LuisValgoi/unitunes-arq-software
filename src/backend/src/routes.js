const express = require("express");
const UniversityController = require("../src/controllers/UniversityController");

const routes = express.Router();

routes.get("/university", UniversityController.getAll);
routes.get("/university/:id", UniversityController.getById);
routes.post("/university", UniversityController.insert);
routes.put("/university/:id", UniversityController.update);
routes.delete("/university/:id", UniversityController.remove);

module.exports = routes; 