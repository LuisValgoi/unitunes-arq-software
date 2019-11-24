const FavoriteService = require('../services/FavoriteService');
const BaseController = require('./BaseController')(FavoriteService);

BaseController.getAllByUser = async function (req, res) {
  try {
    let userId = req.params.id;
    let data = await FavoriteService.getAllByUser(userId);

    return res.json(data);
  } catch (e) {
    console.log("Reported Error:", e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;

/*
getById               - retornar
getAllByUser          - retornaFavoritosPorUsuario
insert                - criar
update                - atualizar
delete                - remover
*/