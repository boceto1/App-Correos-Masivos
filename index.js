require('./config')

const express = require('express');
const nodemailer = require('nodemailer');
const hbs = require('hbs');
const path = require('path');

const app = express();

//Middlewares
//require('./hbs/helpers') 

//Configuración de carpeta publica
app.use(express.static(path.join(__dirname,'/public')));

//Partials y HBS
hbs.registerPartials(path.join(__dirname,'/views/parciales'));
app.set('view engine', 'hbs');


app.get('/', (req, res)=> {
  
    res.render('index',{
        titulo:"INICIO | APP CORREROS"
    })
})

app.get('/registro', (req, res)=> {
  
    res.render('registro',{
        titulo:"Registro | APP CORREROS"
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`Escuchando peticiones en el puerto: ${process.env.PORT}`);
})