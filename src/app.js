const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

// Configurar rutas para servir archivos estáticos desde la carpeta 'src'

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

// Ruta específica para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));

});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
