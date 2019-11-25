const UserService = require('../services/UserService');
const BaseController = require('./BaseController')(UserService);
const StringHelper = require('../util/StringHelper');

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

BaseController.logout = async function (req, res) {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.logoutAll = async function (req, res) {
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

BaseController.recoverPassword = async function (req, res) {
  try {
    let newPassword = StringHelper.generateRandomString();
    let data = await UserService.recoverPassword(req.body.email, newPassword);
    let newReq = await revogeSessionAfterRecovery(req);
    BaseController.logoutAll(newReq, res);

    return res.json(data);
  } catch (e) {
    console.log('Reported Error:', e);
    res.status(500).send(e);
  }
};

async function revogeSessionAfterRecovery(req) {
  let user = await UserService.getBy({ email: req.body.email });
  req.user = user;
  return req;
}

module.exports = BaseController;