const { Schema, model } = require('mongoose');
const Media = require('./Media');

const BookSchema = Media.discriminator(
  'Book',
  new Schema({
    pageNumber: Number,
  }),
);
module.exports = model('Book', BookSchema);
