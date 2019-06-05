
var cc ="anita lava la tina";

var cadena = require("./cadena").cadena;
var mycadena = cadena(cc);
console.log("la cadena es: "+mycadena)

var palindromo = require("./cadena").palindromo;
var mypalindromo = palindromo(cc);
console.log("la cadena : "+mypalindromo)

var letras = require("./cadena").letras;
var myletras = letras(cc);
console.log("el numero de letras es : "+myletras)

var vocales = require("./cadena").vocales;
var myvocales = vocales(cc);
console.log("el numero de vocales : "+myvocales)

var consonantes = require("./cadena").consonantes;
var myconso = consonantes(cc);
console.log("el numero de consonantes : "+myconso)

var words = require("./cadena").words;
var mywords = words(cc);
console.log("el numero de palabras son : "+mywords)
