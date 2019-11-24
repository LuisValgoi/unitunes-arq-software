const Movimentation = require('../models/Movimentation');
const AccountService = require('./AccountService');
const UserService = require('./UserService');
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

BaseService.insert = async function (model) {
  try {
    if (model['amount'] > 0) {
      let buyer = UserService.getById(model['buyer'])
      let account = await AccountService.getById(buyer['account'])

      if (account['currentAmount'] < model['amount'])
        throw new Error('InsufficientFundsException');

      let admin = await UserService.getAdminSystem()
      let seller = await UserService.getById(model['seller'])

      let sellerValue = model['amount'] * 0.70;
      let adminValue = model['amount'] - seller;

      await AccountService.update(seller['account'], sellerValue);
      await AccountService.update(admin['account'], adminValue)
      await AccountService.update(buyer['account'], - Math.abs(model['amount']))
    }

    return await Movimentation.create(model);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

module.exports = BaseService;