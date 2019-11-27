const Library = require('../models/Library');
const BaseService = require('./BaseService')(Library);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };
  let data = await Library.find(query);

  return data;
};

BaseService.getById = async function (userId, mediaId) {
  let query = { 'user': userId, 'media': mediaId };
  let data = await Library.find(query);

  return data;
};

module.exports = BaseService;