var express = require('express');
var router = express.Router();
//const bodyParser = require('body-parser');
//router.use(bodyParser.json());
//1. Creamos Variable
var Usuario = require('../models/usuario');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//2. Creamos la validacion para el post
router.post('/registro',(req,res,next)=>{
  Usuario.create(req.body,(err,usuario)=>{
    if(err){next(err)}
    else{
      var ok={
        estado:"ok",
        id:usuario._id
      }
      res.json(ok);
    }
  })
})

module.exports = router;