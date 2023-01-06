'use strict'

const mongoose = require('mongoose');
const Advertisement = require('../model/advertisement');
mongoose.connect('mongodb://127.0.0.1:27017/nodepop');

module.exports = mongoose.connection;

Advertisement.findById()