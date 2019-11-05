const University = require("../models/University");

module.exports = {
  async getAll (req, res) {
    return res.json(await University.find());
  },

  async insert (req, res) {
    const { name, country, state, address } = req.body;
    const univesity = await University.create({
      name,
      country,
      state,
      address,
    });

    return res.json(univesity)
  }
};