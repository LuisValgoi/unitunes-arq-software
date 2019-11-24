module.exports = {
  listAll(req, res) {
    const availableAPIs = ['/university', '/academic', '/account', '/movimentation', '/media', '/library', '/favorite'];
    res.json(availableAPIs);
  }
}