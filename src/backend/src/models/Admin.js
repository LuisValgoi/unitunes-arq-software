const { Schema, model } = require('mongoose');
const User = require('./User');

const AdminSchema = User.discriminator('Admin', new Schema());
module.exports = model('Admin', AdminSchema);
