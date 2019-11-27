class Thrower {
  static redirect(res, error) {
    res.status(error.code).send({
      code: error ? error.code : 0,
      message: error ? error.message : 'N/A'
    });
  }
}

module.exports = Thrower;