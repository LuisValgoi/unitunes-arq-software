const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const AlbumSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String, required: true, maxlength: 255 },
    medias: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  },
  {
    timestamps: true,
    collection: 'Album'
  },
);
module.exports = model('Album', AlbumSchema);
