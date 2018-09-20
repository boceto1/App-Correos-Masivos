const express = require('express');
const _ = require('underscore');

const {enviarCorreo} = require('../nodemail')

const app = express()

const Usuario = require('../models/usuario')

/**
 * Crear usuario
 */
app.post('/api/usuarios',(req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
    });

    usuario.save((err,usuarioDB)=>{

        if(err){
           return res.status(400).json({
                ok:false,
                err
            });  
        }

        res.status(201).json({
            ok:true,
            usuario:usuarioDB
        })

    });

});

/**
 * Llamar a todos los usuarios
 */
app.get('/api/usuarios',(req, res) => {

    Usuario.find({})
            .exec((err,usuarios)=>{ //ejecutar función con resultados
                
                if(err){
                    return res.status(400).json({
                         ok:false,
                         err
                     });  
                 }
                 

                 Usuario.count({estado:true},(err,count)=>{
                    res.json({
                        ok:true,
                        count:usuarios.length,
                        usuarios
                    }) 
                 })
 

            })  
});


/**
 * Obtener todos los correos
 */
app.get('/api/usuarios/correos',(req, res) => {

    Usuario.find({})
            .exec((err,usuarios)=>{ //ejecutar función con resultados
                
                if(err){
                    return res.status(400).json({
                         ok:false,
                         err
                     });  
                 }
                 
                 let correos=[];
                 usuarios.forEach(usuario=>correos.push(usuario.email))

                    res.json({
                        ok:true,
                        count:correos.length,
                        correos
                    }) 
            })  
});


/**
 * Enviar correo 
 */
app.post('/api/enviarCorreo',async (req, res) => {

    let correo = req.body;
    

    let respuestaEnvio = await enviarCorreo(correo.destinatarios,correo.asunto,correo.texto);
    
    console.log(respuestaEnvio);
    res.json({
        message:"Algo se hizo"
    })

});



module.exports = app;