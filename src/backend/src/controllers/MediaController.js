const Media = require('../models/Media');
const MovimentationController = require("./MovimentationController");
const BaseController = require("./BaseController")(Media);

BaseController.getAll = async function (req, res) {
  try {
    let query = { 'isAvailable': true };
    return res.json(await Media.find(query).select(["-content", "-image"]));
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

BaseController.getAllByUser = async function (req, res) {
  try {
    const { userId } = req.params;
    let mediaIds = await MovimentationController._getMediasByUser(userId);
    let query = { '_id': { '$in:': mediaIds } };

    const response = await Media.find(query).select(["-content", "-image"]);
    return res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

BaseController.getById = async function (req, res) {
  try {
    const { id } = req.params;
    const response = await Media.findById(id).select(["-content", "-image"])
    return res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

BaseController.getContent = async function (req, res) {
  try {
    const { id } = req.params;
    const response = await Media.findById(id).select(["content", "image"]);
    return res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

BaseController.buy = async function (req, res) {
  try {
    // TODO : add into movimentation
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;