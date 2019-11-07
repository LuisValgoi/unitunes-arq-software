const { Schema, model } = require('mongoose');
const Academic = require('./Academic');

const AdminSchema = Academic.discriminator('Admin', new Schema());
module.exports = model('Admin', AdminSchema);
