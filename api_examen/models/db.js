const mysql = require("mysql2");
const dbConfig = require("../config/config.json");
// Se crea la conexión a la base de datos
const connection = mysql.createConnection({
  host: dbConfig.bd_dev.HOST,
  user: dbConfig.bd_dev.USER,
  password: dbConfig.bd_dev.PASSWORD,
  database: dbConfig.bd_dev.DB
});
// Se abre la conexión a MySQL
connection.connect(error => {
  if (error) throw error;
  console.log("Conectado con éxito a la base de datos.");
});
module.exports = connection;