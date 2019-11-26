const User = require('../models/User');
const AccountService = require('./AccountService');
const BaseService = require('./BaseService')(User);

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const EmailHelper = require('../util/EmailHelper');

BaseService.insert = async function (payload) {
  let accountId = await AccountService.generateAccountIdForUserCreation();
  payload['account'] = accountId;

  return await User.create(payload);
};

BaseService.getAdminSystem = async function () {
  let query = { 'role': 'admin' }

  return await User.findOne(query);
};

BaseService.remove = async function (userId, currentUser) {
  if (currentUser['role'] != 'admin')
    throw new Error('AccessDeniedException');

  payload = { 'active': false };
  return await User.findByIdAndDelete(userId,  payload, { new: true, useFindAndModify: false });
};

BaseService.recoverPassword = async function (email, newPassword) {
  let user = await User.findOneAndUpdate({ email }, { password: newPassword }, { new: true, useFindAndModify: false });
  validateUser(user);

  return EmailHelper.sendMail(user.firstName, newPassword, user.email).catch(console.error);
};

BaseService.findByCredentials = async function (email, password) {
  let user = await User.findOne({ email });
  validateUser(user);

  let isPasswordMatch = await bcrypt.compare(password, user.password);
  validatePasswordMatch(isPasswordMatch);

  return user;
};

BaseService.generateAuthToken = async function (user) {
  let token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

BaseService.generateRandomString = async function () {

};

function validateUser(user) {
  if (!user || user['active'] == false) {
    throw new Error('UserNotFoundByEmail');
  }
}

function validatePasswordMatch(isPasswordMatch) {
  if (!isPasswordMatch) {
    throw new Error('UserNInvalidLoginCredentialsotFound');
  }
}

module.exports = BaseService;