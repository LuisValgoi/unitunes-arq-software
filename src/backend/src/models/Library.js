const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const LibrarySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  media: { type: Schema.Types, ref: 'Media' }
}, {
  collection: 'Library'
});
module.exports = model('Library', LibrarySchema);
