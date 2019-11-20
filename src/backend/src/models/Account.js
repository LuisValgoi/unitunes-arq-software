const { Schema, model } = require('mongoose');

const AccountSchema = new Schema(
  {
    currentAmount: { type: Number, required: true }
  },
  {
    timestamps: true,
  },
);
module.exports = model('Account', AccountSchema);
