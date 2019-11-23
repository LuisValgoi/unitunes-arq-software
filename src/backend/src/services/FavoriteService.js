const Favorite = require('../models/Favorite');
const BaseService = require('./BaseService')(Favorite);

BaseService.getAll = async function (req, res) {
  try {
    throw new Error('NotImplementedException');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

BaseService.getAllByUser = async function (req, res) {
  try {
    const { userId } = req.params;
    let query = { 'user': userId };

    const response = await Favorite.find(query);
    return res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = BaseService;