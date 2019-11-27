const MediaService = require('../services/MediaService');
const BaseController = require('./BaseController')(MediaService);

BaseController.getAllReleased = async function (req, res) {
  try {
    let data = await MediaService.getAllReleased();

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.getAllNews = async function (req, res) {
  try {
    let data = await MediaService.getAllNews();

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.getAllRecents = async function (req, res) {
  try {
    let data = await MediaService.getAllRecents();

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.getAllAuthored = async function (req, res) {
  try {
    let userId = req.user._id;
    let data = await MediaService.getAllAuthored(userId);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.getContent = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MediaService.getContent(id);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.release = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MediaService.release(id);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.download = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MediaService.download(id);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.buy = async function (req, res) {
  try {
    let payload = req.body;
    payload['media'] = req.params.id
    let data = await MediaService.buy(payload);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

BaseController.setMidiaInappropriate = async function (req, res) {
  try {
    let mediaId = req.params.id
    let data = await MediaService.setMidiaInappropriate(mediaId, req.user);

    return res.json(data);
  } catch (e) {
    res.status(e.code).send({
      code: e.code,
      message: e.message
    });
  }
};

module.exports = BaseController;