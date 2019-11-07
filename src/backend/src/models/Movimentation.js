const { Schema, model } = require('mongoose');

const MovimentationSchema = new Schema(
  {
    amount: { type: Number, required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'Academic' },
    buyer: { type: Schema.Types.ObjectId, ref: 'Academic' },
    medias: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
    description: String,
  },
  {
    timestamps: true,
  },
);
module.exports = model('Movimentation', MovimentationSchema);
