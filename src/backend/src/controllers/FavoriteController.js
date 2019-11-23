const FavoriteService = require('../services/FavoriteService');
const BaseController = require('./BaseController')(FavoriteService);

BaseController.getAllByUser = async function (req, res) {
  return FavoriteService.getAllByUser(req, res);
};

module.exports = BaseController;

/*
getById               - retornar
getAllByUser          - retornaFavoritosPorUsuario
insert                - criar
update                - atualizar
delete                - remover
*/