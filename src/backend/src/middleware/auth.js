const jwt = require('jsonwebtoken');
const User = require('../models/User');
const CustomError = require('../errors/CustomError');

const auth = async function (req, res, next) {
  try {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
      throw new CustomError.Unauthorized(Constants.EXCEPTIONS.UNAUTHORIZED);
    }

    const token = authorizationHeader.replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_KEY);
    let user = await User.findOne({ _id: data._id, 'tokens.token': token });
    if (!user) {
      throw new CustomError.NotFound(Constants.EXCEPTIONS.NOT_FOUND);
    }

    req.user = user;
    req.token = token;

    next();
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
}
module.exports = auth;