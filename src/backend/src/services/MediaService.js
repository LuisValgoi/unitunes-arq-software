const Media = require('../models/Media');
const MovimentationService = require('./MovimentationService');
const BaseService = require('./BaseService')(Media);

BaseService.getAllReleased = async function () {
  try {
    let query = { 'isAvailable': true };

    return await Media.find(query).select(['-content', '-image']);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getAllByUser = async function (userId) {
  try {
    let mediaIds = await MovimentationService.getMediasRefsByUser(userId);
    let query = { '_id': { '$in:': mediaIds } };
    let data = await Media.find(query).select(['-content', '-image'])

    return data;
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getById = async function (id) {
  try {
    return await Media.findById(id).select(['-content', '-image'])
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getContent = async function (id) {
  try {
    return await Media.findById(id).select(['content', 'image']);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.release = async function (id) {
  try {
    let fieldToUpdated = { 'isAvailable': true };
    let payload = { $set: fieldToUpdated };

    return await Media.findByIdAndUpdate(id, payload, { new: true, useFindAndModify: false });
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.download = async function (id) {
  try {
    return await Media.findById(id).select('content');
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.buy = async function (id) {
  try {
    // TODO : add into movimentation
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

module.exports = BaseService;