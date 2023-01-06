const express = require('express');
const adsRouter = require('./ads');
const router = express.Router();

router.use('/ads', adsRouter);

module.exports = router;
