const User = require('../models/User');
const BaseService = require('./BaseService')(User);

BaseService.insert = async function (payload) { 
  try {
    // TODO: Create an account
    return await User.create(payload);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.authenticate = async function (payload) { 
  try {
    // TODO: Implement
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.recoverPassword = async function (payload) { 
  try {
    // TODO: Implement
  } catch (e) {
    console.log("Reported Error:", e);
  }
};

BaseService.getAdminSystem = async function () { 
  try {
    let query = { 'role': 'admin'}
    return await User.findOne(query);
  } catch (e) {
    console.log("Reported Error:", e);
  }
};


module.exports = BaseService;