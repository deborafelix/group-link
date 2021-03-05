const mongoose = require('mongoose')
require('mongoose-type-url');

const Schema = mongoose.Schema

const schema = new Schema({
    group: {
        type: String,
        require: true
    },
    url: {
        type: mongoose.SchemaTypes.Url,
        require: true
    }
}, {timestamps: true})

const linksSchema = mongoose.model('links', schema)

module.exports = linksSchema