module.exports = {
  root(req, res) {
    console.log('Inside the homepage callback function');
    console.log("sessionID", req.sessionID);

    const availableAPIs = [
      '/university',
      '/academic',
      '/account',
      '/movimentation',
      '/media',
      '/library',
      '/favorite'];

    res.json(availableAPIs);
  },
  login(req, res) {
  },
  logout(req, res) {
  }
}