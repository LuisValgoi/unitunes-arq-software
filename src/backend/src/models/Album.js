const { Schema, model } = require('mongoose')

const AlbumSchema = new Schema(
  {
    name: { type: String, required: true, max: 255 },
    description: { type: String, required: true, max: 255 },
    medias: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  },
  {
    timestamps: true,
  }
)
module.exports = model('Album', AlbumSchema)
