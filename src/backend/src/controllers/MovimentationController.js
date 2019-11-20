const Movimentation = require('../models/Movimentation');

module.exports = {

  async getAll(req, res) {
    try {
      const { fromDate, toDate, accountId, seller, buyer } = req.params;
      query = { 'account': accountId, 'createdAt': { '$gte': fromDate, '$lt': toDate } }

      if (seller != '')
        query['seller'] = seller

      if (buyer != '')
        query['buyer'] = buyer

      return res.json(await Movimentation.find(query));
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async getById (req, res) {
    try {
      const { id } = req.params;
      return res.json(await Movimentation.findById(id))
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async insert(req, res) {
    try {
      const record = await Movimentation.create(req.body);
      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const record = await Movimentation.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  }
};
