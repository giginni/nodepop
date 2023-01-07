const express = require('express');
const { all, findById } = require('../repositories/ads');
const router = express.Router();

/* GET home page. */
router.get('/list', async (req, res, next) => {
    try {
    const minPrice = Number(req.query.lowestValue)
    const maxPrice = Number(req.query.highestValue)
    const ads = await all(minPrice, maxPrice);
    res.json(ads);
    } catch(error) {
        next(error);
    }
  });


router.get('/:id', async (req, res, next) => {
    try {
    const {id} = req.params;
    const ad = await findById(id)
    if (ad == null) {
        res.sendStatus(404);
    } else {
        res.json(ad)
    }
    }  catch(error) {
        next(error);
    }  
})

module.exports = router;

