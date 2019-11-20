const Account = require('../models/Account');
const Academic = require('../models/Academic');

module.exports = {

  async getAll(req, res) {
    try {
      return res.json(await Account.find());
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async getByUserId (req, res) {
    try {
      return _getByUserId(req, res);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async _getByUserId (req, res) {
    const academicId = req.params.id;
    const academic = await Academic.findById(academicId);
    const accountId = academic.account;

    return res.json(await Account.findById(accountId));
  },

  // not being used
  async insert(req, res) {
    try {
      const { currentAmount } = req.body;
      const record = await Account.create({currentAmount});

      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { currentAmount } = req.body;
      const record = await Account.findByIdAndUpdate(id, { currentAmount }, { new: true });

      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const record = await Account.findByIdAndDelete(id);

      return res.json(record);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },
};
