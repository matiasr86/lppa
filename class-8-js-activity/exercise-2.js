console.log(`Ejercicio 2`)

var text = "momentaneamente"
var textUp = text.toUpperCase();

console.log(`A) Variable = ${text}, y en mayusculas = ${textUp}`);

var textFiveFirst = text.substring(0 , 5);

console.log(`B) Variable = ${text}, y las primeras 5 letras son = ${textFiveFirst}`);

var textThreeLast = text.substring(text.length - 3 , text.length);

console.log(`C) Variable = ${text}, y las ultimas 3 letras son = ${textThreeLast}`);

var textCustom = text.substring(0 , 1).toUpperCase() + text.substring(1);

console.log(`D) Variable = ${text}, y con la primera letra en mayuscula = ${textCustom}`);

var text2 = `momentaneamente y en simultaneo`
var position = text2.indexOf(" ");

console.log(`E) Variable = ${text2}, y la posicion del primer espacio en blanco es = ${position}`);


var text3 = `momentaneamente simultaneamente`
var espacio = text3.indexOf(" ");
var word1 = text3.substring(0 , espacio).toLowerCase();
var word2 = text3.substring(espacio + 1).toLowerCase();
var word1Custom = word1.substring(0 , 1).toUpperCase() + word1.substring(1);
var word2Custom = word2.substring(0 , 1).toUpperCase() + word2.substring(1);
var text3Custom = word1Custom + " " + word2Custom;

console.log(`F) Variable = ${text3}, y las dos palabras con mayuscula en la primera letra es = ${text3Custom}`);




