const MovimentationService = require('../services/MovimentationService');
const BaseController = require('./BaseController')(MovimentationService);

BaseController.getAllByAccount = async function (req, res) {
  try {
    let movimentationDTO = {
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
      seller: req.query.seller,
      buyer: req.query.buyer,
      account: req.params.id
    };
    let data = await MovimentationService.getAllByAccount(movimentationDTO);

    return res.json(data);
  } catch (e) {
    console.log(MovimentationService, e);
    res.status(500).send(e);
  }
};

BaseController.generateRecepit = async function (req, res) {
  // TODO: Implement
};


module.exports = BaseController;