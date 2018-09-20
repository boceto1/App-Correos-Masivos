const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')


let Schema = mongoose.Schema;

let usuarioSchema = new Schema ({

    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    email:{
       type:String,
       unique:true,
       required:[true,'El correo es necesario'] 
    }
})


// Uso de unique validator
usuarioSchema.plugin(uniqueValidator,{message: '{PATH} debe ser único'})




module.exports = mongoose.model('Usuario', usuarioSchema);