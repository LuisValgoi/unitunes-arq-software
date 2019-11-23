const Account = require('../models/Account');
const BaseService = require("./BaseService")(Account);

BaseService.viewCredit = async function (req, res) {
  try {
    const response = await Account.findById(req.params.id).select("currentAmount");
    return res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = BaseService;
