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
    console.log(e);
  }
};

BaseService.getMediasRefsByUser = async function (userId) {
  try {
    let query = { 'buyer': userId };
    return await Movimentation.find(query).select('medias');
  } catch (e) {
    console.log(e);
  }
};

BaseService.generateReceipt = async function (userId) {
  try {
    // TODO: Implement
  } catch (e) {
    console.log(e);
  }
};

module.exports = BaseService;