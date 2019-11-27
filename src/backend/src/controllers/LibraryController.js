const LibraryService = require('../services/LibraryService');
const BaseController = require('./BaseController')(LibraryService);

BaseController.getAllByUser = async function (req, res) {
  try {
    let userId = req.user['_id'];
    let data = await LibraryService.getAllByUser(userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.getById = async function (req, res) {
  try {
    let userId = req.user['_id'];
    let mediaId = req.params.id;
    let data = await LibraryService.getById(userId, mediaId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;

/*
getAllByUser          - retornaMidiasCompradasPorUsuario
getById               - retornaUmaMidiaCompradaPorUsuario
*/