console.log(`Ejercicio 6`);

// 6. Funciones
// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.

console.log(`A`);
function suma(num1, num2){
  var val1 = validarNumero(num1);
  if (val1){
    console.log("El numero 1 no es un número")
  }
  var val2 = validarNumero(num2);
  if (val2){
    console.log("El numero 2 no es un número")
  }
  
  return num1 + num2;
}

var result = suma(145, 1245);
console.log(result);

console.log(`B`);

function validarNumero(num){
  if(isNaN(num)){
    return true;
  }
  else{
    return false;
  }
}

var result2 = suma(124, "Hola")
console.log(result2);

console.log(`C`);

function validateInteger (num){
  return Number.isInteger(num);
}


console.log(validateInteger(125));

console.log(`D y E`);

function sumar(num1, num2){
  var val1 = validarNumero(num1);
  if (val1){
    console.log("El numero 1 no es un número")
  }
  var val2 = validarNumero(num2);
  if (val2){
    console.log("El numero 2 no es un número")
  }

  if(!validateInteger(num1)){
    alert(`El número ${num1} no era entero`);
    var num1 = Math.round(num1);
  }
  if(!validateInteger(num2)){
    alert(`El número ${num2} no era entero`);
    var num2 = Math.round(num2);
  }
  
  return num1 + num2;
}

result4 = sumar(12.7 , 45);

console.log(result4);


