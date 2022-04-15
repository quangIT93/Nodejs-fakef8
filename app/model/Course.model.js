const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String, maxlength: 600 },
    description: { type: String, maxlength: 600 },
    videoId: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    level: {type: String, maxlength: 600},
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Course', Course);
