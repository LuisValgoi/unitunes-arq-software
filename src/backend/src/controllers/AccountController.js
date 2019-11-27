const AccountService = require('../services/AccountService');
const BaseController = require('./BaseController')(AccountService);

BaseController.addCredit = async function (req, res) {
  try {
    let newCurrentAmout = req.body.currentAmount;
    let id = req.params.id;
    let data = await AccountService.addCredit(id, newCurrentAmout);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.viewCredit = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await AccountService.viewCredit(id);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

module.exports = BaseController;