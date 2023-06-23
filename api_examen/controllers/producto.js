const Producto = require("../models/producto.js");

exports.altaProducto = (req, res) => {
    Producto.insertarProducto(req.body.nombre, req.body.sustancia_activa, req.body.categoria, req.body.precio, req.body.existencia, req.body.porcion,
        req.body.estatus, req.body.receta_obligatoria, req.body.descripcion, req.body.ruta_imagen, (err, data) => {
            if (err) {
                if (err.error === "No se inserto ningun dato") {
                    res.status(400).send({
                        message: `No se pudo realizar el alta del producto`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al intentar hacer el alta del producto!"
                    });
                }
            } else {
                if (data.filas_afectadas > 0 && data.id_creado > 0) {
                    res.status(200).send({
                        id_creado: data.id_creado,
                        message: "Alta de producto exitosa!"
                    });

                }
            }
        })
};

exports.delProducto = (req, res) => {
    Producto.eliminaProducto(req.body.id, (err, data) => {
        if (err) {
            if (err.error === "No se actualizo ningun dato") {
                res.status(400).send({
                    message: `No se pudo realizar el actualizacion del producto`
                });
            } else {
                res.status(500).send({
                    message: "Error al intentar hacer el actualizacion del producto!"
                });
            }
        } else {
            console.log(data);

            if (data.filas_afectadas > 0) {
                res.status(200).send({
                    id_creado: data.id_creado,
                    message: "Actualizacion de producto exitosa!"
                });

            }
        }
    })
};

exports.updProducto = (req, res) => {
    Producto.actualizarStockProducto(req.body.id, req.body.nombre, req.body.existencia, (err, data) => {
        if (err) {
            if (err.error === "No se actualizo ningun dato") {
                res.status(400).send({
                    message: `No se pudo realizar el actualizacion del producto`
                });
            } else {
                res.status(500).send({
                    message: "Error al intentar hacer el actualizacion del producto!"
                });
            }
        } else {
            console.log(data);

            if (data.filas_afectadas > 0) {
                res.status(200).send({
                    id_creado: data.id_creado,
                    message: "Actualizacion de producto exitosa!"
                });

            }
        }
    })
};

exports.updAllProducto = (req, res) => {
    Producto.allProducto(
        req.body.id,
        req.body.nombre,
        req.body.sustancia_activa,
        req.body.categoria,
        req.body.precio,
        req.body.existencia,
        req.body.porcion,
        req.body.estatus,
        req.body.receta_obligatoria,
        req.body.descripcion,
        req.body.ruta_imagen,
        (err, data) => {
            if (err) {
                if (err.error === "No se actualizo ningun dato") {
                    res.status(400).send({
                        message: `No se pudo realizar el actualizacion del producto`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al intentar hacer el actualizacion del producto!"
                    });
                }
            } else {
                console.log(data);

                if (data.filas_afectadas > 0) {
                    res.status(200).send({
                        id_creado: data.id_creado,
                        message: "Actualizacion de producto exitosa!"
                    });

                }
            }
        })
};

exports.getAll = (req, res) => {
    Producto.dataAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: `No existe el Id`
                });
            } else {
                res.status(500).send({
                    message: "Error al intentar consultar datos"
                });
            }
        } else {
            res.status(200).send({
                data,
                message: "Consulta Exitosa!"
            });

        }
    })
};

exports.getAllById = (req, res) => {
    Producto.dataAllId(req.body.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: `No existe el Id`
                });
            } else {
                res.status(500).send({
                    message: "Error al intentar consultar datos"
                });
            }
        } else {
            res.status(200).send({
                data,
                message: "Consulta Exitosa!"
            });

        }
    })
};