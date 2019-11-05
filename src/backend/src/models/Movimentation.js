const { Schema, model } = require("mongoose");

const MovimentationSchema = new Schema({
  description: String,
  amount: Number,
  seller: { type: Schema.Types.ObjectId, ref: "Academic" },
  buyer: { type: Schema.Types.ObjectId, ref: "Academic" }
}, {
  timestamps: true
});
module.exports = model("Movimentation", MovimentationSchema);