const MovimentationService = require('../services/MovimentationService');
const BaseController = require("./BaseController")(MovimentationService);

BaseController.getAllByAccount = async function (req, res) {
  return MovimentationService.getAllByAccount(req, res);
};

module.exports = BaseController;