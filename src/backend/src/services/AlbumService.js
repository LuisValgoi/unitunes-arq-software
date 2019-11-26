const Album = require('../models/Album');
const BaseService = require('./BaseService')(Album);

const DateHelper = require('../util/DateHelper');
const QueryHelper = require('../util/QueryHelper');

BaseService.getAllNews = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 40);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);
  let albums = await Album.find(query);
  return albums;
};

BaseService.getAllRecents = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 60);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);
  let albums = await Album.find(query);
  return albums;
};

module.exports = BaseService;