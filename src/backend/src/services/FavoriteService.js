const Favorite = require('../models/Favorite');
const BaseService = require('./BaseService')(Favorite);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };

  return await Favorite.find(query);
};

BaseService.removeMedia = async function (mediaId, userId) {
  let query = { 'user': userId };

  return await Favorite.update(query, { $pull: { 'media': { '_id': mediaId }}} );
};

BaseService.insertMedia = async function (media, userId) {
  let query = { 'user': userId };

  return await Favorite.update(query, { $push: { 'media': media }} );
};

module.exports = BaseService;