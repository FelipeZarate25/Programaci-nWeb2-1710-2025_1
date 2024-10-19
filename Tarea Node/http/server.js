//Importar el módulo hhtp que viene incluido en Node.js
const http = require('http');

//Definimos el puerto que va a correr el servidor
const port = 3009;

// Crear servidor
const server = http.createServer((req, res) => {
    const nombre = 'Felipe de Jesus Pedro Zarate'; 
    const numero = '422012511'; 

    // Respuesta personalizada
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end(`Hola razita, mi nombre es ${nombre} y mi numero de cuenta es: ${numero}`);
});

// Escuchar el puerto específico
server.listen(port, () => {
    console.log(`El servidor está funcionando por medio de http://localhost:${port}`);
});
