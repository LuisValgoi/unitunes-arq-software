module.exports = {
  root(req, res) {
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
  loginGet(req, res) {
  },
  loginPost(req, res) {
  },
  logout(req, res) {
  }
}