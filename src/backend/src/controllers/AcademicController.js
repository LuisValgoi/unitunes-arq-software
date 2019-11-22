const Academic = require('../models/Academic');

module.exports = {
  async getAll(req, res) {
    try {
      return res.json(await Academic.find());
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const response = await Academic.findById(id)
      return res.json(response);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async insert(req, res) {
    try {
      const record = await Academic.create(req.body);
      // TODO: Create an account
      return res.json(record)
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const record = await Academic.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const record = await Academic.findByIdAndDelete(id);
      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
};