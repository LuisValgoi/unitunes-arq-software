module.exports = {
  root(req, res) {
    const availableAPIs = [
      '/university',
      '/user',
      '/account',
      '/movimentation',
      '/media',
      '/favorite'];

    res.json(availableAPIs);
  },
  loginGet(req, res) {
  },
  loginPost(req, res) {
  },
  logout(req, res) {
  }
}