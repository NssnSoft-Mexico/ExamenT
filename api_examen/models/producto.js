const sql = require('./db.js');

const Producto = function(producto) {
    this.id = producto.id
    this.nombre = producto.nombre
    this.sustancia_activa = producto.sustancia_activa
    this.categoria = producto.categoria
    this.precio = producto.precio
    this.existencia = producto.existencia
    this.porcion = producto.porcion
    this.estatus = producto.estatus
    this.receta_obligatoria = producto.receta_obligatoria
    this.descripcion = producto.descripcion
    this.ruta_imagen = producto.ruta_imagen
}

Producto.eliminaProducto = (id, result) => {
        sql.query(`UPDATE Productos SET estatus = 0 WHERE id = ${id}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log(res.affectedRows)
            if (res.affectedRows > 0) {
                result(null, { "filas_afectadas": res.affectedRows, "id_modificado": res.insertId });
                return;
            } else {
                result({ error: "No se actualizo ningun dato" }, null);
            }
        });
    },

    Producto.actualizarStockProducto = (id, nombre, existencia, result) => {
        sql.query(`UPDATE Productos SET nombre = '${nombre}', existencia = ${existencia} WHERE id = ${id}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log(res.affectedRows)
            if (res.affectedRows > 0) {
                result(null, { "filas_afectadas": res.affectedRows, "id_modificado": res.insertId });
                return;
            } else {
                result({ error: "No se actualizo ningun dato" }, null);
            }
        });
    },

    Producto.allProducto = (id, nombre, sustancia_activa, categoria, precio, existencia, porcion, estatus, receta_obligatoria, descripcion, ruta_imagen, result) => {
        sql.query(`UPDATE Productos SET nombre = '${nombre}', sustancia_activa = '${sustancia_activa}', categoria = '${categoria}', precio = '${precio}', existencia = '${existencia}', porcion = '${porcion}', estatus = '${estatus}', receta_obligatoria = '${receta_obligatoria}', descripcion = '${descripcion}', ruta_imagen = '${ruta_imagen}' WHERE id = ${id};`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log(res.affectedRows)
            if (res.affectedRows > 0) {
                result(null, { "filas_afectadas": res.affectedRows, "id_modificado": res.insertId });
                return;
            } else {
                result({ error: "No se actualizo ningun dato" }, null);
            }
        });
    },

    Producto.insertarProducto = (nombre, sustancia_activa, categoria, precio, existencia, porcion, estatus, receta_obligatoria, descripcion, ruta_imagen, result) => {
        sql.query(`INSERT INTO Productos (nombre, sustancia_activa, categoria, precio, existencia, porcion, estatus, receta_obligatoria, descripcion, ruta_imagen)` +
            ` VALUES("${nombre}", "${sustancia_activa}", "${categoria}", "${precio}", "${existencia}", "${porcion}", "${estatus}", "${receta_obligatoria}", "${descripcion}", "${ruta_imagen}")`, (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }
                console.log(res.affectedRows)
                if (res.affectedRows > 0 && res.insertId > 0) {
                    result(null, { "filas_afectadas": res.affectedRows, "id_creado": res.insertId });
                    return;
                } else {
                    result({ error: "No se inserto ningun dato" }, null);
                }

            });
    }

Producto.dataAll = (result) => {
    sql.query(`SELECT * FROM Productos WHERE estatus = 1 `, (err, res) => {
        if (err) throw err;
        result(null, res);
        return;
    });
}

Producto.dataAllId = (id, result) => {
    sql.query(`SELECT * FROM Productos WHERE id = ${id} `, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
}

module.exports = Producto;