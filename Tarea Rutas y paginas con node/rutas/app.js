const express = require("express"); // Importa Express
const app = express(); // Crea una instancia de Express
const port = 3010; // Define el puerto en el que se ejecutará el servidor
const routes = require("./routes/server"); // Importa las rutas desde server.js

app.use("/", routes); // Usa las rutas definidas en server.js

app.listen(port, () => {
    console.log(`Servidor en escucha desde http://localhost:${port}`);
});
