const AlbumService = require('../services/AlbumService');
const BaseController = require('./BaseController')(AlbumService);

BaseController.getNewAlbuns = async function (req, res) {
  try {
    let data = await AlbumService.getNewAlbuns();

    return res.json(data);
  } catch (e) {
    console.log("Reported Error:", e);
    res.status(500).send(e);
  }
};

BaseController.getRecentAlbuns = async function (req, res) {
  try {
    let data = await AlbumService.getRecentAlbuns();

    return res.json(data);
  } catch (e) {
    console.log("Reported Error:", e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;