const ClassificationService = require('../services/ClassificationService');
const BaseController = require('./BaseController')(ClassificationService);

BaseController.getAllByMedia = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await ClassificationService.getAllByMedia(id);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.getScoreByMedia = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await ClassificationService.getScoreByMedia(id);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

module.exports = BaseController;