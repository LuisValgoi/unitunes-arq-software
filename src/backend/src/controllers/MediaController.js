const MediaService = require('../services/MediaService');
const BaseController = require('./BaseController')(MediaService);

BaseController.getAllReleased = async function (req, res) {
  try {
    let data = await MediaService.getAllReleased();

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.getAllNews = async function (req, res) {
  try {
    let data = await MediaService.getAllNews();

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.getAllRecents = async function (req, res) {
  try {
    let data = await MediaService.getAllRecents();

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};


BaseController.getContent = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MediaService.getContent(id);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.release = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MediaService.release(id);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.download = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MediaService.download(id);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.buy = async function (req, res) {
  try {
    let payload = req.body;
    payload['media'] = req.params.id
    let data = await MediaService.buy(payload);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;