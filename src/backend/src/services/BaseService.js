module.exports = function (Entity) {
  let module = {};

  module.getAll = async function (req, res) {
    try {
      return res.json(await Entity.find());
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  module.getById = async function (req, res) {
    try {
      const { id } = req.params;
      const response = await Entity.findById(id);

      return res.json(response);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  module.insert = async function (req, res) {
    try {
      const payload = req.body;
      const record = await Entity.create(payload);

      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  module.update = async function (req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const record = await Entity.findByIdAndUpdate(id, payload, { new: true });

      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  module.remove = async function (req, res) {
    try {
      const { id } = req.params;
      const record = await Entity.findByIdAndDelete(id);

      return res.json(record);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  return module;
};