const AcademicService = require('../services/AcademicService');
const BaseController = require("./BaseController")(AcademicService);

BaseController.authenticate = async function () {
  //TODO: implement
};

BaseController.recoverPassword = async function () {
  //TODO: implement
};

module.exports = BaseController;

/*
getAll              - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
remove              - deletar
authenticate        - autenticar
recoverPassword     - recuperarSenha
*/