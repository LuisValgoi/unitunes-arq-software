const Movimentation = require('../models/Movimentation');

module.exports = {

  async getAll(req, res) {
    try {
      const { fromDate, toDate, seller, buyer } = req.query;
      let account = req.params.id;
      let query = { account };

      if (fromDate && toDate)
        query['createdAt'] = { '$gte': fromDate, '$lt': toDate }

      if (seller)
        query['seller'] = seller

      if (buyer)
        query['buyer'] = buyer

      return res.json(await Movimentation.find(query));
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async _getMediasByUser(userId) {
    try {
      let query = { "buyer": userId };
      return res.json(await Movimentation.find(query).select("medias"));
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      return res.json(await Movimentation.findById(id))
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async insert(req, res) {
    try {
      const record = await Movimentation.create(req.body);
      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const record = await Movimentation.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
};
