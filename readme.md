# Practica app "Nodepop" 

Proyecto desarrollado en javascript. Es una app de compra y venta de artículos de segunda mano.
Permite crear y obtener anuncios de compra y venta de una base de datos Mongo.

Esta estructurado y ejecutado a traves de las siguientes herramientas:
Express
Mongoose
Faker (base de datos inicial creada con anuncios al azar)

## Ejecución y configuración:

###### Instalar dependencias
ejecutar `npm install`

###### Inicializar base de datos

a traves de: `npm run init-db`.

(borra la base de datos existente si es que la hay)

### Ejecutar la app

a traves del comando `npm start`
(se ejecutara en `http://localhost:3000/`)

## APIs

##### Ads

- `GET` `/api/ads/:id`: para recibir un producto por id


- `GET` `/api/ads/list`: para ver el listado de productos, se pueden agregar distintos filtros:
  - por precio: `price` (`50`, `50-`, `-50`, `50-200`)
  - por nombres que empiezan con su valor (case insensitive): `name` (`gui` encuentra `guitarra`)
  - por tag: `tag` ("work", "mobile", "motor", "lifetime") 
  - por venta o compra: `sale` (`true`/`false`)
  Paginado:
  - `start`: para iniciar desde un desterminado numero de elementos. Defecto: 0.
  - `limit`: para definir el largo de la busqueda. Por defecto: 10
  - `sort`: Permite ordenar por un campo especifico.


- `POST` `/api/ads`: para crear un nuevo anuncio de un articuloa con validacion de sus parametros. 
Recibe un JSON con las siguientes caracteristicas:

```json
    {
    "name": "Nombre del articulo",
    "price": 50.0,
    "sale": true,
    "tags": ["work"],
    "photo": "articulo.jpg"
    }
```
### Tags

- `GET` `/api/tags`: Para ver todos los tags posibles.