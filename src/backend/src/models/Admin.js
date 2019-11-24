const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const User = require('./User');

mongoose.pluralize(null);

const AdminSchema = User.discriminator('Admin', new Schema(null, {
    collection: 'Admin'
}));
module.exports = model('Admin', AdminSchema);
