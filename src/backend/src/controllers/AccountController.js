const AccountService = require('../services/AccountService');
const BaseController = require("./BaseController")(AccountService);

BaseController.addCredit = async function (req, res) {
  return AccountService.update(req, res);
};

BaseController.viewCredit = async function (req, res) {
  return AccountService.viewCredit(req, res);
};

module.exports = BaseController;

/*
getAll              - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
addCredit           - adicionarCredito
viewCredits         - visualizarCredito
remove              - excluir
*/