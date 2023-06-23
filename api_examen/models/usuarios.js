const sql = require('./db.js');

const Usuario = function (usuario) {
    this.id = usuario.id
    this.usuario = usuario.usuario
    this.contraseña = usuario.contraseña
    this.tipo = usuario.tipo
}

Usuario.validarDatos = (username, password, result) => {
    sql.query(`SELECT * FROM Usuarios WHERE usuario  = "${username}" and contraseña = "${password}"`, (err, res) => {
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

module.exports = Usuario;