console.log(`Ejercicio 3`);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(`A) Dado el array de meses ${months}, los meses 5 y 11 son ${months[4]} y ${months[10]}`);


var orderMonth = months;
orderMonth.sort();

console.log(`B) Array ordenado alfabeticamente quedaria de la siguiente manera  ${orderMonth}`);


orderMonth.unshift("Primero");
orderMonth.push("Ultimo");


console.log(`C) Agregando al que ya ordenamos alfabeticamente un elemento al principio y otro al final quedaria de la siguiente manera  ${orderMonth}`);


orderMonth.shift();
orderMonth.pop();

console.log(`D) Quitando los elementos que agregamos quedaria de la siguiente manera  ${orderMonth}`);

var reverseMonths = orderMonth;
reverseMonths.reverse();

console.log(`E) Invirtiendo el orden quedaria de la siguiente manera  ${reverseMonths}`);


var monthsJoin = months;
var join = monthsJoin.join("-");

console.log(`F) Uniendo todos los meses , separandolos con un guion quedaria de la siguiente manera  ${join}`);


var monthsCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 var monthsCopyShort = monthsCopy.slice(4 , 11);

console.log(`G) Otro array con los meses de mayo a noviembre  ${monthsCopyShort}`);








