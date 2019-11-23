module.exports = function (Entity) {
  let module = {};

  module.getAll = async function () {
    try {
      return await Entity.find();
    } catch (e) {
      console.log(Entity, e);
    }
  }

  module.getById = async function (id) {
    try {
      return await Entity.findById(id);
    } catch (e) {
      console.log(Entity, e);
    }
  },

  module.insert = async function (payload) {
    try {
      return await Entity.create(payload);
    } catch (e) {
      console.log(Entity, e);
    }
  },

  module.update = async function (id, payload) {
    try {
      return await Entity.findByIdAndUpdate(id, payload, { new: true, useFindAndModify: false });
    } catch (e) {
      console.log(Entity, e);
    }
  },

  module.remove = async function (id) {
    try {
      return await Entity.findByIdAndDelete(id);
    } catch (e) {
      console.log(Entity, e);
    }
  }

  return module;
};