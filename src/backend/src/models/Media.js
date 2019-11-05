const { Schema, model } = require("mongoose");

const MediaSchema = new Schema({
  name: { type: String, required: true, max: 255 },
  description: { type: String, required: true, max: 1000 },
  price: { type: Number, required: true },
  authors: {},
  content: {},
  category: { type: String, required: true, max: 255 },
  classificationValue: { type: Number, required: true },
  isApropriated: { type: Boolean, default: true },
  isPaid: { type: Boolean, default: true },
  image: { data: Buffer, contentType: String, required: false },
}, {
  discriminatorKey: "type",
  collection: "items",
  timestamps: true
});

module.exports = model("Media", MediaSchema);