module.exports = {
  listAll(req, res) {
    const availableAPIs = ["/university", "/academic", "/account", "/movimentation", "/media"];
    res.json(availableAPIs);
  }
}