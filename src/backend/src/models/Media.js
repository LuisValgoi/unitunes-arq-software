const { Schema, model } = require("mongoose");

const MediaSchema = new Schema({
  name: { type: String, required: true, max: 255 },
  description: { type: String, required: true, max: 1000 },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  authors: [{ type: Schema.Types.ObjectId, ref: "Academic", required: true }],
  content: Buffer,
  classificationValue: Number,
  isApropriated: Boolean,
  isPaid: Boolean,
  image: Buffer,
}, {
  discriminatorKey: "type",
  timestamps: true
});

module.exports = model("Media", MediaSchema);