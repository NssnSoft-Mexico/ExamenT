module.exports = (app) => {
    const usuarios = require("../controllers/usuario.js");
    const productos = require("../controllers/producto.js");

    var router = require("express").Router();
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json()
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    /*Aquí estarán las rutas*/
    //Validar datos del login
    router.post("/auth/signin", jsonParser, urlencodedParser, usuarios.validarLogin);
    //Alta de productod
    router.post("/new/product", jsonParser, urlencodedParser, productos.altaProducto);
    //Eliminar producto
    router.patch("/act/product", jsonParser, urlencodedParser, productos.delProducto);
    //Actualiza producto
    router.patch("/upd/product", jsonParser, urlencodedParser, productos.updProducto);
    //Actualizar todo producto
    router.patch("/updall/product", jsonParser, urlencodedParser, productos.updAllProducto);
    //Consulta datos
    router.get("/alldata/product", jsonParser, urlencodedParser, productos.getAll);
    //Consulta by ID
    router.get("/alldatabyid/product", jsonParser, urlencodedParser, productos.getAllById);

    app.use('/api-farmacia-examen', router);

    //URL para validar conexión a la API
    app.get('/api-farmacia-examen/', (req, res) => res.status(200).send({
        message: 'Conexión a la api',
    }));

    //En caso de que la URL no se encuetre
    app.get('*', (req, res) => res.status(404).send({
        message: "URL no encontrada",
    }))
};