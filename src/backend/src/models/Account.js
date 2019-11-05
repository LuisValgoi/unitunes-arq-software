const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
  currentAmount: { type: String, required: true, max: 255 },
  movimentation: [{ type: Schema.Types.ObjectId, ref: "Movimentation" }]
}, {
  timestamps: true
});
module.exports = model("Account", AccountSchema);