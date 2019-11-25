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
  let movimentation = await Movimentation.findById(id).select(["description", "value", "createdAt", "buyer", "seller"]);
  _validateMovimentation(movimentation);

  let description = movimentation.description;
  let value = movimentation.value;
  let createdAt = movimentation.createdAt;

  let buyer = await UserService.getById(movimentation.buyer);
  _validateBuyer(buyer);
  let buyerName = `${buyer.firstName} ${buyer.lastName}`;

  let seller = await UserService.getById(movimentation.seller);
  _validateSeller(seller);
  let sellerName = `${seller.firstName} ${seller.lastName}`;

  return {
    description: description,
    value: value,
    createdAt: createdAt,
    buyer: buyerName,
    seller: sellerName,
    text: description + value + buyerName + sellerName + createdAt
  };
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

function _validateMovimentation(movimentation) {
  if (!movimentation) {
    throw new Error('MovimentationNotFound');
  }
}

function _validateBuyer(buyer) {
  if (!buyer) {
    throw new Error('BuyerNotFound');
  }
}

function _validateSeller(seller) {
  if (!seller) {
    throw new Error('SellerNotFound');
  }
}

function _validateAmount(value) {
  if (value <= 0) {
    throw new Error('UnexistenceAmount');
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