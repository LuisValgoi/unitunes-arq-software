const Movimentation = require('../models/Movimentation');
const BaseService = require("./BaseService")(Movimentation);

BaseService.getAllByAccount = async function (req, res) {
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
};

BaseService._getMediasByUser = async function (userId) {
  try {
    let query = { "buyer": userId };
    return res.json(await Movimentation.find(query).select("medias"));
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = BaseService;