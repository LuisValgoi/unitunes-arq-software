const { Schema, model } = require('mongoose');

const AccountSchema = new Schema(
  {
    currentAmount: { type: Number, required: true },
    movimentation: [{ type: Schema.Types.ObjectId, ref: 'Movimentation' }],
  },
  {
    timestamps: true,
  },
);
module.exports = model('Account', AccountSchema);
