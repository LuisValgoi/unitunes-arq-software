const { Schema, model } = require("mongoose");

const ClassificationSchema = new Schema({
  media: { type: Schema.Types.ObjectId, ref: "Media" },
  value: { type: Number, required: true },
  doneBy: { type: Schema.Types.ObjectId, ref: "Academic", required: true },
  doneIn: { type: Date, required: true }
});
module.exports = model("Classification", ClassificationSchema);