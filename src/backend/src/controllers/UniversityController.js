const UniversityService = require('../services/UniversityService');
const BaseController = require("./BaseController")(UniversityService);

module.exports = BaseController;

/*
getAll            - retornarTodas
getById           - retornar
insert            - criar
update            - atualizar
remove            - deletar
*/