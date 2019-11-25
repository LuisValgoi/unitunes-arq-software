const Media = require('../models/Media');
const MovimentationService = require('./MovimentationService');
const LibraryService = require('./LibraryService');
const BaseService = require('./BaseService')(Media);

BaseService.getAllReleased = async function () {
  let query = { 'isAvailable': true };
  return await Media.find(query).select(['-content', '-image']);
};

BaseService.getById = async function (id) {
  return await Media.findById(id).select(['-content', '-image'])
};

BaseService.getContent = async function (id) {
  return await Media.findById(id).select(['content', 'image']);
};

BaseService.release = async function (id) {
  let fieldToUpdated = { 'isAvailable': true, 'isAvailableSince': new Date() };
  let payload = { $set: fieldToUpdated };

  return await Media.findByIdAndUpdate(id, payload, { new: true, useFindAndModify: false });
};

BaseService.download = async function (id) {
  return await Media.findById(id).select('content');
};

BaseService.buy = async function (movimentation) {
  let result = await MovimentationService.insert(movimentation);

  await LibraryService.insert({
    'user': movimentation['buyer'],
    'media': movimentation['media']
  });

  return result;
};

module.exports = BaseService;