const User = require('../models/User');
const AccountService = require('./AccountService');
const BaseService = require('./BaseService')(User);

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

BaseService.insert = async function (payload) {
  try {
    let accountId = await AccountService.generateAccountIdForUserCreation();
    payload['account'] = accountId;

    return await User.create(payload);
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.getAdminSystem = async function () {
  try {
    let query = { 'role': 'admin' }

    return await User.findOne(query);
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.recoverPassword = async function (payload) {
  try {
    // TODO: Implement
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.findByCredentials = async function (email, password) {
  try {
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error({ error: 'Invalid login credentials' });
    }

    let isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' });
    }

    return user;
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

BaseService.generateAuthToken = async function (user) {
  try {
    let token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
  } catch (e) {
    console.log('Reported Error:', e);
  }
};

module.exports = BaseService;