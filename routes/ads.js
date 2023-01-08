const express = require('express');
const { listedItems, findById, createNewAd } = require('../repositories/ads');
const router = express.Router();
const myTags = require('../model/tags');

/* GET home page. */
router.get('/list', async (req, res, next) => {
  try {
    const {price, name, tag, sale, start, limit, sort} = req.query;
    let fixedPrice, minPrice, maxPrice;
    if (price) {
      const split = price.split('-');
      if (split.length === 1) {
          fixedPrice = Number(split[0]);
      } else if (split.length === 2) {
          minPrice = Number(split[0]) || undefined;
          maxPrice = Number(split[1]) || undefined;
      } 
    }
    let isSale;
    if (sale) {
      if (sale === "true") {
        isSale = true; 
      } else {
        isSale = false;
      }
    }
    const ads = await listedItems(name, tag, isSale, fixedPrice, minPrice, maxPrice, Number(start) || 0, Number(limit) || 10, sort);
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


router.post('/', async (req, res, next) => {
  try {
    const {name, price, sale, tags, photo} = req.body;
    let error;
    if (!name) {
      error = 'Nombre inválido';
    }
    if (typeof price != 'number') {
      error = 'Precio inválido';
    }
    if (sale !== true && sale !== false) {
      error = 'Venta inválida';
    }
    if (!Array.isArray(tags) || !tags.every(tag => myTags.includes(tag))) {
      error = 'Tag inválido';
    }
    if (!photo) {
      error = 'Foto inválida';
    }
    if (error) {
      res.status(400).json({error});
      next();
    }

    const ad = await createNewAd(name, price, sale, tags, photo)
    res.json(ad);
  } catch(err) {
    next(err);
  }
})

module.exports = router;

