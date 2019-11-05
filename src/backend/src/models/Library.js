const { Schema, model } = require("mongoose");

const LibrarySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "Academic" },
  medias: [{ type: Schema.Types.ObjectId, ref: "Media" }],
  albums: [{ type: Schema.Types.ObjectId, ref: "Album" }],
  favorites: { type: Schema.Types.ObjectId, ref: "Favorite" },
});
module.exports = model("Library", LibrarySchema);