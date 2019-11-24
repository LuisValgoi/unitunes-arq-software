const AccountService = require('../services/AccountService');
const BaseController = require('./BaseController')(AccountService);

BaseController.addCredit = async function (req, res) {
  try {
    let newCurrentAmout = req.body.currentAmount;
    let id = req.params.id;
    let data = await AccountService.update(id, { 'currentAmount': newCurrentAmout });

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.viewCredit = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await AccountService.viewCredit(id);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;