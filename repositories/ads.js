//Es un archivo que tiene funciones que se van a conectar con la DB
const filter = require("jade/lib/filters");
const Advertisement = require("../model/advertisement");


//devuelve el listado de productos. LLama a mongoose y devuelve los anuncios
function listedItems(name, tag, isSale, fixedPrice, minPrice, maxPrice, start, limit, sort) {
    const filters = {};
    if (name) {
        filters.name = new RegExp(`^${name}`, 'i');
    }
    if (tag) {
        filters.tags = tag;
    }
    if (isSale != undefined) {
        filters.sale = isSale;
    }
    if (fixedPrice != undefined) {
        filters.price = fixedPrice;
    } else if (minPrice != undefined || maxPrice != undefined) {
        filters.price = {}
        if (minPrice != undefined) {
            filters.price.$gte = minPrice;
        }
        if (maxPrice != undefined) {
            filters.price.$lte = maxPrice;
        }
    }

    return Advertisement.find(filters).skip(start).limit(limit).sort(sort).exec();
}


function findById(id) {
    return Advertisement.findById(id).exec();
}


function createNewAd(name, price, sale, tags, photo) {
    const ad = new Advertisement({ name, price, sale, tags, photo });
    return ad.save();
}



module.exports = {
    listedItems, 
    findById,
    createNewAd
}