module.exports = {
  listAll(req, res) {
    const availableAPIs = ["/university", "/university", "/academic", "/account", "/movimentation", "/media"];
    res.json(availableAPIs);
  }
}