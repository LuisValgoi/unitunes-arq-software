const UserService = require('../services/UserService');
const BaseController = require('./BaseController')(UserService);

BaseController.insert = async function (req, res) {
  try {
    let payload = req.body;
    let data = await UserService.insert(payload);

    return res.json(data);
  } catch (e) {
    console.log("Reported Error:", e);
    res.status(500).send(e);
  }
};

BaseController.authenticate = async function (req, res) {
  try {
    let payload = req.body;
    let data = await UserService.authenticate(payload);

    return res.json(data);
  } catch (e) {
    console.log("Reported Error:", e);
    res.status(500).send(e);
  }
};

BaseController.recoverPassword = async function (req, res) {
  try {
    let payload = req.body;
    let data = await UserService.recoverPassword(payload);

    return res.json(data);
  } catch (e) {
    console.log("Reported Error:", e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;