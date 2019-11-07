const { Schema, model } = require('mongoose')

const MediaSchema = new Schema(
  {
    name: { type: String, required: true, max: 255 },
    description: { type: String, required: true, max: 1000 },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    author: [{ type: Schema.Types.ObjectId, ref: 'Academic', required: true }],
    classification: { type: Schema.Types.ObjectId, ref: 'Classification' },
    content: Buffer,
    image: Buffer,
    isApropriated: Boolean,
    isPaid: Boolean,
  },
  {
    discriminatorKey: 'type',
    timestamps: true,
  }
)

module.exports = model('Media', MediaSchema)
