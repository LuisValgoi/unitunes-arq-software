class Thrower {
  static redirect(res, error) {
    res.status(error.code).send({
      code: error.code,
      message: error.message
    });
  }
}

module.exports = Thrower;