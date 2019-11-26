const Media = require('../models/Media');
const MovimentationService = require('./MovimentationService');
const LibraryService = require('./LibraryService');
const BaseService = require('./BaseService')(Media);

const DateHelper = require('../util/DateHelper');
const QueryHelper = require('../util/QueryHelper');

BaseService.getAllReleased = async function () {
  let query = { 'isAvailable': true };
  return await Media.find(query).select(['-content', '-image']);
};

BaseService.getAllNews = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 60);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);

  return await Media.find(query);
};

BaseService.getAllRecents = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 60);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);

  return await Media.find(query);
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
  let data = await MovimentationService.insert(movimentation);

  await LibraryService.insert({
    'user': movimentation['buyer'],
    'media': movimentation['media']
  });

  return data;
};

module.exports = BaseService;