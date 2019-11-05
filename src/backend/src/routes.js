const express = require("express");
const UniversityController = require("../src/controllers/UniversityController");

const routes = express.Router();

routes.get("/university", UniversityController.getAll);
routes.post("/university", UniversityController.insert);

module.exports = routes; 