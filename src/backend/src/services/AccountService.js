const Account = require('../models/Account');
const BaseService = require('./BaseService')(Account);

BaseService.viewCredit = async function (id) {
  try {
    return await Account.findById(id).select('currentAmount');
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.generateAccountIdForUserCreation = async function () {
  try {
    let payload = {
      currentAmount: 0
    };
    let data = await Account.create(payload);
    return data._id;
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

module.exports = BaseService;
