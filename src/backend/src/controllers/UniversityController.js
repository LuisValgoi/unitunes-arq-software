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
      const record = await University.create(req.body);
      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const record = await University.findByIdAndUpdate(id, req.body, { new: true });

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
