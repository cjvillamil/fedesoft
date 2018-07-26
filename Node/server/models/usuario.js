var mongoose = require('mongoose');
var Esquema = mongoose.Schema;
/*
//funcion para validar correo
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
*/
var esquemaUsuario = new Esquema({
    usuario:{
        type:String,
        required:true
    },
    contrasena:String,
    primerNombre:String,
    segundoNombre:String,
    /*
    //Opcion para validar correo electronico usando una funcion
    correoElectronico:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'El correo electronico es requerido',
        validate: [validateEmail,'Por favor ingrese un correo electronico valido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor ingrese un correo electronico valido']
    }*/
    correo:{
        type: String,
        required:true,
        validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }

});


module.exports = mongoose.model('Usuario',esquemaUsuario);