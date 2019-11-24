const Movimentation = require('../models/Movimentation');
const AccountService = require('./AccountService');
const UserService = require('./UserService');
const BaseService = require('./BaseService')(Movimentation);

BaseService.getAllByAccount = async function (DTO) {
  Object.keys(DTO).forEach((key) => (!DTO[key]) && delete DTO[key]);
  let query = Object.assign({}, DTO);

  if (query['fromDate'] && query['toDate'])
    query['createdAt'] = { '$gte': query['fromDate'], '$lt': query['toDate'] }

  return await Movimentation.find(query);
};

BaseService.getAllBySeller = async function (userId) {
  let query = { 'seller': userId };

  return await Movimentation.find(query);
};

BaseService.generateReceipt = async function (id) {
   // TODO: Implement
};

BaseService.insert = async function (model) {
  let value = model['value'];
  _validateAmount(value);

  let buyer = await UserService.getById(model['buyer']);
  let account = await AccountService.getById(buyer['account']);
  _validateFunds(account['currentAmount'], value);

  let admin = await UserService.getAdminSystem();
  let seller = await UserService.getById(model['seller']);

  await AccountService.addCredit(seller['account'], _getSellerAmount(value));
  await AccountService.addCredit(admin['account'], _getAdminAmount(value));
  await AccountService.addCredit(buyer['account'], - Math.abs(value));

  return await Movimentation.create(model);
};

function _validateAmount(value) {
  if (value <= 0) {
    throw new Error({ error: 'UnexistenceAmount' });
  }
}

function _validateFunds(currentAmount, value) {
  if (currentAmount < value)
    throw new Error('InsufficientFundsException');
}

function _getSellerAmount(value) {
  return value * 0.90;
}

function _getAdminAmount(value) {
  return value * 0.10;
}

module.exports = BaseService;