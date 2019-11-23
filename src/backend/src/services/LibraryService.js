const FavoriteService = require('./FavoriteService');
const MediaService = require('./MediaService');

module.exports = {
  async getAllByUser (req, res) {
    try {
      const { userId } = req.params;

      let favorites = await FavoriteService._getAllByUser(req, res);
      let medias = await MediaService._getAllByUser(req, res);
      // TODO: Get all albums by user

      let response = {
        'medias': medias,
        'albums': null,
        'favorites': favorites
      }
      return res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  }
}