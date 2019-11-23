const AcademicService = require('../services/AcademicService');
const BaseController = require('./BaseController')(AcademicService);

BaseController.insert = async function (req, res) {
  try {
    let payload = req.body;
    let data = await AcademicService.insert(payload);

    return res.json(data);
  } catch (e) {
    console.log(AcademicService, e);
    res.status(500).send(e);
  }
};

BaseController.authenticate = async function (req, res) {
  try {
    let payload = req.body;
    let data = await AcademicService.authenticate(payload);

    return res.json(data);
  } catch (e) {
    console.log(AcademicService, e);
    res.status(500).send(e);
  }
};

BaseController.recoverPassword = async function (req, res) {
  try {
    let payload = req.body;
    let data = await AcademicService.recoverPassword(payload);

    return res.json(data);
  } catch (e) {
    console.log(AcademicService, e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;