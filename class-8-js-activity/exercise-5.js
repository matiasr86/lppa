console.log(`Ejercicio 5`);

// 5. For
// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
// bucle for de JavaScript para mostrar una alerta utilizando cada una de las
// palabras.
// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
// mostrar una alerta por cada palabra modificada.
// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
// del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
// la variable sentence. Al final mostrar una única alerta con la cadena completa.
// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
// el número de la repetición, es decir que al final de la ejecución del bucle for
// debería haber 10 elementos dentro del array, desde el número 0 hasta al número
// 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var palabras = ["rosario", "cordoba", "mendoza", "tucuman", "misiones"];

for(i=0 ; i< palabras.length; i++ ){
  alert(palabras[i]);

}
console.log(`A`);



console.log(`B`);
var palabras2 = palabras;

for(i=0 ; i< palabras2.length; i++ ){
  var temp = palabras2[i].substring(0 , 1).toUpperCase() + palabras2[i].substring(1);

  console.log(`Atencion, esto es un alerta. La palabra ${temp} fue modificada`)


  
}

console.log(`C`);

var sentence = ""

for(i=0 ; i< palabras.length; i++ ){
  if(i == 0){
    sentence = palabras[i];
  }
  else{
    sentence = sentence + " " + palabras[i];
  }
}
console.log(`C`);
console.log(palabras);
alert(sentence);

console.log(`D`);
var emptyarray = [];

for(i=0 ; i< 10; i++){
  emptyarray[i] = i;
}

console.log(emptyarray);