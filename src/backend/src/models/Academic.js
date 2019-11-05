const { Schema, model } = require("mongoose");

const AcademicSchema = new Schema({
  firstName: { type: String, required: true, max: 255 },
  lastName: { type: String, required: true, max: 255 },
  login: { type: String, required: true, max: 255 },
  email: { type: String, required: true, max: 255 },
  lastLoginDate: Date,
  password: String,
  university: { type: Schema.Types.ObjectId, ref: "University" },
  account: { type: Schema.Types.ObjectId, ref: "Account" }
}, {
  timestamps: true
});
module.exports = model("Academic", AcademicSchema);