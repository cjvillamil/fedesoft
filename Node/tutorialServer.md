# Creacion Server

Pasos para crear server:

1. Iniciar visual studio en una carpeta y en la terminal ejecutar

        npm install -g express-generator

2. Ejecutar el comando

        express nombreCarpeta

3. Cambiar al directorio
        
        cd nombreCarpeta

4. Instalar dependencias:

        npm install

5. Ejecutar la app:

        npm start

6. Crear archivo `.gitignore` añadir la carpeta `/node_modules`

7. Instalar dependencias
- para comunicarse con base de datos:

        npm i mongoose

- para no tener que reiniciar el servidor constantemente
        npm i nodemon

8. En el archivo package.json añadir dentro de scripts insertarmos

        ,"start:n":"nodemon ./bin/www"

- ahora para iniciar la app usaremos el comando
        
        npm run start:n


creamos en la carpeta nombreCarpeta el archivo config.js

```JS
module.exports={
    'mongoUrl':'mongodb://localhost:27017/testDB'
}
```

creamos carpeta models para nuestros esquemas: para efecto ilustrativo se crea el esquema para usuarios en el archivo usuario.js
```JS
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
    nombreUsuario:{
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
```
en /routes/user.js adicionamos el modulo del modelo
```js
//1. Creamos Variable
var Usuario = require('../models/usuario');

...

//2. Creamos la validacion para el post
router.post('/registro',(req,res,next)=>{
  Usuario.create(req.body,(err,usuario)=>{
    if(err){next(err)}
    else{
      var ok={
        estado:"ok",
        id:usuario._id
      }
      res.json(ok)
    }
  })
})
```
