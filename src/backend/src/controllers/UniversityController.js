const University = require('../models/University');

module.exports = {
  async getAll(req, res) {
    try {
      return res.json(await University.find());
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const response = await University.findById(id);
      return res.json(response);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async insert(req, res) {
    try {
      const { name, country, state, address } = req.body;
      const record = await University.create({
        name,
        country,
        state,
        address,
      });

      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, country, state, address } = req.body;
      const record = await University.findByIdAndUpdate(id, { name, country, state, address }, { new: true });

      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const record = await University.findByIdAndDelete(id);

      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },
};
