const AlbumService = require('../services/AlbumService');
const BaseController = require('./BaseController')(AlbumService);

BaseController.getAllNews = async function (req, res) {
  try {
    let data = await AlbumService.getAllNews();

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.getAllRecents = async function (req, res) {
  try {
    let data = await AlbumService.getAllRecents();

    return res.json(data);
  } catch (e) {
    
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

module.exports = BaseController;