const { Schema, model } = require("mongoose");
const Media = require("./Media");

const VideoSchema = Media.discriminator("Video", new Schema({
  duration: Number
}));
module.exports = model("Video", VideoSchema);