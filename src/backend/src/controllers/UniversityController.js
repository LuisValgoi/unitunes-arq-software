const University = require('../models/University')

module.exports = {
  async getAll(req, res) {
    return res.json(await University.find())
  },

  async getById(req, res) {
    const { id } = req.params
    const response = await University.findById(id)
    return res.json(response)
  },

  async insert(req, res) {
    const { name, country, state, address } = req.body
    const record = await University.create({
      name,
      country,
      state,
      address,
    })

    return res.json(record)
  },

  async update(req, res) {
    const { id } = req.params
    const { name, country, state, address } = req.body
    const record = await University.findByIdAndUpdate(
      id,
      {
        name,
        country,
        state,
        address,
      },
      { new: true }
    )

    return res.json(record)
  },

  async remove(req, res) {
    const { id } = req.params
    const record = await University.findByIdAndDelete(id)

    return res.json(record)
  },
}
