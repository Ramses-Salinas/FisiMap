// require('dotenv').config();
// const express = require('express'); // importamos el modulo express

// const app = express(); // creamos la aplicacion 
// const port = process.env.PORT;

// // creamos rutas
// app.get('/',(req, res)=>{ // va a ser una ruta del tipo get. cuando se realice una petición se ejecuta la función
//     res.send('Bienvenido') // la respuesta es mostrar un mensaje, este se muestra como HTML
// })

// app.get('/users',(req, res)=>{ // va a ser una ruta del tipo get. cuando se realice una petición se ejecuta la función
//     res.send('Mostrando todos los usuarios') // la respuesta es mostrar un mensaje
// })

// // funcionalidad para que nuestro servido escuche por un puerto
// app.listen(port, ()=>{
//     console.log('Mi aplicación esta corriendo en mi puerto 3000')
// })

require('dotenv').config(); // toma el .env y las establece como variables de entorno

const Server = require('./models/server');
const server = new Server(); // ya se tiene el index.html servido y las rutas 
server.listen(); // con esto levantamos el servidor