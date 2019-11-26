const Album = require('../models/Album');
const BaseService = require('./BaseService')(Album);
const DateHelper = require('../util/DateHelper');

BaseService.getAllNews = async function () {
  let query = DateHelper.getQueryConsideringGivenDays(40);
  let albums = await Album.find(query);
  return albums;
};

BaseService.getAllRecents = async function () {
  let query = DateHelper.getQueryConsideringGivenDays(60);
  let albums = await Album.find(query);
  return albums;
};



module.exports = BaseService;