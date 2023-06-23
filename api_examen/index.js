const express = require('express');
const app = express();
const cors = require("cors");
var corsOptions = {
	origin: true
};

app.use(cors(corsOptions));

require("./routes/index.js")(app);

//Se agregar el puerto a la aplicación
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

app.listen(port, () => {
	console.log('Corriendo en puerto: ' + port);
});

module.exports = app;