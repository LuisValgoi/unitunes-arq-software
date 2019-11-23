const AccountService = require('../services/AccountService');
const BaseController = require("./BaseController")(AccountService);

BaseController.addCredit = async function () {
  // TODO: Implement
};

BaseController.viewCredits = async function () {
  // TODO: Implement
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