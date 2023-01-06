//Es un archivo que tiene funciones que se van a conectar con la DB

const ads = require("./temp");


//devuelve el listado de productos. LLama a mongoose y devuelve los anuncios
function all(minPrice, maxPrice) {
    const filteredAds = ads.filter(ad => {
        if (ad.price >= minPrice && ad.price <= maxPrice) {
            return true
        } else {
            return false
        }
    }) 
    return Promise.resolve(filteredAds)
}


function findById(id) {
    for (let i=0; i< ads.length; i++) {
        const ad = ads[i]
        if (ad.id === id) {
            return Promise.resolve(ad)
        } 
    }
    return Promise.resolve(null)
}



module.exports = {
    all, 
    findById
}