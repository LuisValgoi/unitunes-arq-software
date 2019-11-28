const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const MediaSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String, required: true, maxlength: 1000 },
    price: { type: Number, required: true, validate: value => {
      if (value <= 0) {
        throw new PersistenceError('ShouldBeGreaterThanZero')
      }
    } },
    category: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    classification: { type: Schema.Types.ObjectId, ref: 'Classification' },
    content: Buffer,
    image: Buffer,
    isAvailable: Boolean,
    isApropriated: Boolean,
    isAvailableSince: Date
  },
  {
    timestamps: true,
    collection: 'Media'
  },
);

module.exports = model('Media', MediaSchema);
