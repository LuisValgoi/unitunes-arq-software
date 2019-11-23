const Academic = require('../models/Academic');
const BaseService = require('./BaseService')(Academic);

BaseService.insert = async function (req, res) { 
  try {
    const record = await Academic.create(req.body);
    // TODO: Create an account
    return res.json(record)
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = BaseService;