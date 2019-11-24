const { Schema, model } = require('mongoose');

const FavoriteSchema = new Schema(
  {
    media: { type: Schema.Types.ObjectId, ref: 'Media' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    type: Number,
  },
  {
    timestamps: true,
  },
);
module.exports = model('Favorite', FavoriteSchema);
