//Es un archivo que tiene funciones que se van a conectar con la DB
const Advertisement = require("../model/advertisement");


//devuelve el listado de productos. LLama a mongoose y devuelve los anuncios
function all(minPrice, maxPrice) {
    
}


function findById(id) {
    return Advertisement.findById(id).exec();
}



module.exports = {
    all, 
    findById
}