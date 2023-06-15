// Variables de validación

var nombre = false;
var mail = false;
var contraseña = false;
var edad = false;
var telefono = false;
var direccion = false;
var ciudad = false;
var codPostal = false;
var dni = false; 


// Validar el nombre
var inputName = document.getElementById('nombre');
var divName = inputName.parentNode.parentNode;

inputName.addEventListener('blur', validarNombre)
inputName.addEventListener('focus', limpiarMensaje)

function validarNombre(e){
  var textoIngresado = e.target.value;
  if(textoIngresado != ""){
    
    if(textoIngresado.length < 7 || textoIngresado.indexOf(" ") == -1 ){
      
      var spanNameNo = document.createElement(`span`);
    
      spanNameNo.textContent = "Debe completar Nombre y Apellido"
      spanNameNo.style.color = `red`;
      spanNameNo.style.fontSize = `11px`;
      spanNameNo.style.display = `block`;
      divName.appendChild(spanNameNo);
      nombre = false;
    }
    else{
  
      var spanNameOk = document.createElement(`span`);
    
      spanNameOk.textContent = `Ok`;
      spanNameOk.style.color = `green`;
      spanNameOk.style.fontSize = `12px`;
      spanNameOk.style.display = `block`;
      divName.appendChild(spanNameOk);
      nombre = true;
    }

  }
  else{
    nombre = false;
  }
}

// Validar el mail
var inputMail = document.getElementById(`mail`);
var divMail = inputMail.parentNode.parentNode;

inputMail.addEventListener('blur', validarMail);
inputMail.addEventListener('focus', limpiarMensaje);

function validarMail(e){
  var textoIngresado = e.target.value;
  if(textoIngresado != ""){

    var regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if(regEx.test(textoIngresado)){
      var spanMailOk = document.createElement(`span`);
    
      spanMailOk.textContent = `Ok`;
      spanMailOk.style.color = `green`;
      spanMailOk.style.fontSize = `12px`;
      spanMailOk.style.display = `block`;
      divMail.appendChild(spanMailOk);
      mail = true;
  
    }
    else{
      var spanMailNo = document.createElement(`span`);
    
      spanMailNo.textContent = "El formato no es válido"
      spanMailNo.style.color = `red`;
      spanMailNo.style.fontSize = `11px`;
      spanMailNo.style.display = `block`;
      divMail.appendChild(spanMailNo);
      mail = false;
    }
  }
  else{
    mail = false;
  }
}


// Validar contraseña
var inputPass = document.getElementById(`contraseña`);
var divPass = inputPass.parentNode.parentNode;

inputPass.addEventListener('blur', validarPass);
inputPass.addEventListener('focus', limpiarMensaje);

function validarPass(e){
  var textoIngresado = e.target.value;

  if(textoIngresado != ""){

    var regEx = /^(?=.*[a-zA-Z])(?=.*\d)[^\s]{8,}$/;
  
    if(regEx.test(textoIngresado)){
      var spanPassOk = document.createElement(`span`);
    
      spanPassOk.textContent = `Ok`;
      spanPassOk.style.color = `green`;
      spanPassOk.style.fontSize = `12px`;
      spanPassOk.style.display = `block`;
      divPass.appendChild(spanPassOk);
      contraseña = true;
  
    }
    else{
      var spanPassNo = document.createElement(`span`);
    
      spanPassNo.textContent = "Solo letras y números y al menos 8 dígitos";
      spanPassNo.style.color = `red`;
      spanPassNo.style.fontSize = `11px`;
      spanPassNo.style.display = `block`;
      divPass.appendChild(spanPassNo);
      contraseña = false;
    }

  }
  else{
    contraseña = false;
  }
}


// Validar edad

var inputAge = document.getElementById(`edad`);
var divAge = inputAge.parentNode.parentNode;

inputAge.addEventListener('blur', validarAge);
inputAge.addEventListener('focus', limpiarMensaje);

function validarAge(e){
  var numeroIngresado = e.target.value;

  if(numeroIngresado != ""){

    if(numeroIngresado > 17 && numeroIngresado % 1 === 0){
      var spanAgeOk = document.createElement(`span`);
    
      spanAgeOk.textContent = `Ok`;
      spanAgeOk.style.color = `green`;
      spanAgeOk.style.fontSize = `12px`;
      spanAgeOk.style.display = `block`;
      divAge.appendChild(spanAgeOk);
      edad = true;
    }
    else{
      var spanAgeNo = document.createElement(`span`);
    
      spanAgeNo.textContent = "Debe ser mayo de 18";
      spanAgeNo.style.color = `red`;
      spanAgeNo.style.fontSize = `11px`;
      spanAgeNo.style.display = `block`;
      divAge.appendChild(spanAgeNo);
      edad = false;
    }
  }
  else{
    edad = false;

  }
}



// Validar telefono

var inputPhone = document.getElementById(`telefono`);
var divPhone = inputPhone.parentNode.parentNode;

inputPhone.addEventListener('blur', validarPhone);
inputPhone.addEventListener('focus', limpiarMensaje);

function validarPhone(e){
  var numeroIngresado = e.target.value;

  if(numeroIngresado != ""){
    var phoneRegEx = /^\d{7,}$/;

    if(phoneRegEx.test(numeroIngresado)){
      var spanPhoneOk = document.createElement(`span`);
    
      spanPhoneOk.textContent = `Ok`;
      spanPhoneOk.style.color = `green`;
      spanPhoneOk.style.fontSize = `12px`;
      spanPhoneOk.style.display = `block`;
      divPhone.appendChild(spanPhoneOk);
      telefono = true;
    }
    else{
      var spanPhoneNo = document.createElement(`span`);
    
      spanPhoneNo.textContent = "Formato no válido. Pruebe sin guiones o paréntesis";
      spanPhoneNo.style.color = `red`;
      spanPhoneNo.style.fontSize = `11px`;
      spanPhoneNo.style.display = `block`;
      divPhone.appendChild(spanPhoneNo);
      telefono = false;
    }
  }
  else{
    telefono = false;
  }
}


// Validar dirección

var inputDir = document.getElementById(`direccion`);
var divDir = inputDir.parentNode.parentNode;

inputDir.addEventListener('blur', validarDir);
inputDir.addEventListener('focus', limpiarMensaje);

function validarDir(e){
  var textoIngresado = e.target.value;

  if(textoIngresado != ""){
    var dirRegEx = /^(?=.*\s)(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\s]{5,}$/;

    if(dirRegEx.test(textoIngresado)){
      var spanDirOk = document.createElement(`span`);
    
      spanDirOk.textContent = `Ok`;
      spanDirOk.style.color = `green`;
      spanDirOk.style.fontSize = `12px`;
      spanDirOk.style.display = `block`;
      divDir.appendChild(spanDirOk);
      direccion = true;
    }
    else{
      var spanDirNo = document.createElement(`span`);
    
      spanDirNo.textContent = "Formato no válido. Ingrese la calle y el número";
      spanDirNo.style.color = `red`;
      spanDirNo.style.fontSize = `11px`;
      spanDirNo.style.display = `block`;
      divDir.appendChild(spanDirNo);
      direccion = false;
    }
  }
  else{
    direccion = false;
  }
}


// Validar ciudad

var inputCity = document.getElementById(`ciudad`);
var divCity = inputCity.parentNode.parentNode;

inputCity.addEventListener('blur', validarCity);
inputCity.addEventListener('focus', limpiarMensaje);

function validarCity(e){
  var textoIngresado = e.target.value;

  if(textoIngresado != ""){
    var cityRegEx = /^[A-Za-z\s]{3,}$/;

    if(cityRegEx.test(textoIngresado)){
      var spanCityOk = document.createElement(`span`);
    
      spanCityOk.textContent = `Ok`;
      spanCityOk.style.color = `green`;
      spanCityOk.style.fontSize = `12px`;
      spanCityOk.style.display = `block`;
      divCity.appendChild(spanCityOk);
      ciudad = true;
    }
    else{
      var spanCityNo = document.createElement(`span`);
    
      spanCityNo.textContent = "Formato no válido. Pruebe sin abreviaciones";
      spanCityNo.style.color = `red`;
      spanCityNo.style.fontSize = `11px`;
      spanCityNo.style.display = `block`;
      divCity.appendChild(spanCityNo);
      ciudad = false;
    }
  }
  else{
    ciudad = false;
  }
}


// Validar código postal

var inputCode = document.getElementById(`codigo`);
var divCode = inputCode.parentNode.parentNode;

inputCode.addEventListener('blur', validarCode);
inputCode.addEventListener('focus', limpiarMensaje);

function validarCode(e){
  var textoIngresado = e.target.value;

  if(textoIngresado != ""){
    var codeRegEx = /^\d{3,}$/;

    if(codeRegEx.test(textoIngresado)){
      var spanCodeOk = document.createElement(`span`);
    
      spanCodeOk.textContent = `Ok`;
      spanCodeOk.style.color = `green`;
      spanCodeOk.style.fontSize = `12px`;
      spanCodeOk.style.display = `block`;
      divCode.appendChild(spanCodeOk);
      codPostal = true;
    }
    else{
      var spanCodeNo = document.createElement(`span`);
    
      spanCodeNo.textContent = "Formato no válido";
      spanCodeNo.style.color = `red`;
      spanCodeNo.style.fontSize = `11px`;
      spanCodeNo.style.display = `block`;
      divCode.appendChild(spanCodeNo);
      codPostal = false;
    }
  }
  else{
    codPostal = false;
  }
}


// Validar dni
var inputDni = document.getElementById(`dni`);
var divDni = inputDni.parentNode.parentNode;

inputDni.addEventListener('blur', validarDni);
inputDni.addEventListener('focus', limpiarMensaje);

function validarDni(e){
  var numeroIngresado = e.target.value;

  if(numeroIngresado != ""){
    var dniRegEx = /^\d{7,8}$/;

    if(dniRegEx.test(numeroIngresado)){
      var spanDniOk = document.createElement(`span`);
    
      spanDniOk.textContent = `Ok`;
      spanDniOk.style.color = `green`;
      spanDniOk.style.fontSize = `12px`;
      spanDniOk.style.display = `block`;
      divDni.appendChild(spanDniOk);
      dni = true;
    }
    else{
      var spanDniNo = document.createElement(`span`);
    
      spanDniNo.textContent = "Formato no válido";
      spanDniNo.style.color = `red`;
      spanDniNo.style.fontSize = `11px`;
      spanDniNo.style.display = `block`;
      divDni.appendChild(spanDniNo);
      dni = false;
    }
  }
  else{
    dni = false;
  }
}


// Ventana emergente al presionar "Enviar"

var buttonSend = document.querySelector('button[type="submit"]');
buttonSend.addEventListener('click', ventanaEmergente);



function ventanaEmergente(e){
  e.preventDefault();
  //var divs = document.querySelectorAll(`.userData`);

  var campos =  [`Nombre y Apellido`, `Mail`, `Contraseña`, `Edad`, `Telefono`, `Dirección`, `Ciudad`, `Codigo Postal`, `Dni`];


  var validaciones = [nombre, mail, contraseña, edad, telefono, direccion, ciudad, codPostal, dni];
 

  var posicion = [];

  var validacionOk = true;

  for(i = 0 ; i < validaciones.length; i++){
    
    if(validaciones[i] != true){
      validacionOk = false;
      posicion.push(i);
    };
  }

  if(validacionOk){
    var inName = document.getElementById('nombre');
    var inMail = document.getElementById('mail');
    var inPass = document.getElementById('contraseña');
    var inAge= document.getElementById('edad');
    var inTel = document.getElementById('telefono');
    var inDir = document.getElementById('direccion');
    var inCity = document.getElementById('ciudad');
    var inCode = document.getElementById('codigo');
    var inDni = document.getElementById('dni');

    var name = inName.value;
    var email = inMail.value;
    var pass = inPass.value;
    var age = inAge.value;
    var tel = inTel.value;
    var dir = inDir.value;
    var city = inCity.value;
    var code = inCode.value;
    var dnI = inDni.value;

    alert(`Validación exitosa. Nombre y Apellido: ${name}, E-mail: ${email}, Contraseña: ${pass}, Edad: ${age}, Teléfono: ${tel}, Dirección: ${dir}, Ciudad: ${city}, Código Postal: ${code}, Dni: ${dnI}.`);

  }
  else{
    
    var camposNoValidos = "";
    for(i = 0; i < posicion.length; i++){
      camposNoValidos = `${camposNoValidos} ${campos[posicion[i]]},`;

    }

    alert(`Falló la validación. Por favor revisár los siguientes campos: ${camposNoValidos}.`);

  }

}




// Funcion para limpiar todos los mensajes de validación una vez el usuario vuelve a editar el input

function limpiarMensaje(e){
  var elementEvent = e.target;
  var divParenElement = elementEvent.parentNode.parentNode; 

  var span = divParenElement.lastElementChild;
  if(span.tagName === `SPAN`){

    divParenElement.removeChild(span);
  }

  inputName = document.getElementById('nombre');
  nuevoTitulo = hola + inputName.value;
  titulo.textContent = nuevoTitulo;

}




// Cambiar en tiempo real el titulo

var section = document.querySelector('.sec-form');
var titulo = section.firstElementChild;
var nuevoTitulo = "";
var hola = "Hola "


inputName.addEventListener("keydown", cambiarTitulo)


function cambiarTitulo(e){

    inputName = document.getElementById('nombre');
    nuevoTitulo = hola + inputName.value;
    titulo.textContent = nuevoTitulo;
}