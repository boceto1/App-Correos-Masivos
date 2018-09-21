require('./config')

const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

//Middlewares
//require('./hbs/helpers') 
//Para formato aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//Para formato application/json
app.use(bodyParser.json())

//Configuración de carpeta publica
app.use(express.static(path.join(__dirname,'/public')));


//Partials y HBS
//hbs.registerPartials(path.join(__dirname,'/views/parciales'));
app.set('view engine', 'ejs');

// Configuracion global de rutas
app.use(require('./routes'))

 mongoose.connect(process.env.URLDB,{ useNewUrlParser: true },(err,res)=>{
    if (err) throw err
    console.log('Conexion establecida...')
    app.listen(process.env.PORT, ()=>{
        console.log(`Corriendo en el puerto: ${process.env.PORT}`)
    })    
}) 