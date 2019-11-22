const Album = require('../models/Album');
const BaseService = require("./BaseService")(Album);

BaseService.getNewAlbuns = async function () {
  //TODO: implementar logica
};

BaseService.getRecentAlbuns = async function () {
  //TODO: implementar logica
};

module.exports = BaseService;

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
