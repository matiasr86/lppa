console.log(`Ejercicio 4`);

/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5”. */

var number = Math.random(0 - 1);
console.log(`A)`)
console.log(number)

if(number >= 0.5){
  console.log(`Mayor a 0,5`)
}else{
  console.log(`Menor a 0,5`)
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años. */

console.log(`B)`)
var age = Math.floor(Math.random() *100) + 1;
console.log(age);

if(age < 2){
  console.log("Bebe")
};
if(age >=2 && age < 13){
  console.log("Niño")
}
if(age > 12 && age < 20){
  console.log("Adolecente")
}
if(age > 19 && age < 31){
  console.log("Joven")
}
if(age > 30 && age < 61){
  console.log("Adulto")
}
if(age > 60 && age < 76){
  console.log("Adulto mayor")
}
if(age > 75){
  console.log("Anciano")
}
