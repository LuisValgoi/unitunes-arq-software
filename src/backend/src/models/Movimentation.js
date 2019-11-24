const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

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
    collection: 'Movimentation'
  },
);
module.exports = model('Movimentation', MovimentationSchema);
