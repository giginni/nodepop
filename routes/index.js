const express = require('express');
const adsRouter = require('./ads');
const tagsRouter = require("./tags");
const router = express.Router();


router.use('/ads', adsRouter);
router.use("/tags", tagsRouter);

module.exports = router;
