const { Schema, model } = require('mongoose');

const MovimentationSchema = new Schema(
  {
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    amount: { type: Number, required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
    buyer: { type: Schema.Types.ObjectId, ref: 'User' },
    medias: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
    description: String,
  },
  {
    timestamps: true,
  },
);
module.exports = model('Movimentation', MovimentationSchema);
