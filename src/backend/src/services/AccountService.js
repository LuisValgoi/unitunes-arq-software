const Account = require('../models/Account');
const BaseService = require('./BaseService')(Account);

BaseService.viewCredit = async function (id) {
  try {
    return await Account.findById(id).select('currentAmount');
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

module.exports = BaseService;
