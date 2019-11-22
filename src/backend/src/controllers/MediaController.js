const Media = require('../models/Media');
const MovimentationController = require("./MovimentationController");

module.exports = {

  async getAll(req, res) {
    try {
      return res.json(await Media.find().select(["-content", "-image"]));
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async getAllByUser(req, res) {
    try {
      const { userId } = req.params;
      let mediaIds = await MovimentationController._getMediasByUser(userId);

      let query = { '_id': { '$in:': mediaIds } };
      const response = await Media.find(query).select(["-content", "-image"]);
      return res.json(response);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const response = await Media.findById(id).select(["-content", "-image"])
      return res.json(response);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async insert(req, res) {
    try {
      const record = await Media.create(req.body);
      return res.json(record)
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const record = await Media.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const record = await Media.findByIdAndDelete(id);
      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async getContent(req, res) {
    try {
      const { id } = req.params;
      const response = await Media.findById(id).select(["content", "image"]);
      return res.json(response);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async buy(req, res) {
    try {
      // TODO : add into movimentation
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  }
};