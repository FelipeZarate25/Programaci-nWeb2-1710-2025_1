const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Cambia 'index.html' si tu archivo tiene otro nombre
});

app.listen(port, () => {
    console.log(`El server está en escucha desde el http://localhost:${port}`);
});
