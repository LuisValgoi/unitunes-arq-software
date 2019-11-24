const Favorite = require('../models/Favorite');
const BaseService = require('./BaseService')(Favorite);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };

  return await Favorite.find(query);
};

module.exports = BaseService;