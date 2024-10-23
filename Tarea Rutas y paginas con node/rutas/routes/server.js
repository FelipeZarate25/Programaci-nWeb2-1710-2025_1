const express = require('express'); // Importa Express
const path = require('path'); // Importa Path para manejar rutas de archivos
const router = express.Router(); // Crea una instancia del router

// Redirige la raíz a la página de Bienvenida
router.get('/', (req, res) => {
    res.redirect('/Bienvenida');
});

// Define la ruta GET para 'Bienvenida'
router.get('/Bienvenida', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define la ruta GET para 'Quienes somos'
router.get('/quienes-somos', (req, res) => {
    res.sendFile(path.join(__dirname, 'quienes-somos.html')); 
});

// Define la ruta GET para 'Conocenos'
router.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, 'conocenos.html')); 
});

module.exports = router; // Exporta el router
