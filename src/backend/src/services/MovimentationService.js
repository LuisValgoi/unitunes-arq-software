const Movimentation = require('../models/Movimentation');
const BaseService = require('./BaseService')(Movimentation);

BaseService.getAllByAccount = async function (DTO) {
  try {
    Object.keys(DTO).forEach((key) => (!DTO[key]) && delete DTO[key]);
    let query = Object.assign({}, DTO);

    if (query['fromDate'] && query['toDate'])
      query['createdAt'] = { '$gte': query['fromDate'], '$lt': query['toDate'] }

    return await Movimentation.find(query);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getAllBySeller = async function (userId) {
  try {
    let query = { 'seller': userId };

    return await Movimentation.find(query);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.generateReceipt = async function (userId) {
  try {
    // TODO: Implement
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

module.exports = BaseService;