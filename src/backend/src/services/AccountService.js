const Account = require('../models/Account');
const BaseService = require('./BaseService')(Account);

BaseService.viewCredit = async function (id) {
  return await Account.findById(id).select('currentAmount');
};

BaseService.addCredit = async function (id, amount) {
  return await Account.findByIdAndUpdate(id, { $inc: { 'currentAmount': amount }}, { new: true, useFindAndModify: false });
};

module.exports = BaseService;
