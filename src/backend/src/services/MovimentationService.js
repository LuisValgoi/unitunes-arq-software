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
    console.log('Reported Error:', e);
  }
};

BaseService.getAllBySeller = async function (userId) {
  try {
    let query = { 'seller': userId };

    return await Movimentation.find(query);
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.generateReceipt = async function (id) {
  try {
    // TODO: Implement
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.insert = async function (model) {
  try {
    let amount = model['amount'];
    _validateAmount(amount);

    let buyer = UserService.getById(model['buyer']);
    let account = await AccountService.getById(buyer['account']);
    _validateFunds(account['currentAmount'], amount);

    let admin = await UserService.getAdminSystem();
    let seller = await UserService.getById(model['seller']);

    await AccountService.update(seller['account'], _getSellerAmount(amount));
    await AccountService.update(admin['account'], _getAdminAmount(amount));
    await AccountService.update(buyer['account'], - Math.abs(amount));

    return await Movimentation.create(model);
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

function _validateAmount(amount) {
  if (amount <= 0) {
    throw new Error({ error: 'UnexistenceAmount' });
  }
}

function _validateFunds(currentAmount, amount) {
  if (currentAmount < amount)
    throw new Error({ error: 'InsufficientFundsException' });
}

function _getSellerAmount(amount) {
  return amount * 0.90;
}

function _getAdminAmount(amount) {
  return amount - 0.10;
}

module.exports = BaseService;