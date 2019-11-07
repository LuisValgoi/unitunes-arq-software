const { Schema, model } = require('mongoose');
const Media = require('./Media');

const MusicSchema = Media.discriminator(
  'Music',
  new Schema({
    duration: Number,
  }),
);
module.exports = model('Music', MusicSchema);
