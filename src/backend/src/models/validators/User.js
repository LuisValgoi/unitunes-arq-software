module.exports = {
  validateUser(user) {
    if (!user || user['active'] == false) {
      throw new Error('UserNotFoundByEmail');
    }
  },
  validateUserAdmin(user) {
    if (user['role'] != 'admin') {
      throw new Error('AccessDeniedException');
    }
  },
  validatePasswordMatch(isPasswordMatch) {
    if (!isPasswordMatch) {
      throw new Error('UserNInvalidLoginCredentialsotFound');
    }
  }
};