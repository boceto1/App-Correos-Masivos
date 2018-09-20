const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.CORREO,
      pass: process.env.CONTRASENIA
    }
});

let enviarCorreo =  async (destinarios,asunto,texto) => {

        var msg = {
            text: texto,
            createTextFromHtml: true,
            from: `<${process.env.CORREO}>`,
            to: `<${destinarios}>`,
            subject: asunto
          };

          transport.sendMail(msg, function (err) {

            
            if (err) {
                console.log(err);
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

