
const express = require('express');
const Usuario = require('../models/usuario')

const app = express()

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



module.exports = app;