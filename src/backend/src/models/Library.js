const { Schema, model } = require('mongoose');

const LibrarySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  media: { type: Schema.Types, ref: 'Media' }
});
module.exports = model('Library', LibrarySchema);
