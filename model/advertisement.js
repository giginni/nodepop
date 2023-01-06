const mongoose = require('mongoose');

const nodepopSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        index: true,
    },
    sale: {
        type: Boolean,
        require: true,
        index: true,
    },
    price: {
        type: Number,
        require: true,
        index: true,
    },
    photo: String,
    tags: {
        type: [String],
        index: true,
    },
  });

  const Advertisement = mongoose.model('Advertisement', nodepopSchema);

  module.exports = Advertisement
