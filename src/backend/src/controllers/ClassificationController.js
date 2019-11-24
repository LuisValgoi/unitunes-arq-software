const ClassificationService = require('../services/ClassificationService');
const BaseController = require('./BaseController')(ClassificationService);

BaseController.getAllByMedia = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await ClassificationService.getAllByMedia(id);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.getScoreByMedia = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await ClassificationService.getScoreByMedia(id);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;