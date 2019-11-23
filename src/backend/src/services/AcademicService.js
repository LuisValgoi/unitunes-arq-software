const Academic = require('../models/Academic');
const BaseService = require('./BaseService')(Academic);

BaseService.insert = async function (payload) { 
  try {
    // TODO: Create an account
    return await Academic.create(payload);
  } catch (e) {
    console.log(Academic, e);
  }
};

BaseService.authenticate = async function (payload) { 
  try {
    // TODO: Implement
  } catch (e) {
    console.log(Academic, e);
  }
};

BaseService.recoverPassword = async function (payload) { 
  try {
    // TODO: Implement
  } catch (e) {
    console.log(Academic, e);
  }
};

module.exports = BaseService;