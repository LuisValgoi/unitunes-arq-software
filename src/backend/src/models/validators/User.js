module.exports = {
  validateUser(user) {
    if (!user || user['active'] == false) {
      throw new NotFoundError(Constants.EXCEPTIONS.USER_NOT_FOUND);
    }
  },
  validateUserAdmin(user) {
    if (user['role'] != 'admin') {
      throw new UnauthorizedError(Constants.EXCEPTIONS.UNAUTHORIZED);
    }
  },
  validatePasswordMatch(isPasswordMatch) {
    if (!isPasswordMatch) {
      throw new UnauthorizedError(Constants.EXCEPTIONS.LOGIN_FAILED);
    }
  }
};