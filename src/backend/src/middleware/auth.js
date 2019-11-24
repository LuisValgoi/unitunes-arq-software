const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async function (req, res, next) {
  try {
    let token = req.header('Authorization').replace('Bearer ', '');
    let data = jwt.verify(token, process.env.JWT_KEY);
    let user = await User.findById(data._id);
    if (!user) {
      throw new Error('UserNotFound');
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
}
module.exports = auth;