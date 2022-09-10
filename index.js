const express = require('express'); //ya se tiene el framework express

const app = express();
const rutas = require('./router'); //archivo que dirije la rutas de acuerdo al parametro que se le indique




app.set('view engine', 'ejs') //plantilla
app.use('/public', express.static('public')) //carpeta donde estan todos los archivos estaticos y todo lo encuentro por su nombre
app.use(rutas )//indica para usar las rutas



//la pagina principal

app.listen(3000, (req, res)=>{
    console.log('server corriendo en http://localhost:3000');
})