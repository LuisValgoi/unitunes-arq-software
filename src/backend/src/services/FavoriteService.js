const Favorite = require('../models/Favorite');
const BaseService = require('./BaseService')(Favorite);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };

  return await Favorite.find(query);
};

BaseService.removeMedia = async function (mediaId, userId) {
  let query = { 'user': userId, 'media': mediaId };

  return await Favorite.deleteOne(query);
};

module.exports = BaseService;