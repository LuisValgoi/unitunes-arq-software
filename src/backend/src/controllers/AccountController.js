const AccountService = require('../services/AccountService');
const BaseController = require("./BaseController")(AccountService);

module.exports = BaseController;
