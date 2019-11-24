const UserService = require('../services/UserService');
const BaseController = require('./BaseController')(UserService);

BaseController.insert = async function (req, res) {
  try {
    let payload = req.body;
    let data = await UserService.insert(payload);
    let token = await UserService.generateAuthToken(data);

    return res.json({ data, token });
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.me = async function (req, res) {
  try {
    res.json(req.user);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.login = async function (req, res) {
  try {
    let user = await UserService.findByCredentials(req.body.email, req.body.password);

    if (!user) {
      return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
    }

    let token = await UserService.generateAuthToken(user);
    res.json({ user, token });

  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.recoverPassword = async function (req, res) {
  try {
    let payload = req.body;
    let data = await UserService.recoverPassword(payload);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

module.exports = BaseController;