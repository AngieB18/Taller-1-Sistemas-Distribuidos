const http = require('http');

const HOST = '127.0.0.1'; // localhost
const PORT = 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
    // Establecer la cabecera para indicar que la respuesta es JSON
    res.setHeader('Content-Type', 'application/json');
    // Escribir el código de estado HTTP 200 OK
    res.writeHead(200);

    // Los datos que enviaremos. ¡Esto viajará en claro!
    const responseData = {
        message: "Hola! Estos datos no estan cifrados.",
        secret: "password123456"
    };

    // Enviar la respuesta como una cadena de texto JSON y finalizar
    res.end(JSON.stringify(responseData));
});

// Poner el servidor a escuchar en el puerto y host especificados
server.listen(PORT, HOST, () => {
    console.log(`🚀 Servidor corriendo en http://${HOST}:${PORT}`);
});