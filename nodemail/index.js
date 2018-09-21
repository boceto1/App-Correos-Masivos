const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.CORREO,
      pass: process.env.CONTRASENIA
    }
});


let generarListaCorreos = async (destinatarios) =>{

    let correos = destinatarios.split(',');

    let respuesta = "";

    correos.forEach(correo => {
        respuesta+=`<${correo}>,`
    });

    return respuesta;
}

let enviarCorreo =  async (destinarios,asunto,texto) => {


    let correos = await generarListaCorreos(destinarios);

        var msg = {
            text: texto,
            createTextFromHtml: true,
            from: `<${process.env.CORREO}>`,
            to: correos,
            subject: asunto
          };

          transport.sendMail(msg, function (err) {

            
            if (err) {
              return {
                  ok:false,
                  err
              };
            }
            return {
                ok:true,
                message:"Mensaje enviado con éxito"
            };
          });

    }


    module.exports = {
        enviarCorreo
    }

