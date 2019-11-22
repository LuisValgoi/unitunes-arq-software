const Academic = require('../models/Academic');
const BaseController = require("./BaseController")(Academic);

BaseController.insert = async function () { 
  try {
    const record = await Academic.create(req.body);
    // TODO: Create an account
    return res.json(record)
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

module.exports = BaseController;