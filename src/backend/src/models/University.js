const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const UniversitySchema = new Schema(
  {
    name: { type: String, required: true, max: 255 },
    country: { type: String, required: true, max: 255 },
    state: { type: String, required: true, max: 2 },
    address: { type: String, max: 255 },
  },
  {
    timestamps: true,
    collection: 'University'
  },
);
module.exports = model('University', UniversitySchema);
