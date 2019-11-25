const User = require('../models/User');
const AccountService = require('./AccountService');
const BaseService = require('./BaseService')(User);

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

BaseService.insert = async function (payload) {
  let accountId = await AccountService.generateAccountIdForUserCreation();
  payload['account'] = accountId;

  return await User.create(payload);
};

BaseService.getAdminSystem = async function () {
  let query = { 'role': 'admin' }

  return await User.findOne(query);
};

BaseService.recoverPassword = async function (payload) {
  // TODO: Implement
};

BaseService.findByCredentials = async function (email, password) {
  let user = await User.findOne({ email });
  if (!user) {
    throw new Error('InvalidLoginCredentials');
  }

  let isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error('InvalidLoginCredentials');
  }

  return user;
};

BaseService.generateAuthToken = async function (user) {
  let token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

module.exports = BaseService;