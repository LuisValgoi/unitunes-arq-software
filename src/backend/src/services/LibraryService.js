const Library = require('../models/Library');
const BaseService = require('./BaseService')(Library);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };
  let data = await Library.find(query);

  return data;
};

BaseService.removeMedia = async function (mediaId, userId) {
  let query = { 'user': userId };

  return await Library.update(query, { $pull: { 'media': { '_id': mediaId }}} );
};

BaseService.insertMedia = async function (media, userId) {
  let query = { 'user': userId };

  return await Library.update(query, { $push: { 'media': media }} );
};


module.exports = BaseService;