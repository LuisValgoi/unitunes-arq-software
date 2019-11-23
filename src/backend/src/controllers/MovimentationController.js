const MovimentationService = require('../services/MovimentationService');
const BaseController = require("./BaseController")(MovimentationService);

BaseController.getAllByAccount = async function (req, res) {
  return MovimentationService.getAllByAccount(req, res);
};

BaseController.generateRecepit = async function (req, res) {
  // TODO: Implement
};


module.exports = BaseController;

/*
getAll              - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
remove              - excluir
generateRecepit     - emitirComprovante
*/