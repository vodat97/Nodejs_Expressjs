const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('course', course);
