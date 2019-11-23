const Media = require('../models/Media');
const MovimentationService = require('./MovimentationService');
const BaseService = require('./BaseService')(Media);

BaseService.getAll = async function () {
  try {
    let query = { 'isAvailable': true };

    return await Media.find(query).select(['-content', '-image']);
  } catch (e) {
    console.log(Media, e);
  }
};

BaseService.getAllByUser = async function (userId) {
  try {
    let mediaIds = await MovimentationService.getMediasByUser(userId);
    let query = { '_id': { '$in:': mediaIds } };

    return await Media.find(query).select(['-content', '-image']);
  } catch (e) {
    console.log(Media, e);
  }
};

BaseService.getById = async function (id) {
  try {
    return await Media.findById(id).select(['-content', '-image'])
  } catch (e) {
    console.log(Media, e);
  }
};

BaseService.getContent = async function (id) {
  try {
    return await Media.findById(id).select(['content', 'image']);
  } catch (e) {
    console.log(Media, e);
  }
};

BaseService.release = async function (id) {
  try {
    let fieldToUpdated = { 'isAvailable': true };
    let update = { $set: fieldToUpdated };

    return await Entity.findByIdAndUpdate(id, update);
  } catch (e) {
    console.log(Media, e);
  }
};

BaseService.download = async function (id) {
  try {
    return await Media.findById(id).select('content');
  } catch (e) {
    console.log(Media, e);
  }
};

BaseService.buy = async function (id) {
  try {
    // TODO : add into movimentation
  } catch (e) {
    console.log(Media, e);
  }
};

module.exports = BaseService;