// eliminar varios documentos
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("claseinformatica");
    //var myquery = { city: /C*/ };//usua la expresion regular para eliminar.
    //var myquery = {city: /LAND/, state:"MA"}; //usa mas de un parametro de busqueda.
    //var myquery = {city: /LAND/, state:"MA", pop: {$lt :2000}}; //uso de busquedas con operadores de comparacion https://docs.mongodb.com/manual/reference/operator/query-comparison/
    //var myquery = {city: /LAND/, state:"MA", pop: {$in :[1652,747]}}; //datos que esten dentro de un arreglo especifico
    //var myquery = {city: /LAND/, state:"MA", pop: {$nin :[1652,747]}}; //
    var myquery = { city: /AM/ }; //

    /*
    dbo.collection("zips").find(myquery).toArray(function(err,obj) {//findOne(myquery, function(err, obj) {
      if (err) throw err;
        console.log(obj)  
        console.log(obj.length+" Registros encontrados");
        
      //console.log(obj.result.n + " documentos(s) eliminados");
      db.close();
    });
    */
    dbo.collection("zips").findOne({}, function(err, obj) {
        if (err) throw err;
        var loc0 = obj.loc[0];
        var loc1 = obj.loc[1];
        var calibre = 0.07
        var myquery2 = { "loc[0]": { $gt: loc0 - calibre }, "loc[0]": { $lt: loc0 + calibre }, "loc[1]": { $lt: loc0 + calibre }, "loc[1]": { $gt: loc0 - calibre } };
        dbo.collection("zips").find(myquery).toArray(function(err2, obj2) {
            if (err2) throw err2;
            console.log(obj2);
            console.log(obj2.length + " Registros en el rango")
            db.close();
        });
    });
});