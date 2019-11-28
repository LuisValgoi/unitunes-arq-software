const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const NotificationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true, max: 1000 },
    enable: Boolean,
  },
  {
    timestamps: true,
    collection: 'Notification'
  },
);

module.exports = model('Notification', NotificationSchema);
