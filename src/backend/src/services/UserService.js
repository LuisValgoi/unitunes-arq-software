const User = require('../models/User');
const AccountService = require('./AccountService');
const BaseService = require('./BaseService')(User);

BaseService.insert = async function (payload) { 
  let account = await AccountService.insert({ 'currentAmount': 0 });
  payload['account'] = account['_id'];

    return await User.create(payload);
};

BaseService.authenticate = async function (payload) { 
  // TODO: Implement
};

BaseService.recoverPassword = async function (payload) { 
  // TODO: Implement
};

BaseService.getAdminSystem = async function () { 
  let query = { 'role': 'admin'}
  return await User.findOne(query);
};


module.exports = BaseService;