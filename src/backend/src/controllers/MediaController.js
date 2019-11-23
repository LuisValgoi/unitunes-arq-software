const MediaService = require("../services/MediaService");
const BaseController = require("./BaseController")(MediaService);

BaseController.getAllByUser = async function (req, res) {
  return MediaService.getAllByUser(req, res);
};

BaseController.getContent = async function (req, res) {
  return MediaService.getContent(req, res);
};

BaseController.buy = async function (req, res) {
  return MediaService.buy(req, res);
};

BaseController.release = async function (req, res) {
  // TODO: Implement
};


module.exports = BaseController;

/*
getById               - retornar
getAll                - retornarTodas
getAllByUser          - retornarsAdquiridas
getContent            - executarConteudo
insert                - criar
update                - atualizar
delete                - remover
release               - disponibilizar
download              - baixar
buy                   - comprar
*/