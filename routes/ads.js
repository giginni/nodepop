const express = require('express');
const { all, findById } = require('../repositories/ads');
const router = express.Router();

/* GET home page. */
router.get('/list', async (req, res) => {
    const minPrice = req.query.lowestValue
    const maxPrice = req.query.highestValue
    const ads = await all(minPrice, maxPrice);
    res.json(ads);
  });


router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const ad = await findById(id)
    if (ad == null) {
        res.sendStatus(404);
    } else {
        res.json(ad)
    }
})

module.exports = router;

