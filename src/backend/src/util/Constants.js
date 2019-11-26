const Categories = require('./Categories');

module.exports = {
  PASSWORD_LENGTH: 10,
  PASSWORD_CHARACTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  CATEGORIES: {
    MUSIC: Categories.getMusic(),
    BOOK: Categories.getBook(),
    MOVIE: Categories.getMovie(),
    PODCAST: Categories.getPodcast(),
  }
};