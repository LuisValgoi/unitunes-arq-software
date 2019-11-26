const Album = require('../models/Album');
const BaseService = require('./BaseService')(Album);

BaseService.getAllNews = async function () {
  let query = getQueryConsideringGivenDays(40);
  let albums = await Album.find(query);
  return albums;
};

BaseService.getAllRecents = async function () {
  let query = getQueryConsideringGivenDays(60);
  let albums = await Album.find(query);
  return albums;
};

function calculateDate(date, days) {
  let dateCopied = new Date(date.getTime());
  let dateAdjusted = dateCopied.getDate() - days;
  dateCopied.setDate(dateAdjusted);

  return dateCopied;
}

function getQueryConsideringGivenDays(day) {
  let minDate = calculateDate(new Date(), day);
  let query = {
    createdAt: {
      $gte: minDate,
    }
  }
  return query;
}

module.exports = BaseService;