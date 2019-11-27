const Categories = require('../util/Categories');

let PASSWORD_LENGTH = 10;
let PASSWORD_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let CATEGORIES = {
  MUSIC: Categories.getMusic(),
  BOOK: Categories.getBook(),
  MOVIE: Categories.getMovie(),
  PODCAST: Categories.getPodcast(),
};
let EXCEPTIONS = {
  BAD_REQUEST: 'Bad Request',
  NOT_FOUND: 'Not Found',
  PERSISTENCE: 'Persistence',
  UNAUTHORIZED: 'Resource not authorized! Check your token session or if you are logged in.',
  LOGIN_FAILED: 'Login failed! Check your authentication credentials.',
  USER_NOT_FOUND: 'User Not Found! Check if your session has expired.'
};

class Constants {
  static get PASSWORD_LENGTH() { return PASSWORD_LENGTH; }
  static get PASSWORD_CHARACTERS() { return PASSWORD_CHARACTERS; }
  static get CATEGORIES() { return CATEGORIES; }
  static get EXCEPTIONS() { return EXCEPTIONS; }
}

module.exports = Constants;