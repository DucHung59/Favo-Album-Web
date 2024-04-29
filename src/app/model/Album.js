const { mongoose } = require("mongoose")
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;


const Album = new Schema({
  name: { type: String, require: true },
  description: { type: String, maxlength: 600 },
  img: { type: String, maxlength: 255 },
  videoId: {type: String, require: true},
  slug: { type: String, slug: "name", unique: true }
}, {
  timestamps: true
}
)

// Add plug place

Album.plugin(slug);
Album.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all'
})

module.exports = mongoose.model('Album', Album);