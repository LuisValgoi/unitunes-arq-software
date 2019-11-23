const LibraryService = require('../services/LibraryService');
const BaseController = require('./BaseController')(LibraryService);

BaseController.getAllByUser = async function (req, res) {
  return LibraryService.getAllByUser(req, res);
};

module.exports = BaseController;

/*
getAllByUser          - retornaFavoritosPorUsuario
*/