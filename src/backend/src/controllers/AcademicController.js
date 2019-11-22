const AcademicService = require('../services/AcademicService');
const BaseController = require("./BaseController")(AcademicService);

BaseController.insert = async function (req, res) {
  return AcademicService.insert(req, res);
};

module.exports = BaseController;