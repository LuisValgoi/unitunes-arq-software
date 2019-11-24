const Library = require('../models/Library');
const BaseService = require('./BaseService')(Library);

BaseService.getAllByUser = async function (userId) {
  try {
    let query = { 'user': userId };
    let data = await Library.find(query);

    return data;
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

module.exports = BaseService;