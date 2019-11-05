const { Schema, model } = require("mongoose");
const Media = require("./Media");

const BookSchema = Media.discriminator("Book", new Schema({
  pageNumber: { type: Number }
}));
module.exports = model("Book", BookSchema);