const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/',
    method: 'GET'
};

// Crear la petición
const req = http.request(options, (res) => {
    let data = '';

    console.log(`Código de estado: ${res.statusCode}`);

    // Un trozo de datos ha sido recibido.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // La respuesta completa ha sido recibida. Imprimir el resultado.
    res.on('end', () => {
        console.log('Datos recibidos del servidor:');
        console.log(JSON.parse(data));
    });
});

req.on('error', (error) => {
    console.error(`Error en la petición: ${error.message}`);
});

// Finalizar y enviar la petición
req.end();