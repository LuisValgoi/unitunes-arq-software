const Album = require('../models/Album');
const BaseService = require("./BaseService")(Album);

BaseService.getNewAlbuns = async function () {
  //TODO: implementar logica
};

BaseService.getRecentAlbuns = async function () {
  //TODO: implementar logica
};

module.exports = BaseService;