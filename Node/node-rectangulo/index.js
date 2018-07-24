//var Rec = require('./rectangulo');//requerir un archivo que exporta unas funciones

var RectanguloC = require('./modulues/rectCallback');
/*
var area1 = function(a, b) {//asignar a una variable el valor de una funcion
    return a * b
}

function area2(a, b) { //crear una funcion
    return a * b
}

//function area3(a, b) => (2 * (a + b)) //funcion con ECMAScript 6
var rectangulo = {
        area: (a, b) => (a * b),
        perimetro: (a, b) => (2 * (a + b)),
        perimetro2: function(a, b) {
            return 2 * (a + b);

        }
    }
    var obj = {
            area: (a, b) => (2 * (a + b))

        }
        //console.log(area1(10, 10));
        //console.log(area2(10, 10));
        //console.log(rectangulo.area(2, 5));
    */
/*
function calcularRect(l, b) {
    console.log("rectangulo con altura = " + l + " y base = " + b);
    if (l <= 0 || b <= 0) {
        console.log("dimensiones incorrectas; " + l + " no es una altura válida, ó " + b + " no es una base válida");
    } else {
        console.log("El area del rectangulo de base = " + b + " y altura = " + l + " es " + Rec.area(l, b));
        console.log("El perimetro del rectangulo de base = " + b + " y altura = " + l + " es " + Rec.perimetro(l, b));
    }
}
calcularRect(28, 12);
calcularRect(15, 2);
calcularRect(5, 1);
calcularRect(9, 5);
calcularRect(61, 8);
*/

RectanguloC(10, 10, function(err, respuesta) {
    if (err) {
        console.log(err);
    } else {
        console.log(respuesta.area());
        console.log(respuesta.perimetro());
    }
})