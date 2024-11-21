const express = require("express"); // Traemos Express para manejar rutas
const path = require("path"); // Traemos path para gestionar las rutas de los archivos
const router = express.Router(); // Creamos un router para las rutas

// Ruta para la página de edición
router.get('/edit', (req, res) =>{ 
    res.render(path.join(__dirname,'../views', 'edit.ejs')); // Mostramos la página de editar
});

// Ruta para la página de agregar usuario
router.get('/agregar', (req, res) =>{ 
    res.render(path.join(__dirname,'../views', 'add.ejs')); // Mostramos la página de agregar
});

// Ruta para el archivo de estilos
router.get('/estilos', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','estilos.css')); // Mostramos los estilos principales
});

// Ruta para los estilos de agregar
router.get('/estilosadd', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','estilosadd.css')); // Mostramos los estilos de agregar
});

// Ruta para los estilos de editar
router.get('/estilosedit', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','estilosedit.css')); // Mostramos los estilos de editar
});

module.exports = router; // Exportamos las rutas para usarlas en la principal


