module.exports = function (Service) {
  let module = {};

  module.getAll = async function (req, res) {
    Service.getAll(req, res);
  }

  module.getById = async function (req, res) {
    Service.getById(req, res);
  },

  module.insert = async function (req, res) {
    Service.insert(req, res);
  },

  module.update = async function (req, res) {
    Service.update(req, res);
  },

  module.remove = async function (req, res) {
    Service.remove(req, res);
  }

  return module;
};