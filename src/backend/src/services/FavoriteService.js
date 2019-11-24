const Favorite = require('../models/Favorite');
const BaseService = require('./BaseService')(Favorite);

BaseService.getAllByUser = async function (userId) {
  try {
    let query = { 'user': userId };

    return await Favorite.find(query);
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

module.exports = BaseService;