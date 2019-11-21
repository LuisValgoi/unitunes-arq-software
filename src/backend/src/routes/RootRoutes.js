module.exports = {
  listAll(req, res) {
    const availableAPIs = ["/university", "/university", "/academic", "/account", "/movimentation"];
    res.json(availableAPIs);
  }
}