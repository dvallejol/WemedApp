const express = require('express');
const rutas = express.Router();
const mysql = require('mysql');

const configMysql = {
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'agenda'
}

const conectMysql = mysql.createConnection(configMysql);

//donde se va a redirigir

rutas.get('/', (req, res) =>{
    res.render('pages/home', { nombre: 'Manuel'})
})

rutas.get('/contactos', (req, res)=>{
    const query = 'select * from agenda_personal'
     ConectMysql.query(query, (error, result, fields)=>{
        if(error){
            console.log(err);
        }else{
           res.render('pages/contactos', {data:result}) 
        }
     })

})

rutas.get('/consulta', (req, res) =>{
    res.render('pages/pacienteexiste.ejs')
})

module.exports = rutas