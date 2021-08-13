import mongoose from 'mongoose';

require('mongoose-type-url');

const { Schema } = mongoose;

const schema = new Schema({
  group: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
}, { timestamps: true });

const linksSchema = mongoose.model('links', schema);

export default linksSchema;
