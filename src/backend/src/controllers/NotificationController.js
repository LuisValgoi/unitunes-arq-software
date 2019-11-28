const NotificationService = require('../services/NotificationService');
const BaseController = require('./BaseController')(NotificationService);

BaseController.getAllByUser = async function (req, res) {
  try {
    let userId = req.user['_id'];
    let data = await NotificationService.getAllByUser(userId, true);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;