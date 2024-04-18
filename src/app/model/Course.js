const { mongoose } = require("mongoose")
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);


const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, require: true },
  description: { type: String, maxlength: 600 },
  img: { type: String, maxlength: 255 },
  videoId: {type: String, require: true},
  slug: { type: String, slug: 'name' }
}, {
  timestamps: true
  }
)

module.exports = mongoose.model('Course', Course);