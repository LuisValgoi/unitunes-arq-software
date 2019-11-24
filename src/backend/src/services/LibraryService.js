const FavoriteService = require('./FavoriteService');
const MediaService = require('./MediaService');

module.exports = {
  async getAllByUser(userId) {
    try {
      let favorites = await FavoriteService.getAllByUser(userId);
      let medias = await MediaService.getAllByUser(userId);
      // TODO: Get all albums by user

      return {
        'medias': medias,
        'albums': null,
        'favorites': favorites
      };
    } catch (e) {
      console.log("Reported Error:", e);
    }
  }
}