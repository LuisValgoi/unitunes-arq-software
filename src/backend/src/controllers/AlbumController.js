const AlbumService = require('../services/AlbumService');
const BaseController = require('./BaseController')(AlbumService);

BaseController.getNewAlbuns = async function (req, res) {
  //TODO: implement
};

BaseController.getRecentAlbuns = async function (req, res) {
  //TODO: implement
};

module.exports = BaseController;

/*
getById         - Retornar album
getAll          - Retornar todos albuns
UI              - Executar album
insert          - Criar album 
delete          - Deletar album
update          - Atualizar albums
getNewAlbuns    - Retornar albuns novos
getRecentAlbuns - Retornar alguns recentes
*/
