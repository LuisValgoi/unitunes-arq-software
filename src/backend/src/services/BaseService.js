module.exports = function (Entity) {
  let module = {};

  module.getAll = async function () {
    return await Entity.find();
  }

  module.getById = async function (id) {
    return await Entity.findById(id);
  },

  module.insert = async function (payload) {
    return await Entity.create(payload);
  },

  module.update = async function (id, payload) {
    return await Entity.findByIdAndUpdate(id, payload, { new: true, useFindAndModify: false });
  },

  module.remove = async function (id) {
    return await Entity.findByIdAndDelete(id);
  }

  return module;
};