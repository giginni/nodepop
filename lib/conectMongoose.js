'use strict'

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Advertisement = require('../model/advertisement');
mongoose.connect('mongodb://127.0.0.1:27017/nodepop', {ignoreUndefined: true});


module.exports = mongoose.connection;

Advertisement.findById()