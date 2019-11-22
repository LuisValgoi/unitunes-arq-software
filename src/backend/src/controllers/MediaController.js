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

module.exports = BaseController;

/*
getById     - retornarMidia
getAll      - retornarTodasMidias
xxxxxx      - retornarMidiasAdquiridas
getContent  - executarConteudo
insert      - criarMidia
update      - atualizarMidia
delete      - removerMidia
xxxxxx      - disponibilizarMidia
xxxxxx      - deletarMidia
download    - baixarMidia
buy         - comprarMidia
*/