const { Schema, model } = require("mongoose");
const Media = require("./Media");

const PodcastSchema = Media.discriminator("Podcast", new Schema({
  duration: { type: Number }
}));
module.exports = model("Podcast", PodcastSchema);