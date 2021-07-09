/*
autor: Gabriel Alegre
enunciado ejr05BIS:
Debemos lograr tomar nombre y edad por ID, apellido por prompt y mostrarlos concatenados
*/
function mostrar()
{	
  let nombreIngresado;
  let edad;
  let apellido;
  let mensaje;

  apellido= prompt("Ingrese su apellido");

  nombreIngresado=document.getElementById('txtIdNombre').value;
  edad=document.getElementById('txtIdEdad').value;

  mensaje="Usted se llama "+nombreIngresado+" su apellido es "+apellido+" y tiene "+edad+" años";

  alert(mensaje);

  /*
//EJERCICIO 5 ANTES DEL BIS
enunciado ejr05:
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años"     
function mostrar()
{
  // Se crea 2 variables (edad y nombre), para el usuario.
  let nombreIngresado;
  let edad;

  // En este paso guardamos en la V (nombre) el valor indicado, en este caso el nombre ingresado por el usuario.
  nombreIngresado = document.getElementById("txtIdNombre").value;
  // En este paso guardamos en la V (edad) el valor indicado, en este caso la edad ingresado por el usuario.
  edad = document.getElementById("txtIdEdad").value;

  // Para finalizar se imprime en pantalla el msj y sus respectivos valores.
  alert("Su nombre es "+nombreIngresado+" y su edad es "+edad+" años.");
}

*/

}

